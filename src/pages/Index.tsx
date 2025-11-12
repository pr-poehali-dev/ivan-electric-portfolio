import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [videos] = useState([
    { id: 1, title: "Монтаж электропроводки в квартире", thumbnail: "https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/4e5e7724-de1b-400f-bfc8-e84675859e4b.jpg" },
    { id: 2, title: "Установка щитка", thumbnail: "https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/4e5e7724-de1b-400f-bfc8-e84675859e4b.jpg" },
    { id: 3, title: "Подключение розеток", thumbnail: "https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/4e5e7724-de1b-400f-bfc8-e84675859e4b.jpg" },
  ]);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            ⚡ ИВАН
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary mb-6">
                <Icon name="Zap" size={20} className="inline mr-2" />
                Электрик в Пензе
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Электромонтаж <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">любой сложности</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональные услуги электрика с опытом работы. Качество, безопасность и современные решения для вашего дома.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/4e5e7724-de1b-400f-bfc8-e84675859e4b.jpg" 
                alt="Электромонтажные работы"
                className="relative rounded-3xl w-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Award" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Опыт</h3>
              <p className="text-muted-foreground">Более 8 лет успешной работы в сфере электромонтажа</p>
            </Card>
            
            <Card className="p-8 border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="ShieldCheck" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Безопасность</h3>
              <p className="text-muted-foreground">Соблюдение всех норм и стандартов электробезопасности</p>
            </Card>
            
            <Card className="p-8 border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/20">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/50 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Clock" size={32} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Оперативность</h3>
              <p className="text-muted-foreground">Выполнение работ точно в срок без задержек</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/0b010be2-bbc3-43a8-8782-602ac109316a/files/59c4e580-6578-45ae-b837-32ee4157e8e4.jpg"
                alt="Иван - электрик"
                className="rounded-3xl w-full shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary mb-6">
                Обо мне
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Иван - ваш надежный <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">электрик</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Здравствуйте! Я профессиональный электрик с многолетним опытом работы в Пензе. Специализируюсь на электромонтаже в квартирах, домах и коммерческих помещениях.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Моя цель - обеспечить вас качественными и безопасными электромонтажными работами. Каждый проект выполняю с максимальной ответственностью и вниманием к деталям.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card border border-border rounded-xl p-4">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных проектов</div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4">
                  <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться со мной
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary mb-6">
              <Icon name="Video" size={20} className="inline mr-2" />
              Портфолио
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Мои <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">работы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Посмотрите видео моих выполненных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all border-border hover:border-primary/50">
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Play" size={32} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">Смотреть видео</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent mb-6">
              Контакты
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Свяжитесь <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">со мной</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Готов ответить на ваши вопросы и обсудить проект
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-primary/20">
              <Icon name="Phone" size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <a href="tel:+79968041246" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                +7 (996) 804-12-46
              </a>
            </Card>
            
            <Card className="p-8 border-secondary/20">
              <Icon name="MapPin" size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Город</h3>
              <p className="text-lg text-muted-foreground">Пенза</p>
            </Card>
          </div>

          <Card className="p-8 border-accent/20">
            <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Введите имя" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" className="bg-background" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте" className="bg-background min-h-32" />
              </div>
              <Button size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            ⚡ ИВАН
          </div>
          <p className="text-muted-foreground mb-6">Электромонтажные работы в Пензе</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="outline" size="icon" className="rounded-full border-primary/50 hover:bg-primary/10">
              <Icon name="Phone" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-secondary/50 hover:bg-secondary/10">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-accent/50 hover:bg-accent/10">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Иван. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
