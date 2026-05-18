import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { MapPin, Calendar, Users, Star, Wifi, Car, AlertCircle } from "lucide-react";

const today = new Date().toISOString().split("T")[0];

function addOneDay(dateStr: string): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

const ReserverHebergement = () => {
  const [formData, setFormData] = useState({
    destination: "",
    checkinDate: "",
    checkoutDate: "",
    rooms: "1",
    adults: "2",
    children: "0",
    type: "hotel",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const destinations = [
    "Paris, France", "Londres, Royaume-Uni", "New York, États-Unis", "Tokyo, Japon",
    "Dubai, Émirats Arabes Unis", "Istanbul, Turquie", "Barcelona, Espagne",
    "Rome, Italie", "Amsterdam, Pays-Bas", "Bangkok, Thaïlande",
    "Casablanca, Maroc", "Marrakech, Maroc", "Rabat, Maroc", "Fès, Maroc",
    "Dakar, Sénégal", "Abidjan, Côte d'Ivoire", "Lagos, Nigeria", "Accra, Ghana",
    "Cairo, Égypte", "Tunis, Tunisie", "Alger, Algérie", "Bamako, Mali",
    "Sydney, Australie", "Melbourne, Australie", "Toronto, Canada", "Vancouver, Canada",
    "Los Angeles, États-Unis", "Miami, États-Unis", "Berlin, Allemagne", "Munich, Allemagne",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.destination) newErrors.destination = "Veuillez sélectionner une destination.";
    if (!formData.checkinDate) newErrors.checkinDate = "Veuillez choisir une date d'arrivée.";
    if (!formData.checkoutDate) newErrors.checkoutDate = "Veuillez choisir une date de départ.";
    if (formData.checkinDate && formData.checkoutDate && formData.checkoutDate <= formData.checkinDate)
      newErrors.checkoutDate = "La date de départ doit être après la date d'arrivée.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReservation = () => {
    if (!validate()) return;

    const nights =
      formData.checkinDate && formData.checkoutDate
        ? Math.ceil(
            (new Date(formData.checkoutDate).getTime() - new Date(formData.checkinDate).getTime()) /
              (1000 * 3600 * 24)
          )
        : 0;

    const typeLabel: Record<string, string> = {
      hotel: "Hôtel",
      apartment: "Appartement",
      villa: "Villa",
      resort: "Resort",
    };

    const message = `Bonjour HEAVENLY TRAVEL,

Je souhaite réserver un hébergement avec les détails suivants :

🏨 Type d'hébergement : ${typeLabel[formData.type] ?? formData.type}
📍 Destination : ${formData.destination}
📅 Arrivée : ${formData.checkinDate}
📅 Départ : ${formData.checkoutDate}
🌙 Nombre de nuits : ${nights}
🏠 Nombre de chambres : ${formData.rooms}
👥 Adultes : ${formData.adults}
👶 Enfants : ${formData.children}

Merci de me faire parvenir les disponibilités et tarifs.`;

    window.open(`https://wa.me/212649621442?text=${encodeURIComponent(message)}`, "_blank");
  };

  const checkoutMin = formData.checkinDate ? addOneDay(formData.checkinDate) : today;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Header />
      <WhatsAppFloat />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Réserver un Hébergement</h1>
            <p className="text-xl text-muted-foreground">Trouvez l'hébergement parfait pour votre séjour</p>
          </div>

          <Card className="travel-card">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Type */}
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-sm font-semibold text-foreground">Type d'hébergement</Label>
                  <Select value={formData.type} onValueChange={(v) => setFormData({ ...formData, type: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      <SelectItem value="hotel">🏨 Hôtel</SelectItem>
                      <SelectItem value="apartment">🏠 Appartement</SelectItem>
                      <SelectItem value="villa">🏖️ Villa</SelectItem>
                      <SelectItem value="resort">🌴 Resort</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Destination */}
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-sm font-semibold text-foreground">Destination *</Label>
                  <Select value={formData.destination} onValueChange={(v) => { setFormData({ ...formData, destination: v }); setErrors((e) => ({ ...e, destination: "" })); }}>
                    <SelectTrigger className={errors.destination ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionner la destination" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-border max-h-60">
                      {destinations.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {errors.destination && <p className="flex items-center gap-1 text-sm text-destructive"><AlertCircle className="w-4 h-4" />{errors.destination}</p>}
                </div>

                {/* Arrivée */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-foreground">Date d'arrivée *</Label>
                  <Input
                    type="date"
                    min={today}
                    value={formData.checkinDate}
                    onChange={(e) => { setFormData({ ...formData, checkinDate: e.target.value, checkoutDate: "" }); setErrors((er) => ({ ...er, checkinDate: "", checkoutDate: "" })); }}
                    className={errors.checkinDate ? "border-destructive" : ""}
                  />
                  {errors.checkinDate && <p className="flex items-center gap-1 text-sm text-destructive"><AlertCircle className="w-4 h-4" />{errors.checkinDate}</p>}
                </div>

                {/* Départ */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-foreground">Date de départ *</Label>
                  <Input
                    type="date"
                    min={checkoutMin}
                    value={formData.checkoutDate}
                    onChange={(e) => { setFormData({ ...formData, checkoutDate: e.target.value }); setErrors((er) => ({ ...er, checkoutDate: "" })); }}
                    className={errors.checkoutDate ? "border-destructive" : ""}
                    disabled={!formData.checkinDate}
                  />
                  {errors.checkoutDate && <p className="flex items-center gap-1 text-sm text-destructive"><AlertCircle className="w-4 h-4" />{errors.checkoutDate}</p>}
                </div>

                {/* Chambres */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-foreground">Nombre de chambres</Label>
                  <Select value={formData.rooms} onValueChange={(v) => setFormData({ ...formData, rooms: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      {[1,2,3,4,5].map((n) => <SelectItem key={n} value={n.toString()}>{n} chambre{n > 1 ? "s" : ""}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                {/* Adultes */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-foreground">Nombre d'adultes</Label>
                  <Select value={formData.adults} onValueChange={(v) => setFormData({ ...formData, adults: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      {[1,2,3,4,5,6,7,8].map((n) => <SelectItem key={n} value={n.toString()}>{n} adulte{n > 1 ? "s" : ""}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                {/* Enfants */}
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-sm font-semibold text-foreground">Nombre d'enfants</Label>
                  <Select value={formData.children} onValueChange={(v) => setFormData({ ...formData, children: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      {[0,1,2,3,4,5].map((n) => <SelectItem key={n} value={n.toString()}>{n} enfant{n > 1 ? "s" : ""}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button onClick={handleReservation} className="btn-hero w-full md:w-auto px-12 py-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  Réserver cet hébergement sur WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Vous serez redirigé vers WhatsApp avec vos informations pré-remplies
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="travel-card text-center">
              <Star className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Hébergements de qualité</h3>
              <p className="text-sm text-muted-foreground">Sélection rigoureuse d'établissements de standing</p>
            </Card>
            <Card className="travel-card text-center">
              <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Services inclus</h3>
              <p className="text-sm text-muted-foreground">WiFi, petit-déjeuner et services selon l'établissement</p>
            </Card>
            <Card className="travel-card text-center">
              <Car className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Services additionnels</h3>
              <p className="text-sm text-muted-foreground">Transfert aéroport, excursions et conciergerie</p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReserverHebergement;
