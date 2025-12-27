import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: 'GraduationCap',
      title: 'Курсы',
      items: [
        'Базовые принципы бюджетного планирования',
        'Составление графиков работ',
        'Управление рисками в ремонте',
        'Выбор подрядчиков и материалов'
      ],
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Users',
      title: 'Консультации',
      items: [
        'Анализ и оптимизация бюджета',
        'Составление расписания работ',
        'Оценка рисков проекта',
        'Подбор подрядчиков'
      ],
      price: 'от 3 000 ₽/час'
    },
    {
      icon: 'FileText',
      title: 'Цифровые продукты',
      items: [
        'Готовые шаблоны смет',
        'Графики работ (Gantt)',
        'Чек-листы по этапам',
        'Калькуляторы материалов'
      ],
      price: 'от 500 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">Наши услуги</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные решения для планирования ремонта: от обучающих курсов до готовых инструментов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-shadow border-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Узнать подробнее
                </Button>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Не знаете, что выбрать?</h2>
            <p className="text-xl mb-8 opacity-90">
              Запишитесь на бесплатную консультацию, и мы подберём оптимальное решение
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 font-semibold"
              onClick={() => window.open('https://wa.me/79294390444?text=Хочу бесплатную консультацию', '_blank')}
            >
              Получить консультацию
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
