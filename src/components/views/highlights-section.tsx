import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { HighlightCard } from '../highlight-card';

import { Container } from '../layouts/container';

export function HighlightsSection(): JSX.Element {
  const data = useStaticQuery<GatsbyTypes.AllHighlightsQuery>(graphql`
    query AllHighlights {
      allSanityHighlight(limit: 6, sort: { fields: _createdAt, order: DESC }) {
        nodes {
          title
          description
          mainImage {
            asset {
              gatsbyImageData(
                width: 200
                height: 200
                placeholder: DOMINANT_COLOR
                formats: AUTO
              )
            }
          }
        }
      }
    }
  `);

  const [highlightCta, ...otherHighlight] = data.allSanityHighlight.nodes || [];

  return (
    <Container className="my-8 grid grid-cols-1 lg:grid-cols-2 ul:grid-cols-3 lg:gap-x-12 ul:grid-rows-3">
      {otherHighlight.map((highlight: GatsbyTypes.SanityHighlight, index) => (
        <HighlightCard
          key={index}
          title={highlight.title}
          description={highlight.description}
          mainImage={highlight.mainImage}
        />
      ))}
      {highlightCta ? (
        <div className="my-8 lg-my-2 lg:col-span-2 col-start-1">
          <h2 className="flex items-center my-2 font-bold gap-x-2 text-primary">
            {highlightCta.title} &#8594;
          </h2>
          <p>{highlightCta.description}</p>
        </div>
      ) : (
        ''
      )}
      <figure className="hidden w-full my-2 ul:block row-span-3 row-start-1 col-start-3">
        <img
          src="https://picsum.photos/id/1005/400/250"
          className="object-cover h-full rounded-lg"
          alt="Church Building"
        />
      </figure>
    </Container>
  );
}
