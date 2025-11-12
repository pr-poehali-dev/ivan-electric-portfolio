import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

interface Video {
  id: number;
  title: string;
  video_url: string;
  thumbnail_url?: string;
  description?: string;
  created_at: string;
}

const Admin = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    video_url: "",
    thumbnail_url: "",
    description: "",
  });

  const API_URL = "https://functions.poehali.dev/3cebda78-5034-4ab2-9240-6351e06ce402";

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Ошибка загрузки");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить видео",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = editingId ? `${API_URL}?id=${editingId}` : API_URL;
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Ошибка сохранения");

      toast({
        title: "Успешно",
        description: editingId ? "Видео обновлено" : "Видео добавлено",
      });

      setFormData({ title: "", video_url: "", thumbnail_url: "", description: "" });
      setEditingId(null);
      fetchVideos();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить видео",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (video: Video) => {
    setEditingId(video.id);
    setFormData({
      title: video.title,
      video_url: video.video_url,
      thumbnail_url: video.thumbnail_url || "",
      description: video.description || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Удалить это видео?")) return;

    try {
      const response = await fetch(`${API_URL}?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Ошибка удаления");

      toast({
        title: "Успешно",
        description: "Видео удалено",
      });

      fetchVideos();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить видео",
        variant: "destructive",
      });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: "", video_url: "", thumbnail_url: "", description: "" });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Админ-панель
          </h1>
          <a href="/">
            <Button variant="outline">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              На главную
            </Button>
          </a>
        </div>

        <Card className="p-8 mb-8 border-primary/20">
          <h2 className="text-2xl font-bold mb-6">
            {editingId ? "Редактировать видео" : "Добавить новое видео"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Название видео *</label>
              <Input
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Монтаж электропроводки в квартире"
                className="bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Ссылка на видео (YouTube, VK и т.д.) *</label>
              <Input
                required
                value={formData.video_url}
                onChange={(e) => setFormData({ ...formData, video_url: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=..."
                className="bg-background"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Вставьте ссылку на видео с YouTube, VK, RuTube или другого сервиса
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Ссылка на обложку (необязательно)</label>
              <Input
                value={formData.thumbnail_url}
                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                placeholder="https://example.com/thumbnail.jpg"
                className="bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Описание (необязательно)</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Краткое описание работы..."
                className="bg-background min-h-24"
              />
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              >
                <Icon name={editingId ? "Save" : "Plus"} size={20} className="mr-2" />
                {loading ? "Сохранение..." : editingId ? "Сохранить изменения" : "Добавить видео"}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" size="lg" onClick={handleCancel}>
                  <Icon name="X" size={20} className="mr-2" />
                  Отмена
                </Button>
              )}
            </div>
          </form>
        </Card>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">Все видео ({videos.length})</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden border-border hover:border-primary/50 transition-all">
              {video.thumbnail_url && (
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail_url}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                {video.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{video.description}</p>
                )}
                <div className="text-xs text-muted-foreground mb-4">
                  Добавлено: {new Date(video.created_at).toLocaleDateString("ru-RU")}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(video)}
                    className="flex-1 border-secondary text-secondary hover:bg-secondary/10"
                  >
                    <Icon name="Pencil" size={16} className="mr-2" />
                    Редактировать
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(video.id)}
                    className="border-destructive text-destructive hover:bg-destructive/10"
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {videos.length === 0 && (
          <Card className="p-12 text-center border-dashed">
            <Icon name="Video" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Видео пока нет. Добавьте первое видео!</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Admin;
