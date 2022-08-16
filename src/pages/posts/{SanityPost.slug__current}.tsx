/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import PortableText from 'react-portable-text';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { ArticleContainer, Layout } from '../../components/layouts';
import PageTitleComponent from '../../components/views/page-title';

export default function Post(props: {
  data: GatsbyTypes.SanityPostQuery;
}): JSX.Element {
  return (
    <Layout>
      <ArticleContainer>
        <PageTitleComponent
          title={props.data.sanityPost?.title ?? "Some Title"}
        />
        <div className="flex items-center justify-center py-3 my-2 mb-4 -mt-8 gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="relative avatar">
              <div className="w-12 h-12 border rounded-full px-auto">
                <img
                  src={props.data.sanityPost?.author?.image?.asset?.url}
                  alt=""
                />
              </div>
            </div>
            <p>
              by <strong>{props.data.sanityPost?.author?.name}</strong>
            </p>
          </div>
          <p className="opacity-40">{humanReadableDate(props.data.sanityPost?.publishedAt!)}</p>
        </div>
        <GatsbyImage
          objectPosition="center top"
          alt={props.data.sanityPost?.title ?? 'Post Image'}
          className="w-full rounded aspect-w-16 aspect-h-9 lg:aspect-h-10"
          image={props.data.sanityPost!.mainImage!.asset!.gatsbyImageData!}
        />
        <PortableText
          projectId={process.env.GATSBY_SANITY_PROJECT_ID}
          dataset={process.env.GATSBY_SANITY_DATASET}
          content={props.data.sanityPost?._rawBody!}
          imageOptions={{ w: 1600, h: 1024, fit: 'min' }}
          serializers={{
            h1: ({ children }) => <h1 className="my-2 text-2xl">{children}</h1>,
            h2: ({ children }) => <h2 className="my-2 text-2xl font-bold">{children}</h2>,
            h3: ({ children }) => <h3 className="my-2 text-2xl font-semibold">{children}</h3>,
            h4: ({ children }) => <h3 className="text-2xl">{children}</h3>,
            ul: ({ children }) => <ul className="my-4">{children}</ul>,
            li: ({ children }) => <li className="text-lg">&#8594; {children}</li>,
            normal: (props: unknown) => (
              <p className="my-6 text-xl leading-8" {...props} />
            ),
            blockquote: (props: unknown) => (
              <blockquote className="py-4 mx-12 my-8 text-2xl font-light border-t border-b border-gray-200" {...props} />
            ),
          }}
        />
      </ArticleContainer>
    </Layout>
  );
}

export function humanReadableDate(date: string): string {
  const d = new Date(date);
  return `${d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;
}

export const query = graphql`
  query SanityPostQuery($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      publishedAt
      author {
        name
        image {
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
      _rawBody
      mainImage {
        asset {
          url
          altText
          gatsbyImageData(
            width: 1200
            height: 1000
            placeholder: DOMINANT_COLOR
            formats: AUTO
          )
        }
      }
    }
  }
`;
