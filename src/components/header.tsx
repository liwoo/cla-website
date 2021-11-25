import React from 'react';
import tw from 'tailwind-styled-components';
import { Container, Row } from './layouts';
import Logo from '../assets/logo.svg';
import { Button } from './views';

const Header = tw.header`
    bg-gray-100
    py-4
`;

export default function HeaderComponent() {
  return (
    <Header>
      <Container>
        <Row>
          <Logo className="w-32 h-32" />
          <Button>Register for Church</Button>
        </Row>
      </Container>
    </Header>
  );
}
