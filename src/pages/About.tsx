import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { value: '2500+', label: 'Довольных клиентов' },
    { value: '15 лет', label: 'Опыта в строительстве' },
    { value: '₽40M+', label: 'Сэкономлено клиентами' },
    { value: '98%', label: 'Успешных проектов' }
  ];

  const values = [
    {
      icon: 'Target',
      title: 'Прозрачность',
      description: 'Все расчёты и рекомендации основаны на реальных данных рынка. Никаких скрытых комиссий.'
    },
    {
      icon: 'Heart',
      title: 'Индивидуальный подход',
      description: 'Каждый проект уникален. Мы адаптируем инструменты под ваши задачи и бюджет.'
    },
    {
      icon: 'Award',
      title: 'Экспертиза',
      description: '15 лет опыта управления строительными проектами от квартир до коммерческих объектов.'
    },
    {
      icon: 'Users',
      title: 'Поддержка 24/7',
      description: 'Команда специалистов всегда на связи для решения ваших вопросов.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <Badge className="bg-primary/10 text-primary mb-6">О нас</Badge>
              <h1 className="text-5xl lg:text-6xl font-black mb-6">
                Делаем ремонт прозрачным и предсказуемым
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Мы знаем, как сложно контролировать бюджет ремонта. Переплаты, задержки, споры с подрядчиками — 
                типичные проблемы, с которыми сталкиваются владельцы недвижимости.
              </p>
              <p className="text-xl text-gray-600">
                Поэтому мы создали систему инструментов и консультаций, которая помогает планировать, 
                контролировать и экономить на каждом этапе ремонта.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} className="p-6 text-center">
                  <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Наши ценности</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={value.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Наш подход</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Анализ</h3>
                <p className="text-gray-600">
                  Изучаем ваш проект, объём работ и бюджетные ожидания. Определяем риски и возможности экономии.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Планирование</h3>
                <p className="text-gray-600">
                  Создаём детальный бюджет, график работ и план закупок. Все инструменты адаптированы под ваши задачи.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Сопровождение</h3>
                <p className="text-gray-600">
                  Помогаем на всех этапах: от выбора подрядчиков до контроля качества работ и финальной приёмки.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
