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

// Información del restaurante
const restaurantInfo = [
  {
    title: "Carta",
    url: "#carta",
    icon: UtensilsCrossed,
    action: () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
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
        <div className="flex items-center gap-4 px-3 py-4  mx-2 my-2 ">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src="/la-fuzzia-logo.png" 
              alt="La Fuzzia Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-foreground truncate tracking-tight">
              La Fuzzia
            </h1>
            <p className="text-sm text-muted-foreground/80 truncate">
              Gastrobar
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarSeparator />
        {/* Información del Restaurante */}
        <SidebarGroup>
          <SidebarGroupLabel>Secciones</SidebarGroupLabel>
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
        <div className="p-3 text-xs text-muted-foreground text-center space-y-2">
      
            <p className="text-muted-foreground/80">Desarrollado por</p>
            <a 
              href="https://www.linkedin.com/in/jaime-alvarez-b0441b241/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              Jaime Álvarez
            </a>
            <p className="text-muted-foreground/70 text-[10px] mt-1">Software Developer</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}