import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/services', label: 'Услуги' },
    { path: '/products', label: 'Продукты' },
    { path: '/subscription', label: 'Подписка' },
    { path: '/about', label: 'О нас' },
    { path: '/contact', label: 'Контакты' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Icon name="Home" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">Планируй, экономь, ремонтируй!</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
              onClick={() => window.open('https://wa.me/79294390444?text=Здравствуйте!', '_blank')}
            >
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Написать
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm font-semibold py-2 ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-gray-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
              onClick={() => {
                window.open('https://wa.me/79294390444?text=Здравствуйте!', '_blank');
                setMobileMenuOpen(false);
              }}
            >
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Написать
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;