import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Trans } from 'react-i18next';
import { Container } from './layouts';
import { MiniContainer } from './layouts/mini-container';
import PageTitleComponent from './views/page-title';


export default function CellSection(): JSX.Element {

  const data = useStaticQuery<GatsbyTypes.AllSanityCellQuery>(graphql`
    query AllSanityCell {
	allSanityCallToAction(filter: { isCell: { eq: true } }) {
		nodes {
			title
      description
			coverImage {
				asset {
					url
					altText
					gatsbyImageData(width:  500, height: 500, placeholder: DOMINANT_COLOR)
				}
			}
		}
	}
	allSanityZoneSection {
		nodes {
			zoneSectionLeaders {
				phoneNumber
				email
			}
			zoneSectionName
		}
	}
}
  `);

  return (
    <Container className="p-2 bg-base-100">
      <PageTitleComponent title="Find Cell" />
      <MiniContainer className="mb-12 grid grid-cols-2 lg:grid-cols-3 gap-x-20">
        <img
          src={data.allSanityCallToAction.nodes[0].coverImage?.asset.url}
          alt="Find Cell Near You"
          className="hidden object-cover rounded-lg row-span-3 lg:block"
        />
        <p className="col-span-2">{data.allSanityCallToAction.nodes[0].description}</p>
        <div className="flex flex-col items-center my-4 mb-1 col-span-2 md:gap-x-4 md:flex-row form-control">
          <select className="w-full md:w-auto select select-bordered select-primary">
            <option>Choose Your Nearest Cell</option>
            {data.allSanityZoneSection.nodes.map((zoneSection: GatsbyTypes.SanityZoneSection) => (
              <option key={zoneSection.zoneSectionName}>{zoneSection.zoneSectionName}</option>
            ))}
          </select>
          <label className="flex-1 my-2 input-group">
            <span>Email</span>
            <input
              type="text"
              placeholder="info@site.com"
              className="w-full input input-bordered"
            />
          </label>
        </div>
        <button className="btn col-span-2 md:col-span-1">
          <Trans>Join Cell</Trans>
        </button>
      </MiniContainer>
    </Container>
  )
}
