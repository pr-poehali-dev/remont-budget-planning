import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 929 439-04-44',
      link: 'tel:+79294390444'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'vitaliy-chernov-2012@mail.ru',
      link: 'mailto:vitaliy-chernov-2012@mail.ru'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: 'Написать в WhatsApp',
      link: 'https://wa.me/79294390444'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">Контакты</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами удобным способом. Ответим на все вопросы и поможем начать проект
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => (
              <Card 
                key={idx} 
                className="p-8 hover:shadow-lg transition-all cursor-pointer"
                onClick={() => window.open(info.link, '_blank')}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={info.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-500 mb-2">{info.title}</h3>
                <p className="text-xl font-bold text-gray-900">{info.value}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">Запись на консультацию</h2>
              <p className="text-xl text-gray-600 mb-8">
                Заполните форму, и мы свяжемся с вами в течение 30 минут в рабочее время
              </p>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-full text-base font-semibold"
                  >
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-primary to-primary/80 text-white">
                <Icon name="Clock" size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4">Время работы</h3>
                <div className="space-y-2 text-lg">
                  <p>Пн-Пт: 9:00 — 20:00</p>
                  <p>Сб-Вс: 10:00 — 18:00</p>
                </div>
              </Card>

              <Card className="p-8">
                <Icon name="MapPin" size={40} className="text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">География работы</h3>
                <p className="text-lg text-gray-600">
                  Консультации онлайн по всей России. Выездные встречи — Москва и Московская область.
                </p>
              </Card>

              <Card className="p-8 border-2 border-primary">
                <h3 className="text-2xl font-bold mb-4">Быстрая связь</h3>
                <p className="text-gray-600 mb-6">
                  Для срочных вопросов пишите в WhatsApp — отвечаем в течение 5 минут
                </p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full"
                  onClick={() => window.open('https://wa.me/79294390444?text=Срочный вопрос', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
