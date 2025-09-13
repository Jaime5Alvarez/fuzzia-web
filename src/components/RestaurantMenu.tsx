import { useState, useRef, useEffect } from 'react';
import { menuData, type MenuItem as MenuItemType } from '../data/menuData';
import RestaurantHeader from './RestaurantHeader';
import MenuItem from './MenuItem';
import BottomNavigation from './BottomNavigation';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<MenuItemType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'Todos' },
    ...menuData.map(category => ({
      id: category.id,
      name: category.name
    }))
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleAddToCart = (item: MenuItemType) => {
    setCart(prev => [...prev, item]);
    
    // Simple feedback animation or toast could be added here
    console.log(`Agregado al carrito: ${item.name}`);
  };

  const activeCategoryData = activeCategory === 'all' 
    ? { id: 'all', name: 'Todos nuestros platos', items: menuData.flatMap(cat => cat.items) }
    : menuData.find(cat => cat.id === activeCategory);

  return (
    <div 
      className="min-h-screen bg-background"
      style={{ 
        paddingBottom: 'var(--app-nav-height)' // Space for bottom nav
      }}
    >
      <RestaurantHeader
        activeCategory={activeCategory}
        categories={categories}
        onCategoryClick={handleCategoryClick}
      />

      <main className="px-4 py-6" ref={containerRef}>
        {/* Active Category Display */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 text-foreground">
            {activeCategoryData?.name}
          </h2>
          <div className="h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {activeCategory === 'all' ? (
            // Show all items when 'all' category is selected
            <section className="space-y-6">
              {menuData.map((category) => (
                <div key={category.id} id={`category-${category.id}`} className="space-y-3">
                  <div className="flex items-center gap-2 mt-8 first:mt-0">
                    <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                    <div className="flex-1 h-px bg-border"></div>
                  </div>
                  <div className="grid gap-3">
                    {category.items.map((item) => (
                      <MenuItem
                        key={item.id}
                        item={item}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </div>
              ))}
              {/* Total Summary */}
              <div className="mt-8 mb-12 text-center">
                <p className="text-sm text-muted-foreground">
                  {activeCategoryData?.items.length} platos en total
                </p>
              </div>
            </section>
          ) : (
            // Show single category
            menuData.map((category) => (
              <section 
                key={category.id} 
                id={`category-${category.id}`}
                className={`transition-opacity duration-300 ${
                  activeCategory === category.id ? 'opacity-100' : 'opacity-50'
                }`}
              >
                {activeCategory === category.id && (
                  <>
                    <div className="grid gap-3">
                      {category.items.map((item) => (
                        <MenuItem
                          key={item.id}
                          item={item}
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>

                    {/* Category Summary */}
                    <div className="mt-8 mb-12 text-center">
                      <p className="text-sm text-muted-foreground">
                        {category.items.length} platos en {category.name}
                      </p>
                    </div>
                  </>
                )}
              </section>
            ))
          )}
        </div>

        {/* Floating Cart Summary */}
        {cart.length > 0 && (
          <Card className="fixed bottom-24 left-4 right-4 transition-all duration-300 z-40">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs">
                    {cart.length}
                  </Badge>
                  <div>
                    <p className="font-semibold text-card-foreground">
                      {cart.length} artículo{cart.length !== 1 ? 's' : ''} en el carrito
                    </p>
                    <p className="text-sm text-primary">
                      Total: €{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    console.log('Ver carrito:', cart);
                  }}
                >
                  Ver carrito
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      <BottomNavigation cartItemsCount={cart.length} />
    </div>
  );
}
