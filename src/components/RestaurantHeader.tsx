import { ChefHat, MapPin, Clock } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

interface RestaurantHeaderProps {
  activeCategory?: string;
  categories: Array<{id: string, name: string}>;
  onCategoryClick: (categoryId: string) => void;
}

export default function RestaurantHeader({ 
  activeCategory, 
  categories, 
  onCategoryClick 
}: RestaurantHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Restaurant Info */}
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-full bg-primary text-primary-foreground">
            <ChefHat size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {restaurantInfo.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              {restaurantInfo.tagline}
            </p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <Clock size={12} className="text-muted-foreground" />
            <span className="text-muted-foreground">
              {restaurantInfo.hours}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} className="text-muted-foreground" />
            <span className="text-muted-foreground">
              Entrega 20-30 min
            </span>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="px-4 pb-3 border-t border-border">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pt-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full border ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:bg-muted'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
