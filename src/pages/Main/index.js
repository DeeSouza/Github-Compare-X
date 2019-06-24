import React, { Component } from 'react';
import moment from 'moment';
import Logo from '../../assets/images/git-compare-logo.png';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        loading: false,
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return (
      <Container>
        <img src={Logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository} withError={this.state.repositoryError}>
          <input
            type="text"
            placeholder="user/repository"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
