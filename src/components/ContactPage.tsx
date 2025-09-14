import { Phone, Mail, MessageSquare, Clock, Users, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function ContactPage() {
  const handleCall = () => {
    window.open('tel:+34911234567', '_self')
  }

  const handleEmail = () => {
    window.open('mailto:info@lafuzzia.com?subject=Consulta%20desde%20la%20web', '_self')
  }

  const handleReservation = () => {
    window.open('mailto:reservas@lafuzzia.com?subject=Reserva%20en%20La%20Fuzzia&body=Hola,%0A%0AMe%20gustaría%20hacer%20una%20reserva:%0A%0AFecha:%20%0AHora:%20%0ANúmero%20de%20personas:%20%0ATeléfono%20de%20contacto:%20%0A%0AObservaciones:%20%0A%0AGracias', '_self')
  }

  return (
    <div className="container mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Contacto</h1>
        <p className="text-muted-foreground">Ponte en contacto con nosotros</p>
      </div>

      {/* Información Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              Teléfono
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-lg font-medium">+34 91 123 45 67</p>
              <p className="text-sm text-muted-foreground">
                Atención al cliente y reservas
              </p>
            </div>
            <button 
              onClick={handleCall}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-lg font-medium">info@lafuzzia.com</p>
              <p className="text-sm text-muted-foreground">
                Consultas generales e información
              </p>
            </div>
            <button 
              onClick={handleEmail}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Enviar Email
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Reservas */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Reservas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Para garantizar tu mesa, especialmente en fines de semana y días festivos, 
            te recomendamos hacer una reserva previa.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Horario de reservas
              </h4>
              <p className="text-sm text-muted-foreground">
                Lunes a Domingo: 10:00 - 22:00
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Grupos grandes
              </h4>
              <p className="text-sm text-muted-foreground">
                +8 personas: contactar con 24h de antelación
              </p>
            </div>
          </div>

          <button 
            onClick={handleReservation}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Hacer Reserva
          </button>
        </CardContent>
      </Card>

      {/* Horarios de Contacto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            Horarios de Atención
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Teléfono</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Lunes - Viernes</span>
                  <span className="font-medium text-primary">10:00 - 23:00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Sábados</span>
                  <span className="font-medium text-primary">10:00 - 01:00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Domingos</span>
                  <span className="font-medium text-primary">10:00 - 23:00</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Email</h4>
              <p className="text-sm text-muted-foreground">
                Respondemos emails en menos de 24 horas durante días laborables.
              </p>
              <div className="bg-accent/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">
                  ⚡ Respuesta rápida: L-V 9:00-18:00
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información Adicional */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Reservas urgentes</h3>
            <p className="text-sm text-muted-foreground">
              Para reservas del mismo día, llámanos directamente
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Eventos privados</h3>
            <p className="text-sm text-muted-foreground">
              Consultanos para celebraciones y eventos especiales
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Feedback</h3>
            <p className="text-sm text-muted-foreground">
              Tus opiniones nos ayudan a mejorar cada día
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
