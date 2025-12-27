import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PaymentDialog from '@/components/PaymentDialog';

const Subscription = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const handleSubscribeClick = (plan: any) => {
    setSelectedPlan(plan);
    setPaymentOpen(true);
  };

  const plans = [
    {
      name: 'Базовый',
      price: 1990,
      period: 'месяц',
      description: 'Для небольших проектов',
      features: [
        'Доступ к базовым шаблонам',
        'Калькулятор материалов',
        '1 консультация в месяц (30 мин)',
        'Email поддержка',
        'Обновления шаблонов'
      ],
      popular: false
    },
    {
      name: 'Профессиональный',
      price: 3990,
      period: 'месяц',
      description: 'Оптимальный выбор',
      features: [
        'Все базовые возможности',
        'Расширенные шаблоны и графики',
        '3 консультации в месяц (по 1 часу)',
        'Приоритетная поддержка',
        'Индивидуальные рекомендации',
        'Доступ к закрытому чату'
      ],
      popular: true
    },
    {
      name: 'Эксперт',
      price: 7990,
      period: 'месяц',
      description: 'Максимум возможностей',
      features: [
        'Все профессиональные возможности',
        'Безлимитные консультации',
        'Персональный менеджер проекта',
        'Сопровождение сделок',
        'Проверка документов подрядчиков',
        'Выездные консультации (1 раз/мес)',
        'Скидка 20% на все продукты'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">Подписка</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Постоянная поддержка на всех этапах ремонта. Выберите свой план
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`p-8 hover:shadow-xl transition-all ${
                  plan.popular 
                    ? 'border-primary border-2 relative transform md:-translate-y-4' 
                    : 'border-2'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white">
                    Популярный
                  </Badge>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-primary">{plan.price}</span>
                    <span className="text-gray-500">₽/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  onClick={() => handleSubscribeClick(plan)}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <Icon name="Shield" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Без рисков</h3>
              <p className="text-gray-600">Отмените подписку в любой момент без объяснений</p>
            </Card>
            <Card className="p-8 text-center">
              <Icon name="Clock" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Быстрый старт</h3>
              <p className="text-gray-600">Доступ ко всем материалам сразу после оплаты</p>
            </Card>
            <Card className="p-8 text-center">
              <Icon name="TrendingUp" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Постоянное развитие</h3>
              <p className="text-gray-600">Регулярные обновления шаблонов и новые материалы</p>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Не уверены в выборе?</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите 7 дней бесплатного доступа к плану "Профессиональный"
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 font-semibold"
              onClick={() => handleSubscribeClick({
                name: 'Профессиональный (пробный)',
                price: 0,
                period: '7 дней',
                description: 'Бесплатный тестовый период'
              })}
            >
              Попробовать бесплатно
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {selectedPlan && selectedPlan.price > 0 && (
        <PaymentDialog
          open={paymentOpen}
          onOpenChange={setPaymentOpen}
          amount={selectedPlan.price}
          description={`Подписка на 1 ${selectedPlan.period}`}
          itemName={`План "${selectedPlan.name}"`}
        />
      )}
    </div>
  );
};

export default Subscription;