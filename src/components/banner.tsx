import React from 'react';
import { Container } from './layouts';


export default function BannerComponent() {
  return (
    <Container>
      <div className="card rounded my-8 bg-alternate">
        <div className="card-body text-center text-secondary py-4">
          <div>
            <p className="underline">There will be a fasting season for this new year starting on January 10</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
