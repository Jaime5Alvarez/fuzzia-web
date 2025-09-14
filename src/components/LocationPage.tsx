import { MapPin, Navigation, Clock, Car, Train } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function LocationPage() {
  return (
    <div className="container mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Ubicación</h1>
        <p className="text-muted-foreground">Encuéntranos en el corazón de San Adrián, Navarra</p>
      </div>

      {/* Dirección Principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Dirección
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-lg font-medium">La Fuzzia Gastrobar</p>
            <p className="text-muted-foreground">
              Plaza Vera Magallón, 19 bajo 4<br />
              31570 San Adrián<br />
              Navarra, España
            </p>
          </div>
          
          <button 
            onClick={() => window.open('https://maps.google.com/?q=Plaza+Vera+Magallón+19+bajo+4+San+Adrián+Navarra+España', '_blank')}
            className="w-full md:w-auto flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Abrir en Google Maps
          </button>
        </CardContent>
      </Card>
    </div>
  )
}