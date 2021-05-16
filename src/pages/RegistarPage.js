import React from 'react';

import { ChatContext } from '../context';

import styled from 'styled-components';

function LoginPage() {
  const {
    email,
    password,
    handleRegister,
    setEmail,
    setPassword,
    firstName,
    lastName,
    setFirstName,
    setLastName
  } = React.useContext(ChatContext);

  return (
    <>
      <LoginTitle>Prijava</LoginTitle>
      <form onSubmit={handleRegister}>
        <Wrapper>
          <Label htmlFor="email">
            <b>FirstName</b>
          </Label>
          <FormField>
            <input
              type="text"
              name="firstName"
              className="form_input"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="off"
            />
          </FormField>

          <Label htmlFor="psw">
            <b>LastName</b>
          </Label>

          <FormField>
            <input
              type="text"
              name="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="off"
            />
          </FormField>

          <Label htmlFor="psw">
            <b>Email</b>
          </Label>

          <FormField>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </FormField>

          <Label htmlFor="psw">
            <b>Password</b>
          </Label>

          <FormField>
            <input
              type="password"
              name="psw"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </FormField>

          <Button type="submit">Sign Up</Button>
        </Wrapper>
      </form>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2vw;
`;

const Button = styled.button`
  border: none;
  padding: 0.6rem 1.2rem;
  outline: none;
  font-size: 2rem;
  margin-top: 2rem;
`;

const FormField = styled.div`
  width: 80%;
`;

const Label = styled.h3`
  color: #333;
  font-size: 2rem;
`;

const LoginTitle = styled.h1`
  text-align: center;
  margin: 2rem 0;
`;

export default LoginPage;
