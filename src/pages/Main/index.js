import React from 'react';
import Logo from '../../assets/images/git-compare-logo.png';
import { Container, Form } from './styles';

const Main = () => (
  <Container>
    <img src={Logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
