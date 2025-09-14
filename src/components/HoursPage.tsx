import { Calendar, Clock } from "lucide-react"
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
    
    const today = schedule[currentDay as keyof typeof schedule]
    if (!today) return false
    
    const currentTime = currentHour + (new Date().getMinutes() / 60)
    return currentTime >= today.open && currentTime <= today.close
  }

  return (
    <div className="container mx-auto space-y-6 p-6">


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
    </div>
  )
}
