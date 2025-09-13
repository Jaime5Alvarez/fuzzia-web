import { useState, useRef, useEffect } from 'react';
import { menuData } from '../data/menuData';
import RestaurantHeader from './RestaurantHeader';
import MenuItem from './MenuItem';
import BottomNavigation from './BottomNavigation';
import { ThemeProvider } from './ThemeProvider';

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || '');
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = menuData.map(category => ({
    id: category.id,
    name: category.name
  }));

  const handleCategoryClick = (categoryId: string) => {
    
    // Scroll to category section
    const categoryElement = document.getElementById(`category-${categoryId}`);
    if (categoryElement) {
      categoryElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  // Auto-highlight category based on scroll position
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const observerOptions = {
        root: null,
        rootMargin: '-160px 0px -50% 0px', // Account for sticky header height
        threshold: [0.1, 0.3, 0.5]
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        // Find the entry with highest intersection ratio
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        
        if (intersectingEntries.length > 0) {
          // Get the entry with the highest intersection ratio
          const maxEntry = intersectingEntries.reduce((prev, current) => 
            (current.intersectionRatio > prev.intersectionRatio) ? current : prev
          );

          const categoryId = maxEntry.target.getAttribute('data-category');
          if (categoryId) {
            setActiveCategory(categoryId);
          }
        }
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);

      // Observe all category sections
      const categoryElements = menuData.map(category => 
        document.getElementById(`category-${category.id}`)
      ).filter(Boolean);

      categoryElements.forEach(element => {
        if (element && observer) observer.observe(element);
      });
    };

    // Small delay to ensure DOM elements are ready
    const timer = setTimeout(setupObserver, 200);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div 
        className="min-h-screen bg-background"
      >
        <RestaurantHeader
          activeCategory={activeCategory}
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />

        <main className="px-4 py-6" ref={containerRef}>
        {/* Menu Items */}
        <div className="space-y-6">
          {menuData.map((category) => (
            <section 
              key={category.id} 
              id={`category-${category.id}`} 
              data-category={category.id}
              className="space-y-3"
            >
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
            </section>
          ))}
          {/* Spacing at the end */}
          <div className="mt-8 mb-12" />
        </div>

        </main>

        <BottomNavigation />
      </div>
    </ThemeProvider>
  );
}
