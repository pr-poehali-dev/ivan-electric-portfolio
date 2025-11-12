import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const videoWorks = [
    { id: 1, title: 'Монтаж электрощита', thumbnail: 'https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/67be6c92-db35-40ad-8262-f7f46f544ed5.jpg' },
    { id: 2, title: 'Проводка в квартире', thumbnail: 'https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/c3c6059a-b1dd-4972-bb63-f838cf9532b7.jpg' },
    { id: 3, title: 'Установка освещения', thumbnail: 'https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/e7a075b0-ca8c-4312-8910-2f85efb344de.jpg' },
    { id: 4, title: 'Ремонт проводки', thumbnail: 'https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/67be6c92-db35-40ad-8262-f7f46f544ed5.jpg' },
    { id: 5, title: 'Подключение бытовой техники', thumbnail: 'https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/c3c6059a-b1dd-4972-bb63-f838cf9532b7.jpg' },
    { id: 6, title: 'Уличное освещение', thumbnail: 'https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/e7a075b0-ca8c-4312-8910-2f85efb344de.jpg' }
  ];

  const services = [
    { icon: 'Zap', title: 'Монтаж проводки', description: 'Качественный монтаж электропроводки в квартирах и домах' },
    { icon: 'Lightbulb', title: 'Установка освещения', description: 'Подключение люстр, светильников, LED-лент' },
    { icon: 'Gauge', title: 'Электрощиты', description: 'Сборка и установка электрощитов любой сложности' },
    { icon: 'Plug', title: 'Розетки и выключатели', description: 'Установка и замена розеток, выключателей' }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-xl font-bold">Электрик Иван</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#videos" className="hover:text-primary transition-colors">Видео работ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="hidden md:flex bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Icon name="Zap" size={20} className="text-primary" />
              <span className="text-sm font-medium">Профессиональные электромонтажные работы</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
              Электрик в Пензе
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Более 10 лет опыта • Качественно • Быстро • Гарантия на все работы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (996) 804-12-46
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
              Обо мне
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 animate-slide-in">
                <p className="text-lg leading-relaxed">
                  Привет! Меня зовут Иван, я профессиональный электрик с более чем 10-летним стажем работы в Пензе.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Специализируюсь на монтаже электропроводки в квартирах и частных домах, установке электрощитов, подключении освещения и бытовой техники.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Работаю быстро и качественно, соблюдаю все нормы безопасности. Предоставляю гарантию на все виды работ.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Award" className="text-primary" size={24} />
                    <span className="font-semibold">10+ лет опыта</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="text-secondary" size={24} />
                    <span className="font-semibold">500+ проектов</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30">
                  <Icon name="User" size={120} className="text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Мои услуги
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:bg-card/80 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20 border-border group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Видео моих работ
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videoWorks.map((video) => (
              <Card key={video.id} className="bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all hover:scale-105 group cursor-pointer border-border">
                <div className="relative aspect-video bg-muted">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Icon name="Play" size={32} className="ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <a href="tel:+79968041246" className="text-lg font-semibold hover:text-primary transition-colors">
                      +7 (996) 804-12-46
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Город</p>
                    <p className="text-lg font-semibold">Пенза</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Режим работы</p>
                    <p className="text-lg font-semibold">Ежедневно 8:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Описание работы
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, какие работы нужно выполнить..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card/80 border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" className="text-primary" size={24} />
            <span className="text-lg font-bold">Электрик Иван</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Профессиональные электромонтажные работы в Пензе
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}