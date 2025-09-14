import { Phone, MessageSquare, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function ContactPage() {
  const handleCall = () => {
    window.open('tel:+34948927615', '_self')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/34611614837', '_blank')
  }

  const handleGoogleReview = () => {
    window.open('https://g.page/r/CQ-vOwCZCMnlEBM/review', '_blank')
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
              <p className="text-lg font-medium">+34 948 92 76 15</p>
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
              <MessageSquare className="w-5 h-5 text-primary" />
              WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-lg font-medium">+34 611 61 48 37</p>
              <p className="text-sm text-muted-foreground">
                Reservas, consultas y pedidos
              </p>
            </div>
            <button 
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Abrir WhatsApp
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Información Adicional */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Reservas urgentes</h3>
            <p className="text-sm text-muted-foreground">
              Para reservas del mismo día, llámanos directamente o por WhatsApp
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

        <Card className="text-center cursor-pointer hover:bg-accent/50 transition-colors" onClick={handleGoogleReview}>
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-medium mb-1">Google My Business</h3>
            <p className="text-sm text-muted-foreground">
              Deja tu reseña y ayúdanos a mejorar
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}