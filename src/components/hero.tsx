import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from './layouts/container';

function HeroComponent(): JSX.Element {
  const data = useStaticQuery<GatsbyTypes.AllSanitySermonQuery>(graphql`
   query AllSanitySermon { 
	allSanitySermon(sort: { fields: publishedAt, order: DESC }, limit : 1) {
		nodes {
			title
			youtubeLink
			excerpt
			scripture {
				bibleBook
				chapter
				verseStart
				verseEnd
			}
			mainImage {
				asset {
          url
					gatsbyImageData(aspectRatio: 1.78, placeholder: DOMINANT_COLOR, formats: AUTO)
				}
			}
		}
	}
}
  `);


  const sermon = data.allSanitySermon.nodes[0];
  return sermon && (
    <Container>
      <div className="my-8 mt-4 rounded-lg card image-full">
        <figure className="aspect-w-16 aspect-h-9 lg:aspect-h-7">
          <img
            src={sermon.mainImage?.asset?.url}
            alt="Pastor Preaching"
          />
        </figure>
        <div className="flex-col justify-between px-8 py-12 card-body">
          <div className="w-3/4 md:w-1/2 lg:w-1/4">
            <h2 className="card-title">{sermon.title}</h2>
            <p className="hidden md:block">{sermon.excerpt}</p>
            <cite className="text-sm">{sermon.scripture?.bibleBook} {sermon.scripture?.chapter}:{sermon.scripture?.verseStart}</cite>
          </div>
          <div className="flex card-actions">
            <a href={sermon.youtubeLink} target="_blank">
              <button className="text-black btn bg-primary-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 46.875 46.875"
                >
                  <path
                    data-name="Icon awesome-play-circle"
                    d="M23.437 0a23.438 23.438 0 1 0 23.438 23.437A23.433 23.433 0 0 0 23.437 0Zm10.934 25.705L17.737 35.25a2.272 2.272 0 0 1-3.374-1.985V13.608a2.274 2.274 0 0 1 3.374-1.984l16.634 10.113a2.275 2.275 0 0 1 0 3.968Z"
                    fill="#710071"
                  />
                </svg>
                Watch Sermon
              </button>
            </a>
            <button className="btn btn-secondary">More Sermons &#8594;</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroComponent;
