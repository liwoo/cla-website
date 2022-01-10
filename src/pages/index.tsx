import * as React from 'react';
import { graphql } from 'gatsby';

import { Container, Layout } from '../components/layouts';
import HeroComponent from '../components/hero';
import PageTitleComponent from '../components/views/page-title';

function IndexPage() {
  return (
    <Layout>
      <HeroComponent />
      <PageTitleComponent
        title="Welcome to CLA"
        subtitle="Welcome to CLA Subtitle"
      />
      <Container className="my-8">
        <HighlightCard />
      </Container>
    </Layout>
  );
}

function HighlightCard() {
  return (
    <div className="bg-white card card-side card-bordered">
      <div className="flex-auto w-1/4">
        <figure className="m-4 aspect-w-4 aspect-h-4">
          <img src="https://picsum.photos/id/1005/400/250" className="rounded-lg" />
        </figure>
      </div>
      <div className="justify-center flex-auto w-3/4 py-2 card-body">
        <h2 className="card-title">Become a Member</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.</p>
      </div>
    </div>
  )
}
export default IndexPage;

export const query = graphql`
      query ($language: String!) {
        locales: allLocale(filter: {language: {eq: $language } }) {
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
