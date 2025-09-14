import { MapPin, Navigation, Clock, Car, Train } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function LocationPage() {
  return (
    <div className="container mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Ubicación</h1>
        <p className="text-muted-foreground">Encuéntranos en el corazón de Madrid</p>
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
              Calle Principal 123<br />
              Centro Histórico<br />
              28013 Madrid, España
            </p>
          </div>
          
          <button 
            onClick={() => window.open('https://maps.google.com/?q=Calle+Principal+123+Madrid', '_blank')}
            className="w-full md:w-auto flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Abrir en Google Maps
          </button>
        </CardContent>
      </Card>

      {/* Transporte */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Train className="w-5 h-5 text-primary" />
              Metro
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Sol</span>
                <div className="flex gap-1">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">L1</span>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">L2</span>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">L3</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">3 minutos andando</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              Transporte
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium mb-2">Autobús</p>
              <div className="flex gap-2 flex-wrap">
                {[5, 15, 20, 51].map(num => (
                  <span key={num} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                    {num}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t">
              <p className="font-medium mb-1">Aparcamiento</p>
              <p className="text-sm text-muted-foreground">
                Plaza Mayor (5 min)<br />
                Mercado San Miguel (3 min)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Referencias Visuales */}
      <Card>
        <CardHeader>
          <CardTitle>Referencias cercanas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-sm">Plaza Mayor</p>
                <p className="text-xs text-muted-foreground">2 min andando</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-sm">Mercado San Miguel</p>
                <p className="text-xs text-muted-foreground">3 min andando</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-sm">Puerta del Sol</p>
                <p className="text-xs text-muted-foreground">5 min andando</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información Adicional */}
      <Card className="bg-accent/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium mb-2">Información útil</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Entrada accesible para sillas de ruedas</li>
                <li>• Zona peatonal, ambiente tranquilo</li>
                <li>• Terraza exterior disponible</li>
                <li>• WiFi gratuito para clientes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
