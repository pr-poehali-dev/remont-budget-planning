import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const confetti = () => {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 }
      };

      function fire(particleRatio: number, opts: any) {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);
        
        setTimeout(() => {
          document.body.removeChild(canvas);
        }, 3000);
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    };

    confetti();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={48} className="text-green-600" />
            </div>

            <h1 className="text-4xl font-bold mb-4">Оплата успешно прошла!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Спасибо за покупку! Чек отправлен на ваш email.
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4 text-left">
                <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Что дальше?</h3>
                  <p className="text-gray-600">
                    В течение 5 минут на ваш email придёт письмо с доступом к приобретённым материалам 
                    и инструкциями по использованию.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Link to="/" className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12">
                  <Icon name="Home" className="mr-2" size={20} />
                  Вернуться на главную
                </Button>
              </Link>
              
              <a 
                href="https://wa.me/79294390444?text=Здравствуйте! Я только что оплатил заказ"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full border-2 rounded-full h-12">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Связаться с поддержкой
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
