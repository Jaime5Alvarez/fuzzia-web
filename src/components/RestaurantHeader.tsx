// Logo importado desde public
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
      {/* Logo centrado */}
      <div className="flex justify-center py-6">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img 
            src="/la-fuzzia-logo.png" 
            alt="La Fuzzia Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="px-6 pb-4 border-t border-border">
        <div className="flex gap-3 overflow-x-auto pt-4 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="flex-shrink-0 rounded-full min-w-fit border data-[variant=outline]:border-border font-medium px-4 py-2 transition-all duration-200 hover:scale-105"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
