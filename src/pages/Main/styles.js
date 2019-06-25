import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  img {
    width: 100px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  width: 90%;
  overflow: auto;
  margin: auto;
  margin-top: 50px;
  padding-bottom: 10px;
  display: flex;

  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background-color: #fff;
    font-size: 18px;
    color: #20252d;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border: none;
    border-left: ${props => (props.withError ? '10px solid #FF3F3F' : '10px solid #00BFAA')};
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 0px;
    background-color: #20252d;
    color: #fff;
    border: 0;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 20px;
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.25s ease-out;

    &:hover {
      background-color: #363d48;
    }
  }
`;

export default { Container, Form, Wrapper };
