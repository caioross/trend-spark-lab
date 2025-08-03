import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const whatsappLink = "https://wa.me/5511996694131?text=Oi%2C+quero+comprar+o+PDF+de+Como+Criar+Vídeos+Virais!";

export const StickyWhatsAppButton = () => {
  const handleClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      <Button 
        onClick={handleClick}
        variant="cta" 
        size="lg"
        className="shadow-2xl animate-pulse-neon"
      >
        <MessageCircle className="w-5 h-5" />
        Quero o PDF agora!
      </Button>
    </div>
  );
};