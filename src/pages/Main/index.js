import React, { Component } from 'react';
import moment from 'moment';
import Logo from '../../assets/images/git-compare-logo.svg';
import { Container, Form, Wrapper } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  async componentDidMount() {
    const repos = await localStorage.getItem('@git:repos');

    if (repos) {
      this.setState({
        repositories: JSON.parse(repos),
      });
    }
  }

  /**
   * Adiciona repositório no localStorage
   */
  refreshRepoStorage = () => {
    const { repositories } = this.state;
    const repos = JSON.stringify(repositories);
    localStorage.setItem('@git:repos', repos);
  };

  /**
   * Remove repositório do localStorage
   */
  handleRemoveRepository = async (id) => {
    const { repositories } = this.state;
    const newRepos = await repositories.filter(repo => repo.id !== id);

    this.setState({
      repositories: newRepos,
    });

    this.refreshRepoStorage();
  };

  /**
   * Atualiza repositório no localStorage
   */
  handleRefreshRepository = async (reponame) => {
    const { repositories } = this.state;

    this.setState({
      loading: true,
    });

    try {
      const { data } = await api.get(`/repos/${reponame}`);
      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
      });

      this.refreshRepoStorage();
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

  // Adicionar repositório
  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    try {
      const { repositoryInput, repositories } = this.state;
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        loading: false,
        repositoryInput: '',
        repositories: [...repositories, repository],
        repositoryError: false,
      });

      // Adicionar repositório em localStorage
      this.refreshRepoStorage();
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
    const {
      repositoryError, loading, repositoryInput, repositories,
    } = this.state;

    return (
      <Container>
        <img src={Logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository} withError={repositoryError}>
          <input
            type="text"
            placeholder="ex: facebook/react"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : <i className="fa fa-search" />}
          </button>
        </Form>

        <Wrapper>
          <CompareList
            repositories={repositories}
            onTrash={this.handleRemoveRepository}
            onRefresh={this.handleRefreshRepository}
          />
        </Wrapper>
      </Container>
    );
  }
}
