import { Card, CardContent } from './ui/card';
import type { MenuItem as MenuItemType } from '../data/menuData';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <Card className="">
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
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-card-foreground">
              {item.name}
            </h3>
            <p className="text-xs leading-relaxed line-clamp-2 text-muted-foreground">
              {item.description}
            </p>
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
