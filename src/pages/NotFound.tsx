import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plane, Home, MapPin, Calendar } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted px-4">
        <div className="text-center max-w-lg mx-auto py-32">
          {/* Icône animée */}
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-travel">
            <Plane className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Cette page n'existe pas
          </h2>
          <p className="text-muted-foreground mb-10">
            Il semble que cette destination ne figure pas sur notre carte. 
            Retournez à l'accueil et explorez nos services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-hero w-full sm:w-auto">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <Link to="/reserver-vol">
              <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                <Plane className="w-5 h-5 mr-2" />
                Réserver un vol
              </Button>
            </Link>
          </div>

          {/* Liens rapides */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/reserver-hebergement" className="flex items-center gap-1 hover:text-primary transition-colors">
              <MapPin className="w-4 h-4" /> Hébergements
            </Link>
            <Link to="/planification-voyage" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Calendar className="w-4 h-4" /> Planifier un voyage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
