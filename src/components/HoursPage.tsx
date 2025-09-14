import { Clock, Calendar, Coffee, Utensils, Wine, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function HoursPage() {
  const currentHour = new Date().getHours()
  const currentDay = new Date().getDay() // 0 = Sunday, 1 = Monday, etc.
  
  const isOpen = () => {
    const schedule = {
      1: { open: 12, close: 23.5 }, // Monday
      2: { open: 12, close: 23.5 }, // Tuesday
      3: { open: 12, close: 23.5 }, // Wednesday
      4: { open: 12, close: 23.5 }, // Thursday
      5: { open: 12, close: 25 },   // Friday (1 AM = 25)
      6: { open: 12, close: 25 },   // Saturday (1 AM = 25)
      0: { open: 12, close: 23 },   // Sunday
    }
    
    const today = schedule[currentDay]
    if (!today) return false
    
    const currentTime = currentHour + (new Date().getMinutes() / 60)
    return currentTime >= today.open && currentTime <= today.close
  }

  return (
    <div className="container mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Horarios</h1>
        <p className="text-muted-foreground">Consulta nuestros horarios de apertura</p>
      </div>

      {/* Estado Actual */}
      <Card className={`border-2 ${isOpen() ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950' : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950'}`}>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isOpen() ? 'bg-green-500' : 'bg-red-500'}`} />
            <div>
              <p className="text-lg font-medium">
                {isOpen() ? '🟢 Abierto ahora' : '🔴 Cerrado ahora'}
              </p>
              <p className="text-sm text-muted-foreground">
                {isOpen() 
                  ? 'Ven a disfrutar de nuestra cocina' 
                  : 'Próxima apertura: mañana a las 12:00'
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Horarios Principales */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Horarios de Apertura
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-3">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium">Lunes - Jueves</span>
                <span className="text-lg font-bold text-primary">12:00 - 23:30</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="font-medium">Viernes - Sábado</span>
                <span className="text-lg font-bold text-primary">12:00 - 01:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Domingo</span>
                <span className="text-lg font-bold text-primary">12:00 - 23:00</span>
              </div>
            </div>
            
            <div className="bg-accent/30 rounded-lg p-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                La cocina cierra 30 minutos antes del cierre del restaurante
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Horarios Especiales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" />
              Desayunos & Brunch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Sábados y Domingos</span>
                <span className="font-medium text-primary">10:00 - 14:00</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Brunch especial con opciones dulces y saladas
              </p>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-lg p-3">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                ☕ Café de especialidad y pasteles artesanales
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wine className="w-5 h-5 text-primary" />
              Happy Hour
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Lunes - Viernes</span>
                <span className="font-medium text-primary">18:00 - 20:00</span>
              </div>
              <p className="text-sm text-muted-foreground">
                20% de descuento en bebidas seleccionadas
              </p>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/20 rounded-lg p-3">
              <p className="text-sm text-purple-800 dark:text-purple-200">
                🍷 Incluye vinos, cervezas artesanales y cócteles
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Servicios por Horario */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-primary" />
            Servicios Disponibles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto">
                <Coffee className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium">Almuerzo</h3>
                <p className="text-sm text-muted-foreground">12:00 - 16:00</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Menú del día disponible L-V
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto">
                <Wine className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Aperitivo</h3>
                <p className="text-sm text-muted-foreground">17:00 - 20:00</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Tapas y bebidas
                </p>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium">Cena</h3>
                <p className="text-sm text-muted-foreground">20:00 - cierre</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Carta completa disponible
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Días Especiales */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Eventos Especiales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Noches de Jazz</h4>
                <p className="text-sm text-muted-foreground">
                  Todos los viernes a partir de las 21:00
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Cata de Vinos</h4>
                <p className="text-sm text-muted-foreground">
                  Último sábado del mes a las 19:00
                </p>
              </div>
            </div>
            
            <div className="bg-accent/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground text-center">
                📅 Consulta nuestro calendario de eventos especiales llamando al +34 91 123 45 67
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información Importante */}
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-amber-900 dark:text-amber-100">
                Información importante
              </h3>
              <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1">
                <li>• Los horarios pueden variar en días festivos</li>
                <li>• Reservas recomendadas para fines de semana</li>
                <li>• Última comanda 30 minutos antes del cierre</li>
                <li>• Consulta eventos especiales que pueden afectar horarios</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
