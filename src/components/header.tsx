import React from 'react';
import tw from 'tailwind-styled-components';
import { Container, Row } from './layouts';
import Logo from '../assets/logo.svg';

const Header = tw.header`
    bg-gray-100
    py-4
`;

export default function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <Container className="fixed top-0 z-30 w-full bg-gray-100">
        <Row>
          <Logo className="h-28 w-28" />
          <button className="btn btn-primary">Register Now</button>
        </Row>
      </Container>
    </Header>
  );
}
