/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import PortableText from 'react-portable-text';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { ArticleContainer, Layout } from '../../components/layouts';

export default function Post(props: {
  data: GatsbyTypes.SanityPostQueryQuery;
}): JSX.Element {
  return (
    <Layout>
      <ArticleContainer>
        <GatsbyImage
          objectPosition="center top"
          alt={props.data.sanityPost?.title ?? 'Post Image'}
          className="w-full aspect-w-16 aspect-h-9 lg:aspect-h-10"
          image={props.data.sanityPost!.mainImage!.asset!.gatsbyImageData!}
        />
        <h1 className="mt-8 text-3xl font-bold">
          {props.data.sanityPost?.title}
        </h1>
        <div className="flex items-center justify-between py-3 my-4 mb-8 border-t border-b border-gray-300">
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
          <p>{humanReadableDate(props.data.sanityPost?.publishedAt!)}</p>
        </div>
        <PortableText
          projectId={process.env.GATSBY_SANITY_PROJECT_ID}
          dataset={process.env.GATSBY_SANITY_DATASET}
          content={props.data.sanityPost?._rawBody!}
          imageOptions={{ w: 1600, h: 1024, fit: 'min' }}
          serializers={{
            normal: (props: unknown) => (
              <p className="my-8 text-xl leading-8" {...props} />
            ),
            blockquote: (props: unknown) => (
              <blockquote className="my-8 text-xl" {...props} />
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
