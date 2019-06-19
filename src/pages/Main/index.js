import React, { Component } from 'react';
import Logo from '../../assets/images/git-compare-logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  render() {
    return (
      <Container>
        <img src={Logo} alt="Github Compare" />

        <Form>
          <input type="text" placeholder="user/repository" value={this.state.repositoryInput} />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
