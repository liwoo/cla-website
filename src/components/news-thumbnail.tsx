import React from 'react';

import { formatDate } from '../utils/format-date';
import { GatsbyImage } from 'gatsby-plugin-image';

export function NewsThumbnail({
  title,
  description,
  mainImage,
  date,
}: Pick<
  GatsbyTypes.SanityNews,
  'title' | 'description' | 'mainImage' | 'date'
>): JSX.Element {
  title = title ? title : '';

  return (
    <div className="rounded-lg shadow-xl card image-full no-bg">
      {mainImage ? (
        <figure className="aspect-w-12 aspect-h-10">
          <GatsbyImage alt={title} image={mainImage.asset?.gatsbyImageData!} />
          <img src={mainImage.asset?.url as string} alt={title} />
        </figure>
      ) : (
        ''
      )}
      <div className="justify-end card-body">
        <h2 className="card-title">{title}</h2>
        <p className="-my-2 text-sm">{description}</p>
        <div className="card-actions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 28.102 30.891"
          >
            <g
              data-name="Icon feather-calendar"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            >
              <path
                data-name="Path 25"
                d="M4.289 4.289h19.524A2.789 2.789 0 0 1 26.6 7.078v19.524a2.789 2.789 0 0 1-2.787 2.787H4.289A2.789 2.789 0 0 1 1.5 26.602V7.078a2.789 2.789 0 0 1 2.789-2.789Z"
              />
              <path data-name="Path 26" d="M19.629 1.5v5.578" />
              <path data-name="Path 27" d="M8.473 1.5v5.578" />
              <path data-name="Path 28" d="M1.5 12.656h25.1" />
            </g>
          </svg>
          {formatDate(date!)}
        </div>
      </div>
    </div>
  );
}
