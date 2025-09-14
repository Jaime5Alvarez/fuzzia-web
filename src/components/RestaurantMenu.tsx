import { useState, useRef, useEffect } from 'react';
import { menuData } from '../data/menuData';
import MenuItem from './MenuItem';
import { ThemeProvider } from './ThemeProvider';
import { AppSidebar } from "./app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState(menuData[0]?.id || '');
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = menuData.map(category => ({
    id: category.id,
    name: category.name
  }));

  const handleCategoryClick = (categoryId: string) => {
    const categoryElement = document.getElementById(`category-${categoryId}`);
    
    if (categoryElement) {
      // Get header height dynamically for better positioning
      const headerElement = document.querySelector('header');
      const headerHeight = headerElement ? headerElement.offsetHeight : 120;
      const elementPosition = categoryElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight - 16; // Add padding from sticky header
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Auto-highlight category based on scroll position
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Get header height dynamically
      const headerElement = document.querySelector('header');
      const headerHeight = headerElement ? headerElement.offsetHeight : 120;
      
      const observerOptions = {
        root: null,
        rootMargin: `-${headerHeight + 16}px 0px -50% 0px`, // Account for sticky header height + padding
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
      forcedTheme="dark"
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            {/* Top bar with sidebar trigger and breadcrumb */}
            <div className="flex h-12 shrink-0 items-center gap-2 px-4 border-b border-border">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      La Fuzzia
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Menú</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            
            {/* Categories Navigation */}
            <div className="px-4 py-3">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
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
          
          <main className="flex-1 flex flex-col gap-4 p-4 pt-0" ref={containerRef}>
            {/* Menu Items */}
            <div className="space-y-6">
              {menuData.map((category) => (
                <section 
                  key={category.id} 
                  id={`category-${category.id}`} 
                  data-category={category.id}
                  className="space-y-3"
                  style={{ scrollMarginTop: '140px' }} // CSS fallback for scroll offset
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
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
