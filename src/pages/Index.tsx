import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [budget, setBudget] = useState(500000);
  const [rooms, setRooms] = useState(2);
  const [materials, setMaterials] = useState(50);

  const calculateSavings = () => {
    const baseCost = budget;
    const savingsPercent = 40 - (materials / 2);
    const savedAmount = (baseCost * savingsPercent) / 100;
    return {
      total: baseCost,
      saved: savedAmount,
      final: baseCost - savedAmount,
      percent: savingsPercent
    };
  };

  const calc = calculateSavings();

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">RenovateSmart</span>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              onClick={() => window.open('https://wa.me/79294390444?text=Здравствуйте! Хочу узнать подробнее о курсе', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Написать
            </Button>
          </div>
        </nav>

        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-2 text-sm font-semibold">
                  Экономия до 40%
                </Badge>
                
                <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  Ремонт без
                  <span className="block text-primary">переплат</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Профессиональная система планирования ремонта. Готовые шаблоны, графики и консультации экспертов.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                    onClick={() => window.location.href = 'mailto:vitaliy-chernov-2012@mail.ru?subject=Запрос чек-листа'}
                  >
                    Получить чек-лист бесплатно
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gray-200 hover:border-gray-300 rounded-full px-8 py-6 text-base font-semibold"
                    onClick={() => window.open('https://wa.me/79294390444?text=Хочу узнать о курсе', '_blank')}
                  >
                    Купить курс
                  </Button>
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
                </div>
              </div>
              
              <div className="relative lg:order-last order-first">
                <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
                
                <Card className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 shadow-2xl shadow-gray-200/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Ваша экономия</h3>
                    <Badge className="bg-green-500/10 text-green-700 border-0 px-3 py-1">
                      -40%
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-5 bg-white rounded-2xl border border-gray-100">
                      <span className="text-gray-600 font-medium">Изначальный бюджет</span>
                      <span className="text-2xl font-bold">{budget.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="TrendingDown" className="text-primary" size={24} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-5 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl border border-primary/20">
                      <span className="font-medium">С нашей системой</span>
                      <span className="text-2xl font-bold text-primary">{Math.round(budget * 0.6).toLocaleString()} ₽</span>
                    </div>
                    <div className="text-center pt-4 p-5 bg-green-50 rounded-2xl">
                      <div className="text-sm text-green-700 font-medium mb-1">Вы сэкономите</div>
                      <p className="text-4xl font-black text-green-600">
                        {Math.round(budget * 0.4).toLocaleString()} ₽
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-2 text-sm font-semibold mb-6">
                Калькулятор
              </Badge>
              <h2 className="text-5xl font-black mb-4">
                Рассчитайте экономию
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Введите параметры вашего ремонта и узнайте точную сумму экономии
              </p>
            </div>

            <Card className="bg-white p-8 md:p-12 rounded-3xl border-2 border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-lg font-semibold flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="DollarSign" className="text-primary" size={18} />
                        </div>
                        Бюджет ремонта
                      </label>
                      <span className="text-2xl font-bold">{budget.toLocaleString()} ₽</span>
                    </div>
                    <Slider
                      value={[budget]}
                      onValueChange={(value) => setBudget(value[0])}
                      min={100000}
                      max={3000000}
                      step={50000}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>100 000 ₽</span>
                      <span>3 000 000 ₽</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-lg font-semibold flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Home" className="text-primary" size={18} />
                        </div>
                        Количество комнат
                      </label>
                      <span className="text-2xl font-bold">{rooms}</span>
                    </div>
                    <Slider
                      value={[rooms]}
                      onValueChange={(value) => setRooms(value[0])}
                      min={1}
                      max={5}
                      step={1}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-lg font-semibold flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Sparkles" className="text-primary" size={18} />
                        </div>
                        Качество материалов
                      </label>
                      <span className="text-2xl font-bold">{materials}%</span>
                    </div>
                    <Slider
                      value={[materials]}
                      onValueChange={(value) => setMaterials(value[0])}
                      min={0}
                      max={100}
                      step={10}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Эконом</span>
                      <span>Премиум</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/5 to-purple-500/5 p-8 rounded-2xl space-y-4 border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6">Ваш результат</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-gray-600">
                        <span>Исходный бюджет</span>
                        <span className="font-bold text-gray-900">{calc.total.toLocaleString()} ₽</span>
                      </div>
                      <div className="flex justify-between items-center text-green-600">
                        <span>Экономия ({Math.round(calc.percent)}%)</span>
                        <span className="font-bold">-{Math.round(calc.saved).toLocaleString()} ₽</span>
                      </div>
                      <div className="h-px bg-gray-200 my-4"></div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Итого к оплате</span>
                        <span className="text-3xl font-black text-primary">{Math.round(calc.final).toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 text-lg font-semibold shadow-lg shadow-primary/20"
                    onClick={() => window.open('https://wa.me/79294390444?text=Рассчитал экономию! Хочу начать ремонт', '_blank')}
                  >
                    Начать экономить
                    <Icon name="Rocket" className="ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-2 text-sm font-semibold mb-6">
                Преимущества
              </Badge>
              <h2 className="text-5xl font-black mb-4">
                Почему выбирают нас
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "FileText", title: "Готовые шаблоны", desc: "Проверенные чек-листы и планы для любого типа ремонта" },
                { icon: "LineChart", title: "Умные графики", desc: "Оптимальные планы работ для минимизации затрат" },
                { icon: "Users", title: "Консультации", desc: "Поддержка экспертов на каждом этапе ремонта" },
                { icon: "Shield", title: "Гарантия", desc: "Возврат средств, если не сэкономите минимум 20%" },
                { icon: "Clock", title: "Экономия времени", desc: "Сократите сроки ремонта на 30% благодаря планированию" },
                { icon: "Award", title: "Качество", desc: "Не экономим на качестве — только на переплатах" }
              ].map((item, i) => (
                <Card key={i} className="p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all group bg-white">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-primary via-purple-600 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2ek0xOCAzNGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-5xl font-black mb-6">
              Получите бесплатный чек-лист
            </h2>
            <p className="text-xl mb-8 opacity-90">
              10 способов сэкономить на ремонте, не теряя качества
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Input
                type="email"
                id="email-input-cta"
                placeholder="Ваш email"
                className="max-w-md text-lg py-6 px-6 rounded-2xl border-0 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:bg-white/20"
              />
              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-100 text-primary text-lg px-8 py-6 rounded-2xl font-semibold whitespace-nowrap shadow-xl"
                onClick={() => {
                  const emailInput = document.getElementById('email-input-cta') as HTMLInputElement;
                  const email = emailInput?.value || '';
                  window.location.href = `mailto:vitaliy-chernov-2012@mail.ru?subject=Запрос чек-листа&body=Мой email: ${email}`;
                }}
              >
                Получить бесплатно
                <Icon name="ArrowRight" className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">RenovateSmart</span>
              </div>
              
              <div className="flex gap-6 text-sm text-gray-600">
                <a href="tel:+79294390444" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 929 439-04-44
                </a>
                <a href="mailto:vitaliy-chernov-2012@mail.ru" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  vitaliy-chernov-2012@mail.ru
                </a>
              </div>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-8">
              © 2024 RenovateSmart. Все права защищены.
            </div>
          </div>
        </footer>
      </div>

      <a
        href="https://wa.me/79294390444?text=Здравствуйте! Интересует ваш курс"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
        aria-label="Написать в WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
