import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Link } from "react-router-dom";
import { Plane, MapPin, Calendar, Star, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Découvrez le
            <span className="block bg-gradient-to-r from-accent to-gold bg-clip-text text-transparent">
              Paradis
            </span>
            avec HEAVENLY TRAVEL
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Votre voyage de rêve commence ici. Des destinations exceptionnelles, 
            un service personnalisé et des moments inoubliables vous attendent.
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/reserver-vol">
              <Button className="btn-hero group w-full sm:w-auto">
                <Plane className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                Réserver un Vol
              </Button>
            </Link>
            
            <Link to="/reserver-hebergement">
              <Button className="btn-hero group w-full sm:w-auto">
                <MapPin className="w-6 h-6 mr-3 group-hover:bounce transition-all" />
                Réserver un Hébergement
              </Button>
            </Link>
          </div>

          {/* Secondary CTA */}
          <div className="mt-8">
            <Link to="/planification-voyage">
              <Button className="btn-gold group">
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Planifier mon voyage complet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Pourquoi choisir HEAVENLY TRAVEL ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une expérience de voyage unique avec un service d'excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="travel-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Service Premium</h3>
              <p className="text-muted-foreground">
                Un accompagnement personnalisé pour chaque étape de votre voyage
              </p>
            </Card>

            <Card className="travel-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Sécurité Garantie</h3>
              <p className="text-muted-foreground">
                Voyagez en toute sérénité avec nos partenaires de confiance
              </p>
            </Card>

            <Card className="travel-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Réactivité 24/7</h3>
              <p className="text-muted-foreground">
                Une équipe disponible à tout moment pour répondre à vos besoins
              </p>
            </Card>

            <Card className="travel-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gold to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Expertise Locale</h3>
              <p className="text-muted-foreground">
                Des guides locaux pour découvrir les trésors cachés de chaque destination
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt pour l'aventure ?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Contactez-nous dès maintenant et laissez-nous créer le voyage parfait pour vous
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => window.open('https://wa.me/212649621442', '_blank')}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
            >
              Contactez-nous sur WhatsApp
            </Button>
            <Button 
              onClick={() => window.open('mailto:heavenlytravel@zohomail.com', '_blank')}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
            >
              Envoyez-nous un email
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez pourquoi des milliers de voyageurs nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="travel-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Une expérience incroyable ! L'équipe de HEAVENLY TRAVEL a organisé notre lune de miel parfaite. 
                  Tout était parfaitement planifié et le service client exceptionnel."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">SA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Sarah & Ahmed</p>
                    <p className="text-sm text-muted-foreground">Lune de miel aux Maldives</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="travel-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Service professionnel et prix compétitifs. J'ai pu voyager avec ma famille en toute sérénité. 
                  Je recommande vivement HEAVENLY TRAVEL pour tous vos projets de voyage."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">MH</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Mohamed Hassan</p>
                    <p className="text-sm text-muted-foreground">Voyage famille en Turquie</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="travel-card">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Équipe réactive et à l'écoute. Ils ont su s'adapter à mes demandes spécifiques et ont rendu 
                  mon voyage d'affaires très agréable. Merci HEAVENLY TRAVEL !"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-gold rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">LB</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Laila Benali</p>
                    <p className="text-sm text-muted-foreground">Voyage d'affaires Dubai</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              HEAVENLY TRAVEL en chiffres
            </h2>
            <p className="text-xl text-muted-foreground">
              Votre confiance fait notre succès
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">5000+</h3>
              <p className="text-muted-foreground">Clients satisfaits</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">150+</h3>
              <p className="text-muted-foreground">Destinations</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">10000+</h3>
              <p className="text-muted-foreground">Vols réservés</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">4.9/5</h3>
              <p className="text-muted-foreground">Note moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 px-4 bg-background border-t">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Nos garanties pour votre tranquillité d'esprit
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
              <Shield className="w-8 h-8 text-primary mr-4" />
              <div>
                <h4 className="font-semibold text-primary">Paiement Sécurisé</h4>
                <p className="text-sm text-muted-foreground">Transactions protégées</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
              <Clock className="w-8 h-8 text-primary mr-4" />
              <div>
                <h4 className="font-semibold text-primary">Support 24/7</h4>
                <p className="text-sm text-muted-foreground">Assistance continue</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
              <Star className="w-8 h-8 text-primary mr-4" />
              <div>
                <h4 className="font-semibold text-primary">Meilleur Prix Garanti</h4>
                <p className="text-sm text-muted-foreground">Prix compétitifs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;