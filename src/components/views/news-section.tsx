import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Container } from '../layouts';
import { NewsThumbnail } from '../news-thumbnail';
import PageTitleComponent from '../views/page-title';

export function NewsSection(): JSX.Element {
  const data = useStaticQuery<GatsbyTypes.AllNewsQuery>(graphql`
    query AllNews {
      allSanityNews(limit: 6, sort: { fields: _createdAt, order: DESC }) {
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
          date
        }
      }
    }
  `);

  return (
    <Container>
      <PageTitleComponent title="News and Updates" />
      <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xxl:gap-32">
        {data.allSanityNews.nodes.map(
          (news: GatsbyTypes.SanityNews, index: number) => (
            <NewsThumbnail
              title={news.title}
              description={news.description}
              mainImage={news.mainImage}
              date={news.date}
              key={index}
            />
          )
        )}
      </div>
    </Container>
  );
}
