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

interface AppSidebarProps {
  currentPath: string
}

export function AppSidebar({ currentPath }: AppSidebarProps) {

  // Información del restaurante
  const restaurantInfo = [
    {
      title: "La Fuzzia Gastrobar Carta",
      url: "/",
      icon: UtensilsCrossed,
      path: "/"
    },
    {
      title: "Ubicación",
      url: "/ubicacion",
      icon: MapPin,
      path: "/ubicacion"
    },
    {
      title: "Horarios",
      url: "/horarios", 
      icon: Clock,
      path: "/horarios"
    },
    {
      title: "Contacto",
      url: "/contacto",
      icon: Phone,
      path: "/contacto"
    },
  ]
  return (
    <Sidebar variant="floating">
      <SidebarHeader > 
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
                  <SidebarMenuButton asChild isActive={currentPath === item.path}>
                    <a 
                      href={item.url}
                      className="flex items-center gap-3 w-full justify-start"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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