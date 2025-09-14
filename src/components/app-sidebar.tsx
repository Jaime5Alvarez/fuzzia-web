"use client"

import { UtensilsCrossed, MapPin, Phone, Clock } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

// Enlace único a la carta completa
const cartaLink = {
  title: "Carta",
  icon: UtensilsCrossed,
  action: () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Información del restaurante
const restaurantInfo = [
  {
    title: "Ubicación",
    url: "#ubicacion",
    icon: MapPin,
    action: () => {
      // Aquí podrías abrir Google Maps o mostrar dirección
      alert("📍 Calle Principal 123, Ciudad");
    }
  },
  {
    title: "Horarios",
    url: "#horarios", 
    icon: Clock,
    action: () => {
      alert("🕒 Lunes a Domingo: 12:00 - 23:00");
    }
  },
  {
    title: "Contacto",
    url: "#contacto",
    icon: Phone,
    action: () => {
      alert("📞 +34 123 456 789\n📧 info@lafuzzia.com");
    }
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img 
              src="/la-fuzzia-logo.png" 
              alt="La Fuzzia Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-foreground truncate">
              La Fuzzia
            </h1>
            <p className="text-xs text-muted-foreground truncate">
              Restaurante Italiano
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Enlace a la Carta */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button 
                    onClick={cartaLink.action}
                    className="w-full justify-start"
                  >
                    <cartaLink.icon />
                    <span>{cartaLink.title}</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Información del Restaurante */}
        <SidebarGroup>
          <SidebarGroupLabel>Restaurante</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {restaurantInfo.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button 
                      onClick={item.action}
                      className="w-full justify-start"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-2 text-xs text-muted-foreground text-center">
          <p>© 2024 La Fuzzia</p>
          <p>Todos los derechos reservados</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}