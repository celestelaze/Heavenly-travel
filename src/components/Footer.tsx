import { Button } from "@/components/ui/button";
import { Instagram, Mail, MessageCircle, Plane } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/212649621442', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:heavenlytravel@zohomail.com', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/heavenly_travel2', '_blank');
  };

  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">HEAVENLY</span>
                <span className="text-lg opacity-90">TRAVEL</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Votre agence de voyage de confiance pour des destinations de rêve. 
              Découvrez le monde avec nos services personnalisés et notre expertise.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                variant="outline"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button
                onClick={openEmail}
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                variant="outline"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              <Button
                onClick={openInstagram}
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                variant="outline"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-white/80">
              <div>
                <p className="font-medium">WhatsApp</p>
                <a 
                  href="https://wa.me/212649621442" 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +212 649 621 442
                </a>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a 
                  href="mailto:heavenlytravel@zohomail.com" 
                  className="hover:text-white transition-colors"
                >
                  heavenlytravel@zohomail.com
                </a>
              </div>
              <div>
                <p className="font-medium">Réseaux sociaux</p>
                <a 
                  href="https://instagram.com/heavenly_travel2" 
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @heavenly_travel2
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <div className="space-y-2 text-white/80">
              <a href="#" className="block hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Conditions générales
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Heavenly Travel. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;