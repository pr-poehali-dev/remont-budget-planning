import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const advantages = [
    {
      icon: 'Calculator',
      title: 'Прозрачные расчеты',
      description: 'Точные сметы без скрытых затрат. Каждая позиция обоснована и понятна.'
    },
    {
      icon: 'Clock',
      title: 'Быстрые инструменты',
      description: 'Готовые шаблоны и калькуляторы экономят время на планирование.'
    },
    {
      icon: 'Wallet',
      title: 'Гибкие оплаты',
      description: 'Подписки, разовые продукты, консультации — выбирайте удобный формат.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-white to-purple-500/5"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-2 text-sm font-semibold">
                Экономия до 40%
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Эффективное бюджетное<span className="block text-primary mt-2">планирование ремонта</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Готовые шаблоны, графики работ и консультации экспертов для контроля бюджета и сроков
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/products">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    Купить курс
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gray-200 hover:border-primary rounded-full px-8 py-6 text-base font-semibold"
                  >
                    Заказать консультацию
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">2,500+</div>
                  <div className="text-sm text-gray-500">Довольных клиентов</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold">₽40M+</div>
                  <div className="text-sm text-gray-500">Сэкономлено</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-gray-500">Успешных проектов</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:order-last order-first">
              <Card className="relative bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl border-2 border-gray-100 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Готовые решения</h3>
                      <p className="text-gray-600">Шаблоны смет, графики работ и чек-листы по этапам ремонта</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Экспертная поддержка</h3>
                      <p className="text-gray-600">Консультации специалистов на всех этапах проекта</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingDown" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Экономия до 40%</h3>
                      <p className="text-gray-600">Оптимизация бюджета без потери качества работ</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Преимущества работы с нами</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональные инструменты и поддержка для контроля бюджета и качества ремонта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all border-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={adv.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed">{adv.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Выберите подходящий формат работы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Курсы</h3>
              <p className="text-gray-600 mb-6">Обучение принципам бюджетного планирования и составлению графиков работ</p>
              <Link to="/services">
                <Button variant="outline" className="w-full border-2 rounded-full">
                  Подробнее
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-primary border-2 relative">
              <Badge className="absolute -top-3 right-8 bg-primary text-white">Популярное</Badge>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Package" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Цифровые продукты</h3>
              <p className="text-gray-600 mb-6">Готовые шаблоны, калькуляторы и чек-листы для самостоятельного планирования</p>
              <Link to="/products">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Подробнее
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Users" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Консультации</h3>
              <p className="text-gray-600 mb-6">Индивидуальная работа с экспертом по вашему проекту ремонта</p>
              <Link to="/services">
                <Button variant="outline" className="w-full border-2 rounded-full">
                  Подробнее
                </Button>
              </Link>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/subscription">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8">
                Или оформите подписку со всеми возможностями
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Готовы начать?</h2>
              <p className="text-xl mb-8 opacity-90">
                Получите бесплатную консультацию и узнайте, как сэкономить на вашем ремонте
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 font-semibold"
                  >
                    Записаться на консультацию
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 font-semibold"
                  onClick={() => window.open('https://wa.me/79294390444?text=Здравствуйте!', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
