import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Calendar, MapPin, Users, Heart, Plane, Camera, AlertCircle } from "lucide-react";

const today = new Date().toISOString().split("T")[0];

function addOneDay(dateStr: string): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

const PlanificationVoyage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    departureCountry: "",
    destination: "",
    travelers: "2",
    startDate: "",
    endDate: "",
    budget: "",
    travelType: "",
    preferences: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const countries = [
    "Maroc", "France", "Espagne", "Allemagne", "Italie", "Royaume-Uni",
    "États-Unis", "Canada", "Sénégal", "Côte d'Ivoire", "Nigeria", "Ghana",
    "Algérie", "Tunisie", "Égypte", "Émirats Arabes Unis", "Arabie Saoudite",
    "Turquie", "Japon", "Australie", "Brésil", "Argentine", "Mexique",
  ];

  const destinations = [
    "Maldives", "Bali, Indonésie", "Santorini, Grèce", "Dubai, EAU",
    "Paris, France", "Tokyo, Japon", "New York, États-Unis", "Londres, Royaume-Uni",
    "Rome, Italie", "Barcelona, Espagne", "Istanbul, Turquie", "Bangkok, Thaïlande",
    "Marrakech, Maroc", "Casablanca, Maroc", "Dakar, Sénégal", "Le Cap, Afrique du Sud",
    "Sydney, Australie", "Rio de Janeiro, Brésil", "Cancun, Mexique", "Hawaii, États-Unis",
  ];

  const travelTypes = [
    "Lune de miel", "Voyage romantique", "Famille", "Aventure", "Détente & Spa",
    "Culture & Histoire", "Gastronomie", "Business", "Écotourisme", "Luxe",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis.";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis.";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Adresse email invalide.";
    if (!formData.departureCountry) newErrors.departureCountry = "Veuillez sélectionner le pays de départ.";
    if (!formData.destination) newErrors.destination = "Veuillez sélectionner une destination.";
    if (!formData.startDate) newErrors.startDate = "Veuillez choisir une date de départ.";
    if (!formData.endDate) newErrors.endDate = "Veuillez choisir une date de retour.";
    if (formData.startDate && formData.endDate && formData.endDate <= formData.startDate)
      newErrors.endDate = "La date de retour doit être après la date de départ.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlanification = () => {
    if (!validate()) return;

    const days =
      formData.startDate && formData.endDate
        ? Math.ceil(
            (new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) /
              (1000 * 3600 * 24)
          )
        : 0;

    const message = `Bonjour HEAVENLY TRAVEL,

Je souhaite planifier un voyage complet avec les informations suivantes :

👤 INFORMATIONS PERSONNELLES
Nom : ${formData.firstName} ${formData.lastName}
Email : ${formData.email || "Non renseigné"}
Téléphone : ${formData.phone || "Non renseigné"}

🌍 DÉTAILS DU VOYAGE
Pays de départ : ${formData.departureCountry}
Destination : ${formData.destination}
Nombre de voyageurs : ${formData.travelers}
Date de départ : ${formData.startDate}
Date de retour : ${formData.endDate}
Durée : ${days} jours

💰 Budget approximatif : ${formData.budget || "À discuter"}
❤️ Type de voyage : ${formData.travelType || "Non précisé"}

📝 PRÉFÉRENCES SPÉCIALES :
${formData.preferences || "Aucune préférence particulière"}

Merci de me proposer un programme complet incluant vol, hébergement et activités.`;

    window.open(`https://wa.me/212649621442?text=${encodeURIComponent(message)}`, "_blank");
  };

  const endDateMin = formData.startDate ? addOneDay(formData.startDate) : today;

  const err = (key: string) => errors[key] ? (
    <p className="flex items-center gap-1 text-sm text-destructive">
      <AlertCircle className="w-4 h-4" />{errors[key]}
    </p>
  ) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <WhatsAppFloat />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-accent to-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Planification de Voyage Complet</h1>
            <p className="text-xl text-muted-foreground">
              Laissez-nous créer le voyage parfait selon vos envies et votre budget
            </p>
          </div>

          <Card className="travel-card">
            <div className="p-8 space-y-8">

              {/* Infos personnelles */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
                  <Users className="w-5 h-5 mr-2" /> Vos informations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Prénom *</Label>
                    <Input value={formData.firstName} placeholder="Votre prénom"
                      className={errors.firstName ? "border-destructive" : ""}
                      onChange={(e) => { setFormData({ ...formData, firstName: e.target.value }); setErrors((er) => ({ ...er, firstName: "" })); }} />
                    {err("firstName")}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Nom *</Label>
                    <Input value={formData.lastName} placeholder="Votre nom"
                      className={errors.lastName ? "border-destructive" : ""}
                      onChange={(e) => { setFormData({ ...formData, lastName: e.target.value }); setErrors((er) => ({ ...er, lastName: "" })); }} />
                    {err("lastName")}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Email</Label>
                    <Input type="email" value={formData.email} placeholder="votre.email@exemple.com"
                      className={errors.email ? "border-destructive" : ""}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors((er) => ({ ...er, email: "" })); }} />
                    {err("email")}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Téléphone</Label>
                    <Input type="tel" value={formData.phone} placeholder="+212 6XX XXX XXX"
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>
              </div>

              {/* Détails voyage */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Détails du voyage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Pays de départ *</Label>
                    <Select value={formData.departureCountry} onValueChange={(v) => { setFormData({ ...formData, departureCountry: v }); setErrors((er) => ({ ...er, departureCountry: "" })); }}>
                      <SelectTrigger className={errors.departureCountry ? "border-destructive" : ""}>
                        <SelectValue placeholder="Sélectionner le pays de départ" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-border max-h-60">
                        {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    {err("departureCountry")}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Destination souhaitée *</Label>
                    <Select value={formData.destination} onValueChange={(v) => { setFormData({ ...formData, destination: v }); setErrors((er) => ({ ...er, destination: "" })); }}>
                      <SelectTrigger className={errors.destination ? "border-destructive" : ""}>
                        <SelectValue placeholder="Sélectionner la destination" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-border max-h-60">
                        {destinations.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    {err("destination")}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Nombre de voyageurs *</Label>
                    <Select value={formData.travelers} onValueChange={(v) => setFormData({ ...formData, travelers: v })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent className="bg-white border border-border">
                        {[1,2,3,4,5,6,7,8].map((n) => <SelectItem key={n} value={n.toString()}>{n} voyageur{n > 1 ? "s" : ""}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Type de voyage</Label>
                    <Select value={formData.travelType} onValueChange={(v) => setFormData({ ...formData, travelType: v })}>
                      <SelectTrigger><SelectValue placeholder="Sélectionner le type" /></SelectTrigger>
                      <SelectContent className="bg-white border border-border">
                        {travelTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Date de départ *</Label>
                    <Input type="date" min={today} value={formData.startDate}
                      className={errors.startDate ? "border-destructive" : ""}
                      onChange={(e) => { setFormData({ ...formData, startDate: e.target.value, endDate: "" }); setErrors((er) => ({ ...er, startDate: "", endDate: "" })); }} />
                    {err("startDate")}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold">Date de retour *</Label>
                    <Input type="date" min={endDateMin} value={formData.endDate}
                      disabled={!formData.startDate}
                      className={errors.endDate ? "border-destructive" : ""}
                      onChange={(e) => { setFormData({ ...formData, endDate: e.target.value }); setErrors((er) => ({ ...er, endDate: "" })); }} />
                    {err("endDate")}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-sm font-semibold">Budget approximatif (MAD)</Label>
                    <Select value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })}>
                      <SelectTrigger><SelectValue placeholder="Sélectionner la fourchette de budget" /></SelectTrigger>
                      <SelectContent className="bg-white border border-border">
                        <SelectItem value="5000-15000">5 000 - 15 000 MAD</SelectItem>
                        <SelectItem value="15000-30000">15 000 - 30 000 MAD</SelectItem>
                        <SelectItem value="30000-50000">30 000 - 50 000 MAD</SelectItem>
                        <SelectItem value="50000-100000">50 000 - 100 000 MAD</SelectItem>
                        <SelectItem value="100000+">100 000+ MAD</SelectItem>
                        <SelectItem value="flexible">Budget flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Préférences */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
                  <Heart className="w-5 h-5 mr-2" /> Vos préférences
                </h3>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">
                    Activités souhaitées, régime alimentaire, accessibilité, autres demandes...
                  </Label>
                  <Textarea value={formData.preferences} className="min-h-[120px]"
                    placeholder="Décrivez vos préférences, activités souhaitées, restrictions alimentaires, besoins d'accessibilité, etc."
                    onChange={(e) => setFormData({ ...formData, preferences: e.target.value })} />
                </div>
              </div>

              {/* Bouton */}
              <div className="text-center">
                <Button onClick={handlePlanification} className="btn-hero w-full md:w-auto px-12 py-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  Créer mon voyage sur-mesure
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Vous serez redirigé vers WhatsApp avec toutes vos informations
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="travel-card text-center">
              <Plane className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Transport inclus</h3>
              <p className="text-sm text-muted-foreground">Vols, transferts aéroport et transport local</p>
            </Card>
            <Card className="travel-card text-center">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hébergement sélectionné</h3>
              <p className="text-sm text-muted-foreground">Hôtels et logements adaptés à vos goûts</p>
            </Card>
            <Card className="travel-card text-center">
              <Camera className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expériences uniques</h3>
              <p className="text-sm text-muted-foreground">Activités et excursions personnalisées</p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlanificationVoyage;
