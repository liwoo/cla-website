import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from './layouts';

export default function BannerComponent(): JSX.Element {
  const data: { allSanityNotices: GatsbyTypes.SanityNoticesConnection } = useStaticQuery(graphql`
  query AllSanityNotice {
	allSanityNotices(sort: {fields: _createdAt, order: DESC}, limit: 1) {
		nodes {
			title
			_createdAt
			description
		}
	}
 } 
  `)

  console.log(data)

  return (
    <Container className="mt-24">
      <div className="my-2 rounded card bg-alternate">
        <div className="py-4 text-center card-body text-secondary">
          <div>
            {data.allSanityNotices.nodes.length > 0 &&
              <p className="underline">{data.allSanityNotices.nodes[0].title}</p>
            }
          </div>
        </div>
      </div>
    </Container>
  );
}
