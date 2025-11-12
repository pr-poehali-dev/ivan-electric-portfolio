'''
Business: CRUD API для управления видео портфолио
Args: event - dict с httpMethod, body, queryStringParameters
      context - object с attributes: request_id, function_name
Returns: HTTP response dict
'''

import json
import os
from typing import Dict, Any, List, Optional
import psycopg2
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel, Field, ValidationError

class VideoCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    video_url: str = Field(..., min_length=1)
    thumbnail_url: Optional[str] = None
    description: Optional[str] = None

class VideoUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=255)
    video_url: Optional[str] = Field(None, min_length=1)
    thumbnail_url: Optional[str] = None
    description: Optional[str] = None

def get_db_connection():
    return psycopg2.connect(os.environ['DATABASE_URL'])

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    try:
        if method == 'GET':
            return handle_get(event)
        elif method == 'POST':
            return handle_post(event)
        elif method == 'PUT':
            return handle_put(event)
        elif method == 'DELETE':
            return handle_delete(event)
        else:
            return {
                'statusCode': 405,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Method not allowed'}),
                'isBase64Encoded': False
            }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }

def handle_get(event: Dict[str, Any]) -> Dict[str, Any]:
    conn = get_db_connection()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    params = event.get('queryStringParameters') or {}
    video_id = params.get('id')
    
    if video_id:
        cursor.execute(
            "SELECT id, title, video_url, thumbnail_url, description, created_at, updated_at FROM videos WHERE id = %s",
            (video_id,)
        )
        video = cursor.fetchone()
        cursor.close()
        conn.close()
        
        if not video:
            return {
                'statusCode': 404,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Video not found'}),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps(dict(video), default=str),
            'isBase64Encoded': False
        }
    else:
        cursor.execute(
            "SELECT id, title, video_url, thumbnail_url, description, created_at, updated_at FROM videos ORDER BY created_at DESC"
        )
        videos = cursor.fetchall()
        cursor.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps([dict(video) for video in videos], default=str),
            'isBase64Encoded': False
        }

def handle_post(event: Dict[str, Any]) -> Dict[str, Any]:
    body_data = json.loads(event.get('body', '{}'))
    video_data = VideoCreate(**body_data)
    
    conn = get_db_connection()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    cursor.execute(
        "INSERT INTO videos (title, video_url, thumbnail_url, description) VALUES (%s, %s, %s, %s) RETURNING id, title, video_url, thumbnail_url, description, created_at, updated_at",
        (video_data.title, video_data.video_url, video_data.thumbnail_url, video_data.description)
    )
    new_video = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    
    return {
        'statusCode': 201,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps(dict(new_video), default=str),
        'isBase64Encoded': False
    }

def handle_put(event: Dict[str, Any]) -> Dict[str, Any]:
    params = event.get('queryStringParameters') or {}
    video_id = params.get('id')
    
    if not video_id:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Video ID is required'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    video_data = VideoUpdate(**body_data)
    
    update_fields = []
    update_values = []
    
    if video_data.title is not None:
        update_fields.append('title = %s')
        update_values.append(video_data.title)
    if video_data.video_url is not None:
        update_fields.append('video_url = %s')
        update_values.append(video_data.video_url)
    if video_data.thumbnail_url is not None:
        update_fields.append('thumbnail_url = %s')
        update_values.append(video_data.thumbnail_url)
    if video_data.description is not None:
        update_fields.append('description = %s')
        update_values.append(video_data.description)
    
    if not update_fields:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'No fields to update'}),
            'isBase64Encoded': False
        }
    
    update_fields.append('updated_at = CURRENT_TIMESTAMP')
    update_values.append(video_id)
    
    conn = get_db_connection()
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    query = f"UPDATE videos SET {', '.join(update_fields)} WHERE id = %s RETURNING id, title, video_url, thumbnail_url, description, created_at, updated_at"
    cursor.execute(query, tuple(update_values))
    updated_video = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    
    if not updated_video:
        return {
            'statusCode': 404,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Video not found'}),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps(dict(updated_video), default=str),
        'isBase64Encoded': False
    }

def handle_delete(event: Dict[str, Any]) -> Dict[str, Any]:
    params = event.get('queryStringParameters') or {}
    video_id = params.get('id')
    
    if not video_id:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Video ID is required'}),
            'isBase64Encoded': False
        }
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("DELETE FROM videos WHERE id = %s", (video_id,))
    deleted_count = cursor.rowcount
    conn.commit()
    cursor.close()
    conn.close()
    
    if deleted_count == 0:
        return {
            'statusCode': 404,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Video not found'}),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'message': 'Video deleted successfully'}),
        'isBase64Encoded': False
    }
