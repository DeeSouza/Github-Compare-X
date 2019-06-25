import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './style';

const CompareList = ({ repositories, onTrash, onRefresh }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <button className="remove-repo" type="button" onClick={() => onTrash(repository.id)}>
          <i className="fa fa-trash" />
        </button>

        <button
          className="refresh-repo"
          type="button"
          onClick={() => onRefresh(repository.full_name)}
        >
          <i className="fa fa-refresh" />
        </button>

        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.owner.login}</strong>
          <small>{repository.name}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
  onTrash: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default CompareList;
