import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  content: string;
  rating: number;
  niche?: string;
}

export const TestimonialCard = ({ name, content, rating, niche }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-secondary/50 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="text-foreground mb-4 italic">
        "{content}"
      </blockquote>
      <div className="text-sm">
        <div className="font-semibold text-primary">{name}</div>
        {niche && <div className="text-muted-foreground">{niche}</div>}
      </div>
    </Card>
  );
};