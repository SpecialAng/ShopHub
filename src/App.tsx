import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { AboutUs, Contact, ShippingPolicy, ReturnsExchanges } from './pages/info';
import { PageType } from './types';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedCategory(undefined);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage('products');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onCategoryClick={handleCategoryClick} />;
      case 'products':
        return <Products categoryId={selectedCategory} />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      case 'shipping':
        return <ShippingPolicy />;
      case 'returns':
        return <ReturnsExchanges />;
      default:
        return <Home onCategoryClick={handleCategoryClick} />;
    }
  };

  return (
    <CartProvider>
      <MainLayout
        isCartOpen={isCartOpen}
        onCartClose={() => setIsCartOpen(false)}
        onCartOpen={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigation}
      >
        {renderPage()}
      </MainLayout>
    </CartProvider>
  );
};

export default App;