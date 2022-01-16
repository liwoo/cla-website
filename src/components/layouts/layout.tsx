import React, { useState, createContext } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

// import { SEO } from '../seo';
import Header from '../header';
import Banner from '../banner';
import { LangList } from '../languages';
import Footer from '../footer';

export const LayoutContext = createContext({ windowWidth: 0 });

const Layout: React.FC = ({ children }) => {
  const [windowWidth] = useState(0);
  const { languages, changeLanguage } = useI18next();

  return (
    <LayoutContext.Provider value={{ windowWidth }}>
      <Header />
      <Banner />
      {children}
      <Footer />
      <p>Language Example: click any language to select</p>
      <LangList
        languages={languages}
        changeLanguage={changeLanguage}
      ></LangList>
    </LayoutContext.Provider>
  );
};

export { Layout };
