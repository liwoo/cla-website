import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Container, Layout } from '../../components/layouts'


export default function Post(props: { data: GatsbyTypes.SanityPostQueryQuery }) {
  return (
    <Layout>
      <Container>
        <GatsbyImage alt={props.data.sanityPost?.title ?? "Post Image"} className="w-full aspect-w-16 aspect-h-9 lg:aspect-h-7" image={props.data.sanityPost.mainImage.asset.gatsbyImageData} />
        <h1 className="mt-8 text-3xl font-bold">{props.data.sanityPost?.title}</h1>
        <h1>{props.data.sanityPost?.title}</h1>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query SanityPostQuery($id: String!) {
    sanityPost(id:  { eq: $id } ) {
      title
      mainImage {
			asset {
				url
				altText
				gatsbyImageData(
					aspectRatio: 1.78
					placeholder: DOMINANT_COLOR
          formats: AUTO
				)
			}
		}
    }
  }
`
