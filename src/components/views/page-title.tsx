import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import tw from 'tailwind-styled-components';
import { graphql } from 'gatsby';

const PageTitle = tw.h1`
  text-black
  font-apple-system
  text-center
  text-xl
  font-bold
  w-3/4
  ul:w-1/3
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
}

function PageTitleComponent(props: Props): JSX.Element {
  return (
    <PageTitle>
      <Trans>{props.title}</Trans>
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
