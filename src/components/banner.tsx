import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from './layouts';

export default function BannerComponent(): JSX.Element {
  const data = useStaticQuery<GatsbyTypes.AllSanityNoticeQuery>(graphql`
    query AllSanityNotice {
	    allSanityNotices(sort: {fields: _createdAt, order: DESC}, limit: 1) {
		    nodes {
			    title
          link
			    _createdAt
			    description
		    } 
      }
    }
  `)

  const BANNER_MODAL_ID = 'banner-modal';
  return <>
    {
      data.allSanityNotices.nodes.length > 0 ? (
        <Container className="mt-24">
          <Link to={data.allSanityNotices.nodes[0].link as string}>
            <label htmlFor={BANNER_MODAL_ID} className="my-2 rounded cursor-pointer card bg-alternate">
              <div className="py-4 text-center card-body text-secondary">
                <div>
                  <p className="underline">{data.allSanityNotices.nodes[0].title}</p>
                </div>
              </div>
            </label>
          </Link>
        </Container>)
        : null
    }
  </>
}
