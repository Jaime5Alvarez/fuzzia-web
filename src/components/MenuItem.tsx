import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
  onAddToCart?: (item: MenuItemType) => void;
}

export default function MenuItem({ item, onAddToCart }: MenuItemProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
      <CardContent className="flex gap-4 p-4">
        {/* Image */}
        <div 
          className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-md"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h3 className="font-semibold text-sm leading-tight mb-1 line-clamp-2 text-card-foreground">
                {item.name}
              </h3>
              <p className="text-xs leading-relaxed line-clamp-2 text-muted-foreground">
                {item.description}
              </p>
            </div>
            
            {/* Add Button */}
            <Button
              size="sm"
              className="flex-shrink-0 w-8 h-8 p-0 transition-all duration-200 hover:scale-110 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => onAddToCart?.(item)}
            >
              <Plus size={16} />
            </Button>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-center justify-between">
            <span className="font-bold text-lg text-primary">
              €{item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
