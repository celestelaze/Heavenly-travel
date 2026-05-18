import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Plane, Calendar, Users, ArrowLeftRight, AlertCircle } from "lucide-react";

const today = new Date().toISOString().split("T")[0];

function addOneDay(dateStr: string): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

const ReserverVol = () => {
  const [formData, setFormData] = useState({
    departure: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: "1",
    flightClass: "economy",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const cities = [
    "Casablanca", "Paris", "Madrid", "Londres", "New York", "Dubai",
    "Dakar", "Marrakech", "Rabat", "Rome", "Istanbul", "Cairo",
    "Lagos", "Accra", "Abidjan", "Tunis", "Alger", "Barcelona",
    "Amsterdam", "Frankfurt", "Munich", "Brussels", "Zurich",
    "Milan", "Doha", "Kuwait City", "Riyadh", "Jeddah", "Beirut",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.departure) newErrors.departure = "Veuillez sélectionner une ville de départ.";
    if (!formData.destination) newErrors.destination = "Veuillez sélectionner une destination.";
    if (formData.departure && formData.destination && formData.departure === formData.destination)
      newErrors.destination = "La destination doit être différente de la ville de départ.";
    if (!formData.departureDate) newErrors.departureDate = "Veuillez choisir une date de départ.";
    if (formData.returnDate && formData.departureDate && formData.returnDate < formData.departureDate)
      newErrors.returnDate = "La date de retour doit être après la date de départ.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReservation = () => {
    if (!validate()) return;

    const classLabel: Record<string, string> = {
      economy: "Économique",
      business: "Affaires",
      first: "Première",
    };

    const message = `Bonjour HEAVENLY TRAVEL,

Je souhaite réserver un vol avec les détails suivants :

✈️ Départ : ${formData.departure}
🛬 Destination : ${formData.destination}
📅 Date de départ : ${formData.departureDate}
📅 Date de retour : ${formData.returnDate || "Vol simple"}
👥 Nombre de passagers : ${formData.passengers}
💺 Classe : ${classLabel[formData.flightClass] ?? formData.flightClass}

Merci de me faire parvenir les disponibilités et tarifs.`;

    window.open(`https://wa.me/212649621442?text=${encodeURIComponent(message)}`, "_blank");
  };

  const returnMin = formData.departureDate ? addOneDay(formData.departureDate) : today;

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
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">Réserver un Vol</h1>
            <p className="text-xl text-muted-foreground">
              Trouvez et réservez votre vol idéal vers n'importe quelle destination
            </p>
          </div>

          <Card className="travel-card">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Départ */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Ville de départ *</Label>
                  <Select value={formData.departure} onValueChange={(v) => { setFormData({ ...formData, departure: v }); setErrors((e) => ({ ...e, departure: "", destination: "" })); }}>
                    <SelectTrigger className={errors.departure ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionner la ville de départ" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      {cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {err("departure")}
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Destination *</Label>
                  <Select value={formData.destination} onValueChange={(v) => { setFormData({ ...formData, destination: v }); setErrors((e) => ({ ...e, destination: "" })); }}>
                    <SelectTrigger className={errors.destination ? "border-destructive" : ""}>
                      <SelectValue placeholder="Sélectionner la destination" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      {cities.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  {err("destination")}
                </div>

                {/* Date départ */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Date de départ *</Label>
                  <Input type="date" min={today} value={formData.departureDate}
                    className={errors.departureDate ? "border-destructive" : ""}
                    onChange={(e) => { setFormData({ ...formData, departureDate: e.target.value, returnDate: "" }); setErrors((er) => ({ ...er, departureDate: "", returnDate: "" })); }} />
                  {err("departureDate")}
                </div>

                {/* Date retour */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Date de retour (optionnel)</Label>
                  <Input type="date" min={returnMin} value={formData.returnDate}
                    disabled={!formData.departureDate}
                    className={errors.returnDate ? "border-destructive" : ""}
                    onChange={(e) => { setFormData({ ...formData, returnDate: e.target.value }); setErrors((er) => ({ ...er, returnDate: "" })); }} />
                  {err("returnDate")}
                </div>

                {/* Passagers */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Nombre de passagers</Label>
                  <Select value={formData.passengers} onValueChange={(v) => setFormData({ ...formData, passengers: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      {[1,2,3,4,5,6,7,8].map((n) => <SelectItem key={n} value={n.toString()}>{n} passager{n > 1 ? "s" : ""}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                {/* Classe */}
                <div className="space-y-2">
                  <Label className="text-sm font-semibold">Classe de voyage</Label>
                  <Select value={formData.flightClass} onValueChange={(v) => setFormData({ ...formData, flightClass: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent className="bg-white border border-border">
                      <SelectItem value="economy">Économique</SelectItem>
                      <SelectItem value="business">Classe Affaires</SelectItem>
                      <SelectItem value="first">Première Classe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button onClick={handleReservation} className="btn-hero w-full md:w-auto px-12 py-4">
                  <Plane className="w-5 h-5 mr-2" />
                  Réserver ce vol sur WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Vous serez redirigé vers WhatsApp avec vos informations pré-remplies
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="travel-card text-center">
              <ArrowLeftRight className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Vols flexibles</h3>
              <p className="text-sm text-muted-foreground">Options de modification et d'annulation disponibles</p>
            </Card>
            <Card className="travel-card text-center">
              <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Meilleurs prix</h3>
              <p className="text-sm text-muted-foreground">Tarifs compétitifs et offres exclusives</p>
            </Card>
            <Card className="travel-card text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Support 24/7</h3>
              <p className="text-sm text-muted-foreground">Assistance disponible avant et pendant votre voyage</p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReserverVol;
