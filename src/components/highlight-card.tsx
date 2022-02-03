import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import * as styles from './layouts/styles.module.css';

export function HighlightCard({
  title,
  description,
  mainImage,
}: Pick<
  GatsbyTypes.SanityHighlight,
  'title' | 'description' | 'mainImage'
>): JSX.Element {
  return (
    <div className="my-2 bg-white cursor-pointer hover:shadow-md transition ease-in delay-150 card card-side card-bordered">
      <div className="flex-auto w-1/4">
        {mainImage?.asset?.gatsbyImageData ? (
          <figure className="m-4 aspect-w-4 aspect-h-4">
            <GatsbyImage
              image={mainImage.asset?.gatsbyImageData}
              alt={title as string}
            />
          </figure>
        ) : (
          ''
        )}
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
