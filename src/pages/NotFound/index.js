import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function NotFound() {
  return (
    <Container>
      <header>
        <h1>404</h1>
        <p>
          <strong>Opa ! A pagina solicitada não existe</strong>
        </p>
        <Link to="/"> Voltar </Link>
      </header>
    </Container>
  );
}
