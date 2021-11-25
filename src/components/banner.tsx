import React from 'react';
import tw from 'tailwind-styled-components';
import { Container, Row } from './layouts';
import Logo from '../assets/logo.svg';
import { Button } from './views';

const Banner = tw.header`
    py-4
    my-6
`;

export default function BannerComponent() {
  return (
    <Banner>
      <Container>
        <Row>
          <Logo className="w-32 h-32" />
          <Button>Register for Church</Button>
        </Row>
      </Container>
    </Banner>
  );
}
