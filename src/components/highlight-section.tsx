import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './layouts/styles.module.css';
import React from 'react';
import { Container } from './layouts/container';
import PageTitleComponent from './views/page-title';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function HighlightSection(): JSX.Element {
  const data = useStaticQuery<GatsbyTypes.AllSanityCallToActionQuery>(graphql`
    query AllSanityCallToAction {
	allSanityCallToAction(sort: {fields: order}, limit: 6, filter: { isCell: { ne: true } }){
		nodes {
			title
			description
			order
			coverImage {
				asset {
					url
					altText
					gatsbyImageData(width:  500, height: 500, placeholder: DOMINANT_COLOR)
				}
			}
		}
	}
}
  `);

  const [welcome, ...rest] = data.allSanityCallToAction.nodes;
  const last = rest.pop()
  return (
    <>
      {welcome && (
        <PageTitleComponent
          title={welcome.title as string}
          subtitle={welcome.description as string}
        />
      )}
      <Container className="my-8 grid grid-cols-1 lg:grid-cols-2 ul:grid-cols-3 lg:gap-x-12 ul:grid-rows-3">
        {rest.map((highlight) => (
          <HighlightCard key={highlight.title} title={highlight.title} description={highlight.description} coverImage={highlight.coverImage} />
        ))}
        <div className="my-8 lg-my-2 lg:col-span-2 col-start-1">
          <h2 className="flex items-center my-2 font-bold gap-x-2 text-primary">
            {last?.title} &#8594;
          </h2>
          <p>{last?.description}</p>
        </div>
        <figure className="hidden w-full my-2 ul:block row-span-3 row-start-1 col-start-3">
          <img
            src={welcome?.coverImage?.asset?.url}
            className="object-cover h-full rounded-lg"
            alt={welcome?.title}
          />
        </figure>
      </Container>
    </>
  )
}


function HighlightCard({ title, description, coverImage }: Pick<GatsbyTypes.SanityCallToAction, 'title' | 'description' | 'coverImage'>): JSX.Element {
  return (
    <div className="my-2 bg-white cursor-pointer hover:shadow-md transition ease-in delay-150 card card-side card-bordered">
      <div className="flex-auto w-1/4">
        <figure className="m-4 aspect-w-4 aspect-h-4">
          <GatsbyImage className="rounded-lg" alt={coverImage?.asset?.altText ?? "Call to Action"} image={coverImage?.asset?.gatsbyImageData!} />
        </figure>
      </div>
      <div className="justify-center flex-auto w-3/4 py-2 mx-6 card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-end gap-x-2">
          <p className={styles.clamped}>{description}</p>
          &#8594;
        </div>
      </div>
    </div>
  );
}
