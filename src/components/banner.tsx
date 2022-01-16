import React from 'react';
import { Container } from './layouts';


export default function BannerComponent() {
  return (
    <Container className="mt-24">
      <div className="my-2 rounded card bg-alternate">
        <div className="py-4 text-center card-body text-secondary">
          <div>
            <p className="underline">There will be a fasting season for this new year starting on January 10</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
