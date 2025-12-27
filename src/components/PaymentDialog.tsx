import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  description: string;
  itemName: string;
}

const PaymentDialog = ({ open, onOpenChange, amount, description, itemName }: PaymentDialogProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!email) {
      toast({
        title: 'Ошибка',
        description: 'Введите email для получения чека',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a76743dc-3da4-40b0-9e96-1b3926655b50', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          description: `${itemName} - ${description}`,
          email,
          return_url: window.location.origin + '/payment-success'
        })
      });

      const data = await response.json();

      if (response.ok && data.confirmation_url) {
        window.location.href = data.confirmation_url;
      } else {
        toast({
          title: 'Ошибка оплаты',
          description: data.error || 'Не удалось создать платёж',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Проблема с подключением к платёжной системе',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Оплата</DialogTitle>
          <DialogDescription>
            {itemName}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Сумма к оплате:</span>
              <span className="text-3xl font-bold text-primary">{amount.toLocaleString()} ₽</span>
            </div>
            <p className="text-sm text-gray-500">{description}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email для чека</label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              disabled={loading}
            />
            <p className="text-xs text-gray-500 mt-2">
              На этот email придёт чек после оплаты
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handlePayment}
              disabled={loading || !email}
              className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-full text-base font-semibold"
            >
              {loading ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                  Обработка...
                </>
              ) : (
                <>
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Перейти к оплате
                </>
              )}
            </Button>

            <div className="flex items-center justify-center gap-4 text-gray-400">
              <Icon name="Shield" size={16} />
              <span className="text-xs">Безопасная оплата через YooKassa</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
