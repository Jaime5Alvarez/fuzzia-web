"use client"

import { Home, ShoppingBag, Search, User, Heart, UtensilsCrossed, MapPin, Phone, Clock } from "lucide-react"
import { menuData } from '../data/menuData';

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

// Items de navegación principal
const mainNavItems = [
  {
    title: "Inicio",
    url: "#",
    icon: Home,
  },
  {
    title: "Buscar",
    url: "#",
    icon: Search,
  },
  {
    title: "Favoritos",
    url: "#",
    icon: Heart,
  },
  {
    title: "Carrito",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Mi Perfil",
    url: "#",
    icon: User,
  },
]

// Items del menú del restaurante - se generan dinámicamente desde menuData
const menuItems = menuData.map(category => ({
  title: category.name,
  url: `#category-${category.id}`,
  icon: UtensilsCrossed,
}))

// Información del restaurante
const restaurantInfo = [
  {
    title: "Ubicación",
    url: "#",
    icon: MapPin,
  },
  {
    title: "Contacto",
    url: "#",
    icon: Phone,
  },
  {
    title: "Horarios",
    url: "#",
    icon: Clock,
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
        {/* Navegación Principal */}
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Menú del Restaurante */}
        <SidebarGroup>
          <SidebarGroupLabel>Menú</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button 
                      onClick={() => {
                        const categoryElement = document.getElementById(`category-${item.url.replace('#category-', '')}`);
                        if (categoryElement) {
                          const headerElement = document.querySelector('header');
                          const headerHeight = headerElement ? headerElement.offsetHeight : 120;
                          const elementPosition = categoryElement.offsetTop;
                          const offsetPosition = elementPosition - headerHeight - 16;
                          
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }}
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

        <SidebarSeparator />

        {/* Información del Restaurante */}
        <SidebarGroup>
          <SidebarGroupLabel>Restaurante</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {restaurantInfo.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
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
        <div className="p-2 text-xs text-muted-foreground text-center">
          <p>© 2024 La Fuzzia</p>
          <p>Todos los derechos reservados</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}