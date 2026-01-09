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
      icon: 'Wrench',
      title: 'Профессиональный сервис',
      description: 'Опытные мастера с сертификатами и современным оборудованием для любых видов ремонта.'
    },
    {
      icon: 'Clock',
      title: 'Быстрое обслуживание',
      description: 'Диагностика за 30 минут. Большинство работ выполняем в день обращения.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на все работы и запчасти. Прозрачные цены без накруток.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.poehali.dev/projects/1902a48d-c59a-4087-8975-d6fa1a3704c3/files/f0ffe08a-dcad-4926-8942-c5ee76739f4b.jpg" 
            alt="Профессиональный автосервис" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-secondary/40"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-2 text-sm font-semibold">Работаем с 2015 года</Badge>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#1a1a1a]">
                Профессиональный<span className="block mt-2 text-primary">ремонт автомобилей</span>
              </h1>
              
              <p className="leading-relaxed max-w-lg text-gray-700 text-xl">
                Диагностика, ремонт и техническое обслуживание автомобилей любых марок. Гарантия качества и прозрачные цены.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    Записаться на ремонт
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gray-200 hover:border-primary rounded-full px-8 py-6 text-base font-semibold"
                  >
                    Наши услуги
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5,200+</div>
                  <div className="text-sm text-gray-600">Отремонтированных авто</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">9</div>
                  <div className="text-sm text-gray-600">Лет на рынке</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-gray-600">Средний рейтинг</div>
                </div>
              </div>
            </div>
            
            <div className="relative lg:order-last order-first">
              <Card className="relative bg-gradient-to-br from-secondary to-secondary/90 p-10 rounded-3xl border-2 border-primary shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Wrench" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-2xl text-white">Все виды работ</h3>
                      <p className="text-gray-300">Диагностика, ремонт двигателя, ходовой, электрики и кузовные работы</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Settings" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-2xl text-white">Современное оборудование</h3>
                      <p className="text-gray-300">Компьютерная диагностика и профессиональный инструмент</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-2xl text-white">Гарантия 1 год</h3>
                      <p className="text-gray-300">На все виды работ и установленные запчасти</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Почему выбирают нас</h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-xl">
              Качественный сервис, опытные мастера и индивидуальный подход к каждому клиенту
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all border-2 bg-white hover:border-primary">
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

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-700">Полный спектр услуг по ремонту и обслуживанию автомобилей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-all bg-white hover:border-primary border-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Wrench" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ремонт двигателя</h3>
              <p className="mb-6 text-gray-600">Диагностика и ремонт двигателей любой сложности. Замена масла, фильтров, ремонт системы охлаждения</p>
              <Link to="/services">
                <Button variant="outline" className="w-full border-2 rounded-full hover:border-primary">
                  Подробнее
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all border-primary border-2 relative bg-white">
              <Badge className="absolute -top-3 right-8 bg-primary text-white">Популярное</Badge>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Car" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Ремонт ходовой</h3>
              <p className="mb-6 text-gray-600">Замена амортизаторов, пружин, сайлентблоков. Регулировка развал-схождения</p>
              <Link to="/services">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Записаться
                </Button>
              </Link>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all bg-white hover:border-primary border-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Электрика</h3>
              <p className="mb-6 text-gray-600">Компьютерная диагностика, ремонт электропроводки, установка сигнализаций</p>
              <Link to="/services">
                <Button variant="outline" className="w-full border-2 rounded-full hover:border-primary">
                  Узнать больше
                </Button>
              </Link>
            </Card>
          </div>

          <Card className="p-12 bg-gradient-to-br from-secondary to-secondary/90 border-primary/20">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-white">Запишитесь на диагностику</h3>
              <p className="text-lg mb-8 text-gray-300">
                Бесплатная диагностика при ремонте в нашем автосервисе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                    Записаться сейчас
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8">
                    Все услуги
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Нужен ремонт авто?</h2>
              <p className="text-xl mb-8 opacity-90">
                Запишитесь на бесплатную диагностику и получите скидку 10% на первый ремонт
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 font-semibold"
                  >
                    Записаться на ремонт
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 font-semibold"
                  >
                    Посмотреть услуги
                  </Button>
                </Link>
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