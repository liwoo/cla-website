import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container } from '../layouts';
import { NewsThumbnail } from '../news-thumbnail';
import PageTitleComponent from '../views/page-title';

export function NewsSection(): JSX.Element {
  const data = useStaticQuery<GatsbyTypes.AllSanityPostQuery>(graphql`
    query AllSanityPost {
        allSanityPost(filter: {postType: {eq: "Devotional"}}, sort: {fields: publishedAt, order: DESC}, limit: 3) {
        nodes {
          title
          publishedAt
          mainImage {
            asset {
              url
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

  return (
    <Container>
      <PageTitleComponent title="Latest Posts and Devotionals" />
      <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xxl:gap-32">
        {data.allSanityPost.nodes.map(
          (news: GatsbyTypes.SanityPost, index: number) => (
            <NewsThumbnail
              title={news.title}
              mainImage={news.mainImage}
              date={news.publishedAt}
              key={index}
            />
          )
        )}
      </div>
    </Container>
  );
}
