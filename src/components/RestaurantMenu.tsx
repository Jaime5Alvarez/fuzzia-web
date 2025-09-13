import { useState, useRef } from 'react';
import { menuData } from '../data/menuData';
import RestaurantHeader from './RestaurantHeader';
import MenuItem from './MenuItem';
import BottomNavigation from './BottomNavigation';
import { ThemeProvider } from './ThemeProvider';

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState('all');
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


  const activeCategoryData = activeCategory === 'all' 
    ? { id: 'all', name: 'Todos nuestros platos', items: menuData.flatMap(cat => cat.items) }
    : menuData.find(cat => cat.id === activeCategory);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
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
                      />
                    ))}
                  </div>
                </div>
              ))}
              {/* Spacing at the end */}
              <div className="mt-8 mb-12" />
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
                        />
                      ))}
                    </div>
                    {/* Spacing at the end */}
                    <div className="mt-8 mb-12" />
                  </>
                )}
              </section>
            ))
          )}
        </div>

        </main>

        <BottomNavigation />
      </div>
    </ThemeProvider>
  );
}
