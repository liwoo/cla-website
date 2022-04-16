import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/layouts';
import HeroComponent from '../components/hero';
import { NewsSection } from '../components/views/news-section';
import HighlightSection from '../components/highlight-section';
import CellSection from '../components/cell-section';



const IndexPage: React.FC<PageProps> = (): JSX.Element => {
  return (
    <Layout>
      <HeroComponent />
      <HighlightSection />
      <CellSection />
      <NewsSection />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
