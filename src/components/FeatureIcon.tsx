import { LucideIcon } from 'lucide-react';

interface FeatureIconProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureIcon = ({ icon: Icon, title, description }: FeatureIconProps) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 border border-accent/20 hover:border-accent/40 transition-all duration-300">
      <div className="bg-primary/20 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};