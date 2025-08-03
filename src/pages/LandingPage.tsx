import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CountdownTimer } from '@/components/CountdownTimer';
import { TestimonialCard } from '@/components/TestimonialCard';
import { StickyWhatsAppButton } from '@/components/StickyWhatsAppButton';
import { FeatureIcon } from '@/components/FeatureIcon';
import { 
  Play, 
  TrendingUp, 
  Brain, 
  Sparkles, 
  Video, 
  Target, 
  Clock,
  CheckCircle,
  Star,
  Users,
  MessageCircle,
  Shield,
  Award,
  Zap,
  Eye
} from 'lucide-react';
import pdfMockup from '@/assets/pdf-mockup.jpg';

const whatsappLink = "https://wa.me/5511996694131?text=Oi%2C+quero+comprar+o+PDF+de+Como+Criar+Vídeos+Virais!";

export default function LandingPage() {
  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">
            ✨ Método Comprovado para Viralização
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-neon bg-clip-text text-transparent leading-tight">
            Você não precisa ser famoso.<br />
            Só precisa da estratégia certa.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Descubra como vídeos viram tendência e aprenda a fazer isso com os seus. 
            <span className="text-accent font-semibold"> Mesmo sem experiência.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsAppClick}
              variant="neon" 
              size="xl"
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Quero o PDF agora!
            </Button>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">7 dias de garantia</span>
            </div>
          </div>
          
          <div className="relative max-w-md mx-auto">
            <img 
              src={pdfMockup} 
              alt="PDF Como Criar Vídeos Virais" 
              className="w-full animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="px-4 py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            📱 Veja o que eu já estou fazendo com esse método
          </h2>
          <p className="text-muted-foreground mb-12">
            Resultados reais aplicando as técnicas do PDF
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card border-accent/20">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Play className="w-16 h-16 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Vídeo com 2.3M visualizações</h3>
              <p className="text-sm text-muted-foreground">História bíblica que viralizou usando hook de impacto</p>
            </Card>
            
            <Card className="p-6 bg-card border-accent/20">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Play className="w-16 h-16 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Vídeo com 1.8M visualizações</h3>
              <p className="text-sm text-muted-foreground">Aplicando storytelling e gatilhos mentais</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 O que você vai aprender
            </h2>
            <p className="text-muted-foreground">
              Mais de 40 páginas de conteúdo prático e estratégico
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureIcon 
              icon={Eye}
              title="Como prender atenção em 3 segundos"
              description="Hooks irresistíveis que fazem o usuário parar o scroll"
            />
            <FeatureIcon 
              icon={Brain}
              title="Gatilhos mentais para engajamento"
              description="Psychology hacks que aumentam comentários e shares"
            />
            <FeatureIcon 
              icon={Sparkles}
              title="Storytelling que emociona"
              description="Estruturas narrativas que criam conexão real"
            />
            <FeatureIcon 
              icon={Zap}
              title="Ferramentas de IA para edição"
              description="IA tools que aceleram sua produção de conteúdo"
            />
            <FeatureIcon 
              icon={Video}
              title="Formatos ideais para cada rede"
              description="TikTok, Reels e Shorts: o que funciona em cada um"
            />
            <FeatureIcon 
              icon={TrendingUp}
              title="Análise de algoritmos"
              description="Como as plataformas decidem o que promover"
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="px-4 py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ✅ Esse conteúdo é pra você se...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Você já tentou criar vídeos, mas não engaja</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Acha que viralização é só pra quem tem sorte</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Não sabe por onde começar a criar conteúdo</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Quer crescer nas redes com estratégia real</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              💬 O que estão falando
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Marina Silva"
              content="Em 2 semanas aplicando o método, meu primeiro vídeo passou de 500K views! Nunca pensei que seria possível."
              rating={5}
              niche="Lifestyle"
            />
            <TestimonialCard 
              name="Carlos Mendes"
              content="Finalmente entendi como funciona o algoritmo. Meus vídeos agora têm engajamento real, não só visualizações."
              rating={5}
              niche="Empreendedorismo"
            />
            <TestimonialCard 
              name="Ana Paula"
              content="O PDF é muito didático! Mesmo sendo iniciante, consegui aplicar as técnicas e vi resultado na primeira semana."
              rating={5}
              niche="Decoração"
            />
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            🔥 Oferta Limitada
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ⏰ Desconto especial por tempo limitado
          </h2>
          
          <div className="bg-card p-8 rounded-2xl border border-accent/30 mb-8">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl text-muted-foreground line-through">De R$ 49,90</div>
                <div className="text-4xl md:text-5xl font-bold text-accent">R$ 19,90</div>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">⏱️ Oferta expira em:</p>
              <CountdownTimer initialMinutes={10} />
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              variant="cta" 
              size="xl"
              className="w-full md:w-auto animate-pulse"
            >
              <MessageCircle className="w-6 h-6" />
              Quero garantir meu desconto agora!
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-accent" />
            <span>Garantia de 7 dias • Pagamento 100% seguro</span>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              👨‍💻 Sobre mim
            </h2>
          </div>
          
          <Card className="p-8 bg-secondary/30">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Criador de conteúdo cristão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sou especialista em criar vídeos virais com histórias bíblicas infantis. 
                Meus vídeos já alcançaram <span className="text-accent font-semibold">milhões de visualizações</span> no TikTok e Instagram, 
                aplicando exatamente as técnicas que compartilho neste PDF. 
                <br /><br />
                <span className="text-foreground font-semibold">Eu não só ensino, eu aplico e comprovo que funciona.</span>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ❓ Perguntas frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Serve pra qualquer nicho?</h3>
              <p className="text-muted-foreground">
                Sim! As técnicas são universais e funcionam para lifestyle, negócios, educação, 
                entretenimento e qualquer área de conteúdo.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Funciona mesmo se eu tiver poucos seguidores?</h3>
              <p className="text-muted-foreground">
                Absolutamente! Viralização não depende do número de seguidores, 
                mas sim da qualidade do conteúdo e da estratégia aplicada.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">Como recebo o PDF?</h3>
              <p className="text-muted-foreground">
                Após confirmar o pagamento via WhatsApp, você recebe o PDF 
                imediatamente no seu email ou diretamente pelo WhatsApp.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-3">O pagamento é seguro?</h3>
              <p className="text-muted-foreground">
                Sim! O processo é 100% seguro e você tem 7 dias de garantia. 
                Se não ficar satisfeito, devolvemos seu dinheiro.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 bg-gradient-to-t from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            🚀 Com o método certo, a viralização deixa de ser sorte e vira consequência.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Pare de tentar na sorte. Comece a aplicar estratégia hoje mesmo.
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            variant="neon" 
            size="xl"
            className="mb-6"
          >
            <MessageCircle className="w-6 h-6" />
            Quero começar agora!
          </Button>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>Método comprovado</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <StickyWhatsAppButton />
    </div>
  );
}