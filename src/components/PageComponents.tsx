import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  variant?: 'default' | 'gradient';
}

export const PageHeader = ({ title, subtitle, variant = 'default' }: PageHeaderProps) => {
  return (
    <div className="text-center mb-16 animate-linkedin-fade">
      <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
        variant === 'gradient' 
          ? 'bg-gradient-linkedin bg-clip-text text-transparent' 
          : 'text-foreground'
      }`}>
        {title}
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
  variant?: 'default' | 'gradient';
}

export const CTASection = ({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  variant = 'default' 
}: CTASectionProps) => {
  return (
    <div className={`rounded-2xl p-8 md:p-12 text-center shadow-elegant ${
      variant === 'gradient' 
        ? 'bg-gradient-linkedin text-white' 
        : 'bg-background border-2 border-primary/20'
    }`}>
      <h2 className={`text-3xl font-bold mb-4 ${
        variant === 'gradient' ? 'text-white' : 'text-foreground'
      }`}>
        {title}
      </h2>
      <p className={`text-lg mb-8 max-w-3xl mx-auto ${
        variant === 'gradient' ? 'text-white/90' : 'text-muted-foreground'
      }`}>
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant={variant === 'gradient' ? 'hero' : 'linkedin'} 
          size="lg" 
          className="hover-scale animate-agentize-pulse"
        >
          {primaryButton}
        </Button>
        {secondaryButton && (
          <Button 
            variant={variant === 'gradient' ? 'secondary' : 'outline'} 
            size="lg"
            className="hover-scale"
          >
            {secondaryButton}
          </Button>
        )}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  variant?: 'default' | 'primary';
  className?: string;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  variant = 'default',
  className = '' 
}: FeatureCardProps) => {
  return (
    <Card className={`shadow-elegant hover:shadow-floating transition-all duration-300 ${
      variant === 'primary' 
        ? 'bg-gradient-linkedin text-white border-0' 
        : 'bg-background hover:scale-105'
    } ${className}`}>
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className={`text-2xl ${
          variant === 'primary' ? 'text-white' : 'text-foreground'
        }`}>
          {title}
        </CardTitle>
        <CardDescription className={`text-lg ${
          variant === 'primary' ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          {description}
        </CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                  variant === 'primary' ? 'bg-white/80' : 'bg-primary'
                }`}></div>
                <span className={`text-sm ${
                  variant === 'primary' ? 'text-white/90' : 'text-muted-foreground'
                }`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};