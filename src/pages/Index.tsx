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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white hover:bg-accent/90 text-lg px-4 py-2">
                💰 Экономьте до 40%
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-primary">Эффективное</span>
                <br />
                <span className="text-secondary">бюджетное</span>
                <br />
                планирование ремонта
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Готовые шаблоны, графики и консультации — экономьте до 40% без потери качества
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                  <Icon name="Gift" className="mr-2" />
                  Получить бесплатный чек-лист
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg px-8 py-6 rounded-full transition-all hover:scale-105">
                  <Icon name="ShoppingCart" className="mr-2" />
                  Купить курс
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border-2 border-primary/20 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">📊 До/После</h3>
                  <Badge className="bg-accent text-white">-40%</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                    <span className="text-lg">Было:</span>
                    <span className="text-2xl font-bold text-red-600">{budget.toLocaleString()} ₽</span>
                  </div>
                  <Icon name="ArrowDown" className="mx-auto text-accent animate-bounce" size={32} />
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                    <span className="text-lg">Стало:</span>
                    <span className="text-2xl font-bold text-green-600">{Math.round(budget * 0.6).toLocaleString()} ₽</span>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-3xl font-bold text-accent">
                      Экономия: {Math.round(budget * 0.4).toLocaleString()} ₽
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-primary">🧮</span> Интерактивный калькулятор
              </h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте реальную экономию на вашем ремонте
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-secondary/20 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-lg font-semibold flex items-center gap-2">
                        <Icon name="DollarSign" className="text-primary" />
                        Бюджет ремонта
                      </label>
                      <span className="text-2xl font-bold text-primary">{budget.toLocaleString()} ₽</span>
                    </div>
                    <Slider
                      value={[budget]}
                      onValueChange={(value) => setBudget(value[0])}
                      min={100000}
                      max={3000000}
                      step={50000}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-lg font-semibold flex items-center gap-2">
                        <Icon name="Home" className="text-secondary" />
                        Количество комнат
                      </label>
                      <span className="text-2xl font-bold text-secondary">{rooms}</span>
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
                        <Icon name="Sparkles" className="text-accent" />
                        Качество материалов
                      </label>
                      <span className="text-2xl font-bold text-accent">{materials}%</span>
                    </div>
                    <Slider
                      value={[materials]}
                      onValueChange={(value) => setMaterials(value[0])}
                      min={0}
                      max={100}
                      step={10}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Эконом</span>
                      <span>Премиум</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl space-y-4">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      <Icon name="TrendingDown" className="text-accent" />
                      Ваша экономия
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-lg">
                        <span>Базовая стоимость:</span>
                        <span className="font-semibold">{calc.total.toLocaleString()} ₽</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-lg">
                        <span>Процент экономии:</span>
                        <Badge className="bg-accent text-white text-lg px-3 py-1">
                          {calc.percent.toFixed(1)}%
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center text-lg">
                        <span>Сэкономите:</span>
                        <span className="font-bold text-green-600 text-xl">
                          {Math.round(calc.saved).toLocaleString()} ₽
                        </span>
                      </div>
                      
                      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-4"></div>
                      
                      <div className="flex justify-between items-center text-2xl">
                        <span className="font-bold">Итого:</span>
                        <span className="font-bold text-primary">
                          {Math.round(calc.final).toLocaleString()} ₽
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform duration-200 bg-primary/5">
                      <Icon name="Hammer" className="mx-auto mb-2 text-primary" size={32} />
                      <p className="text-sm font-semibold">Работы</p>
                      <p className="text-xs text-muted-foreground">{rooms * 2} недель</p>
                    </Card>
                    <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform duration-200 bg-secondary/5">
                      <Icon name="Package" className="mx-auto mb-2 text-secondary" size={32} />
                      <p className="text-sm font-semibold">Материалы</p>
                      <p className="text-xs text-muted-foreground">{materials > 50 ? 'Премиум' : 'Стандарт'}</p>
                    </Card>
                    <Card className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer hover:scale-105 transform duration-200 bg-accent/5">
                      <Icon name="Award" className="mx-auto mb-2 text-accent" size={32} />
                      <p className="text-sm font-semibold">Гарантия</p>
                      <p className="text-xs text-muted-foreground">2 года</p>
                    </Card>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    <Icon name="Rocket" className="mr-2" />
                    Начать экономить сейчас
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-secondary">🎯</span> Что вы получите
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'FileText',
                  title: 'Готовые шаблоны',
                  description: 'Проверенные сметы и чек-листы для разных типов ремонта',
                  color: 'primary',
                  emoji: '📋'
                },
                {
                  icon: 'BarChart3',
                  title: 'Графики работ',
                  description: 'Детальное планирование каждого этапа с оптимизацией времени',
                  color: 'secondary',
                  emoji: '📊'
                },
                {
                  icon: 'Users',
                  title: 'Консультации',
                  description: 'Поддержка экспертов на каждом этапе вашего ремонта',
                  color: 'accent',
                  emoji: '👥'
                },
                {
                  icon: 'Calculator',
                  title: 'Умная смета',
                  description: 'Автоматический расчёт материалов и предотвращение переплат',
                  color: 'primary',
                  emoji: '🧮'
                },
                {
                  icon: 'ShieldCheck',
                  title: 'Проверенные подрядчики',
                  description: 'База надёжных специалистов с реальными отзывами',
                  color: 'secondary',
                  emoji: '✅'
                },
                {
                  icon: 'Lightbulb',
                  title: 'Лайфхаки экономии',
                  description: 'Секреты профессионалов для снижения затрат без потери качества',
                  color: 'accent',
                  emoji: '💡'
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className={`p-8 rounded-3xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in bg-gradient-to-br from-white to-${feature.color}/5`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-6xl mb-4 animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.emoji}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10 px-8">
            <div className="animate-wiggle inline-block text-6xl mb-6">🚀</div>
            <h2 className="text-5xl font-bold mb-6">
              Начните экономить <span className="text-primary">прямо сейчас!</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к 5000+ довольных клиентов, которые сэкономили в среднем 380 000 ₽
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Input
                type="email"
                placeholder="Ваш email"
                className="max-w-md text-lg py-6 px-6 rounded-full border-2 border-primary/20 focus:border-primary"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 whitespace-nowrap">
                <Icon name="Gift" className="mr-2" />
                Получить чек-лист бесплатно
              </Button>
            </div>
            
            <div className="flex justify-center gap-8 flex-wrap text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-accent" size={20} />
                <span>Без спама</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-accent" size={20} />
                <span>Бесплатно навсегда</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-accent" size={20} />
                <span>Отписка в 1 клик</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-muted-foreground">
          <p className="text-sm">© 2024 Ремонт без переплат. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
