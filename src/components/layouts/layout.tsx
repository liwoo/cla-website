import React, { useState, createContext } from 'react';

// import { SEO } from '../seo';
import Header from '../header';
import Banner from '../banner';
import Footer from '../footer';

export const LayoutContext = createContext({ windowWidth: 0 });

const Layout: React.FC = ({ children }) => {
  const [windowWidth] = useState(0);

  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      <Header />
      <Banner />
      {children}
      <Footer />
    </LayoutContext.Provider>
  );
};

export { Layout };
