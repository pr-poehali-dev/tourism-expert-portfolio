import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Индивидуальные туры',
      description: 'Разработка персональных маршрутов с учетом ваших предпочтений и бюджета',
      icon: 'MapPin'
    },
    {
      title: 'Бронирование отелей',
      description: 'Прямой доступ к эксклюзивным предложениям отелей сети Alean',
      icon: 'Hotel'
    },
    {
      title: 'Консультации',
      description: 'Экспертные рекомендации по выбору направлений и планированию поездок',
      icon: 'MessageCircle'
    },
    {
      title: 'Организация трансферов',
      description: 'Комфортная транспортировка из аэропорта до места отдыха',
      icon: 'Car'
    }
  ];

  const partners = [
    {
      name: 'Tipster',
      description: 'Платформа для бронирования туров и отелей',
      logo: 'Globe'
    },
    {
      name: 'Alean',
      description: 'Сеть отелей с прямым контрактом',
      logo: 'Building2'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Отличный профессионал! Помог организовать незабываемый отпуск в Турции. Все было продумано до мелочей.',
      rating: 5
    },
    {
      name: 'Михаил Сергеев',
      text: 'Благодаря экспертным рекомендациям нашли идеальный отель по выгодной цене. Обязательно обратимся снова!',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Профессиональный подход и внимание к деталям. Поездка прошла без единого сбоя.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Туристический эксперт</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'partners', 'reviews'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'services' && 'Услуги'}
                  {section === 'partners' && 'Партнеры'}
                  {section === 'reviews' && 'Отзывы'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6">Ваш эксперт в мире путешествий</h2>
              <p className="text-xl mb-8 text-white/90">
                5 лет опыта в туристической индустрии. Помогаю создавать незабываемые путешествия
                с индивидуальным подходом к каждому клиенту.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => scrollToSection('services')}
              >
                Узнать больше
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative">
              <img
                src="/img/425b84ba-f42d-485c-8790-2aec1554f76b.jpg"
                alt="Туристический эксперт"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Обо мне</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Award" size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">5 лет в индустрии</h3>
                      <p className="text-gray-600">
                        Профессиональный опыт работы с ведущими туристическими платформами и отелями
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Users" size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">500+ довольных клиентов</h3>
                      <p className="text-gray-600">
                        Организовал незабываемые путешествия для сотен туристов
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Globe2" size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Международный опыт</h3>
                      <p className="text-gray-600">
                        Глубокое знание популярных туристических направлений по всему миру
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name="Handshake" size={32} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Прямые контракты</h3>
                      <p className="text-gray-600">
                        Партнерство с ведущими отелями и платформами для лучших условий
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Услуги</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Комплексный подход к организации вашего отдыха
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Партнеры</h2>
          <p className="text-gray-600 text-center mb-12">
            Работаю с лучшими компаниями туристической индустрии
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={partner.logo as any} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <img
              src="/img/7e728b5a-5921-4c0c-9430-22cc5a9850a6.jpg"
              alt="Партнерство"
              className="rounded-lg shadow-xl w-full max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">Отзывы клиентов</h2>
          <p className="text-gray-600 text-center mb-12">
            Что говорят те, кто уже путешествовал со мной
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Клиент</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы к незабываемому путешествию?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной для консультации и начнем планировать ваш идеальный отдых
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Связаться со мной
            <Icon name="Send" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2025 Туристический эксперт. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
