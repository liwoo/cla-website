import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { NewsThumbnail } from '../news-thumbnail';
import { AllSanityNewsQuery, SanityNews } from '../../generated/gatsby-graphql';

export function News(): JSX.Element {
  return (
    <StaticQuery
      query={graphql`
        query AllSanityNews {
          allSanityNews(limit: 6) {
            nodes {
              title
              description
              mainImage {
                asset {
                  url
                }
              }
              date
            }
          }
        }
      `}
      render={({ allSanityNews: { nodes } }: AllSanityNewsQuery) => (
        <div className="px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xxl:gap-32">
          {nodes.map((news: SanityNews, index: number) => (
            <NewsThumbnail
              title={news.title}
              description={news.description}
              mainImage={news.mainImage}
              date={news.date}
              key={index}
            />
          ))}
        </div>
      )}
    />
  );
}
