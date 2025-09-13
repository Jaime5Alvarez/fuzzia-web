import { Home, ShoppingBag, Search, User, Heart } from 'lucide-react';
import { useState } from 'react';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'search', icon: Search, label: 'Buscar' },
    { id: 'favorites', icon: Heart, label: 'Favoritos' },
    { id: 'cart', icon: ShoppingBag, label: 'Carrito' },
    { id: 'profile', icon: User, label: 'Perfil' },
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-t border-border"
      style={{ height: 'var(--app-nav-height)' }}
    >
      <div className="flex items-center justify-around h-full px-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className="flex flex-col items-center justify-center gap-1 py-2 px-3 transition-all duration-200 relative"
          >
            <Icon
              size={20}
              className={activeTab === id ? 'text-primary' : 'text-muted-foreground'}
            />
            <span
              className={`text-xs font-medium ${
                activeTab === id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
