import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import tw from 'tailwind-styled-components';
import { graphql } from 'gatsby';

const PageTitle = tw.div`
  text-black
  font-apple-system
  text-center
  text-xl
  font-bold
  w-3/4
  mx-auto
  my-12
`;

const Underline = tw.h1`
  flex
  justify-center
  my-4
`;
const Subtitle = tw.p`
  text-sm
  font-normal
`;

interface Props {
  title: string;
  subtitle?: string;
  isLarge?: boolean;
}

function PageTitleComponent(props: Props): JSX.Element {
  return (
    <PageTitle>
      <Trans><p className="text-4xl">{props.title}</p></Trans>
      <Underline>
        <div className="w-16 h-1 bg-primary" />
        <div className="w-16 h-1 bg-white" />
      </Underline>
      <Subtitle>
        <Trans>{props.subtitle}</Trans>
      </Subtitle>
    </PageTitle>
  );
}

export default PageTitleComponent;

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
