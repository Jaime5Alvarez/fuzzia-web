import { Home, ShoppingBag, Search, User, Heart } from 'lucide-react';
import { useState } from 'react';

interface BottomNavigationProps {
  cartItemsCount?: number;
}

export default function BottomNavigation({ cartItemsCount = 0 }: BottomNavigationProps) {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Inicio' },
    { id: 'search', icon: Search, label: 'Buscar' },
    { id: 'favorites', icon: Heart, label: 'Favoritos' },
    { id: 'cart', icon: ShoppingBag, label: 'Carrito', badge: cartItemsCount },
    { id: 'profile', icon: User, label: 'Perfil' },
  ];

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-t border-border"
      style={{ height: 'var(--app-nav-height)' }}
    >
      <div className="flex items-center justify-around h-full px-2">
        {navItems.map(({ id, icon: Icon, label, badge }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className="flex flex-col items-center justify-center gap-1 py-2 px-3 transition-all duration-200 relative"
          >
            <div className="relative">
              <Icon
                size={20}
                className={activeTab === id ? 'text-primary' : 'text-muted-foreground'}
              />
              {badge !== undefined && badge > 0 && (
                <span
                  className="absolute -top-2 -right-2 min-w-[18px] h-[18px] text-xs font-bold rounded-full flex items-center justify-center bg-primary text-primary-foreground"
                  style={{ fontSize: '10px' }}
                >
                  {badge > 99 ? '99+' : badge}
                </span>
              )}
            </div>
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
