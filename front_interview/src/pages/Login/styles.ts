import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormLogin = styled.div`
  width: 100vw;
  height: 800px;
  background-color: #121214;

  .divContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    margin-top: 30px;
  }
  h2 {
    color: white;
    font-size: 16px;
    text-align: center;
    margin: 30px 0 10px 0;
  }

  form {
    width: 95%;
    height: 420px;
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  label {
    color: #f8f9fa;
    font-size: 10px;
    margin: 30px 0 8px 0;
  }
  input {
    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 12px;
    color: #868e96;
    font-family: "Inter";
  }
  input:hover {
    border: 2px solid white;
  }
  .buttonSubmit {
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 14px;
    background-color: #ff577f;
    color: white;
    margin: 20px 0 30px 0;
  }

  h4 {
    color: #868e96;
    font-size: 12px;
    text-align: center;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .divContainer {
      width: 400px;
    }
    form {
      height: 470px;
      padding: 0 15px;
    }
    input {
      height: 48px;
    }
    .buttonRegister {
      height: 48px;
    }
    .buttonSubmit {
      height: 48px;
    }
    p {
      padding-top: 8px;
      color: #ff577f;
      font-size: 10px;
    }
  }
`;

export const LinkRegister = styled(Link)`
  border-radius: 3.19812px;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  background-color: #868e96;
  margin-top: 15px;
  color: white;
  text-align: center;
  padding-top: 14px;
  font-size: 14px;
`;
