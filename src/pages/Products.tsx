import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PaymentDialog from '@/components/PaymentDialog';

const Products = () => {
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleBuyClick = (product: any) => {
    setSelectedProduct(product);
    setPaymentOpen(true);
  };

  const products = [
    {
      icon: 'FileSpreadsheet',
      title: 'Шаблоны смет и бюджеты',
      description: 'Готовые структуры с формулами для расчёта материалов, работ и непредвиденных расходов',
      features: ['Excel/Google Sheets', 'Автоматические расчёты', 'Примеры заполнения'],
      price: 990,
      popular: false
    },
    {
      icon: 'Calendar',
      title: 'Графики работ (Gantt)',
      description: 'Профессиональные графики выполнения работ и планы закупки материалов',
      features: ['Визуальное планирование', 'Зависимости задач', 'Списки материалов'],
      price: 1490,
      popular: true
    },
    {
      icon: 'CheckSquare',
      title: 'Чек-листы по этапам',
      description: 'Подробные списки проверок для каждого этапа ремонта',
      features: ['Все этапы ремонта', 'Критерии приёмки', 'Рекомендации экспертов'],
      price: 490,
      popular: false
    },
    {
      icon: 'Calculator',
      title: 'Калькуляторы материалов',
      description: 'Точные расчёты необходимого количества материалов для вашего проекта',
      features: ['Расчёт плитки, обоев, краски', 'Учёт запаса', 'Калькуляция стоимости'],
      price: 790,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black mb-6">Цифровые продукты</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовые инструменты для самостоятельного планирования ремонта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.map((product, idx) => (
              <Card key={idx} className={`p-8 hover:shadow-xl transition-all ${product.popular ? 'border-primary border-2 relative' : 'border-2'}`}>
                {product.popular && (
                  <Badge className="absolute -top-3 left-8 bg-primary text-white">
                    Популярное
                  </Badge>
                )}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={product.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-3xl font-bold text-primary">{product.price} ₽</div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full"
                    onClick={() => handleBuyClick(product)}
                  >
                    Купить
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gray-50 rounded-3xl p-12 text-center">
            <Icon name="Package" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Комплексный пакет</h2>
            <p className="text-xl text-gray-600 mb-6">
              Все 4 продукта со скидкой 30%
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl text-gray-400 line-through">3760 ₽</span>
              <span className="text-4xl font-bold text-primary">2590 ₽</span>
              <Badge className="bg-green-100 text-green-700 border-0">Экономия 1170 ₽</Badge>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              onClick={() => handleBuyClick({
                title: 'Комплексный пакет',
                description: 'Все 4 продукта со скидкой 30%',
                price: 2590
              })}
            >
              Купить комплект
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {selectedProduct && (
        <PaymentDialog
          open={paymentOpen}
          onOpenChange={setPaymentOpen}
          amount={selectedProduct.price}
          description={selectedProduct.description}
          itemName={selectedProduct.title}
        />
      )}
    </div>
  );
};

export default Products;