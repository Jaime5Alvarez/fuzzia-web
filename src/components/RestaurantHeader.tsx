// Logo importado desde public
import { restaurantInfo } from '../data/menuData';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';

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
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="/la-fuzzia-logo.png" 
                alt="La Fuzzia Logo"
                className="w-full h-full object-cover"
              />
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
          <ModeToggle />
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="px-4 pb-3 border-t border-border">
        <div className="flex gap-2 overflow-x-auto pt-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="flex-shrink-0 rounded-full min-w-fit border data-[variant=outline]:border-border"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
