import { menuData } from '../data/menuData';
import MenuItem from './MenuItem';

export default function MenuPage() {
  return (
    <div className="container mx-auto">
      {/* Menu Items */}
      <div className="space-y-6">
        {menuData.map((category) => (
          <section 
            key={category.id}
            id={`category-${category.id}`}
            data-category={category.id}
            className="space-y-3"
            style={{ scrollMarginTop: '140px' }}
          >
            <div className="flex items-center gap-4 mt-8 first:mt-0">
              <h3 className="text-xl font-medium text-foreground tracking-tight">{category.name}</h3>
              <div className="flex-1 h-px bg-border opacity-60"></div>
            </div>
            <div className="grid gap-3">
              {category.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
        {/* Spacing at the end */}
        <div className="mt-8 mb-12" />
      </div>
    </div>
  );
}