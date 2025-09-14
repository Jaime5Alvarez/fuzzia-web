import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function HoursPage() {



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
                <span className="text-lg font-bold text-primary">7:00 - 15:30 | 18:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Viernes - Domingo</span>
                <span className="text-lg font-bold text-primary">7:00 - 00:00</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
