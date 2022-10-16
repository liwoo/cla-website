import React, { useState, createContext } from 'react';

// import { SEO } from '../seo';
import Header from '../header';
import Footer from '../footer';

export const LayoutContext = createContext({ windowWidth: 0 });

const Layout: React.FC = ({ children }) => {
  const [windowWidth] = useState(0);

  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      <Header />
      <div className="mt-32">
        {children}
      </div>
      <Footer />
    </LayoutContext.Provider>
  );
};

export { Layout };
