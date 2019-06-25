import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  position: relative;

  &.loading {
    &:before {
      display: block;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    display: none;
  }

  &:hover {
    button {
      opacity: 1;
      visibility: visible;
    }
  }

  button {
    &.remove-repo {
      right: 10px;

      i {
        color: #ff837b;
      }
    }

    &.refresh-repo {
      left: 10px;

      i {
        color: #00bfaa;
      }
    }

    position: absolute;
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    top: 10px;
    visibility: hidden;
    opacity: 0;
    border-radius: 50%;
    transition: all 0.25s ease-out;
    cursor: pointer;

    &:hover {
      background-color: #f1eded;
    }

    i {
      font-size: 18px;
    }
  }

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
      vertical-align: middle;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: 600;
        font-size: 12px;
        color: #999;
      }

      &:nth-child(odd) {
        background-color: #f5f5f5;
      }
    }
  }
`;
