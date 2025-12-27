import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Планируй, экономь, ремонтируй!</span>
            </div>
            <p className="text-gray-600 text-sm">
              Профессиональная система планирования ремонта
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-600 hover:text-primary">Главная</Link>
              <Link to="/services" className="block text-sm text-gray-600 hover:text-primary">Услуги</Link>
              <Link to="/products" className="block text-sm text-gray-600 hover:text-primary">Продукты</Link>
              <Link to="/subscription" className="block text-sm text-gray-600 hover:text-primary">Подписка</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-gray-600 hover:text-primary">О нас</Link>
              <Link to="/contact" className="block text-sm text-gray-600 hover:text-primary">Контакты</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+79294390444" 
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
              >
                <Icon name="Phone" size={16} />
                +7 929 439-04-44
              </a>
              <a 
                href="mailto:vitaliy-chernov-2012@mail.ru" 
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
              >
                <Icon name="Mail" size={16} />
                Email
              </a>
              <a 
                href="https://wa.me/79294390444" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary"
              >
                <Icon name="MessageCircle" size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} RenovateSmart. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;