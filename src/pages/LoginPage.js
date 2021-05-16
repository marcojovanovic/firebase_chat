import React from 'react';

import { ChatContext } from '../context';
import { useHistory } from 'react-router-dom'
import { authDb, chatDatabase } from '../firebase/config';
import styled from 'styled-components'

function LoginPage() {
  const {email, password, setEmail, setPassword, setNameUser} = React.useContext(ChatContext);


  const history = useHistory()


  const handleSignIn = (e) => {

    e.preventDefault() 

    authDb
    .signInWithEmailAndPassword(email,password)
    .then(res=> {

        const name = res.user.displayName 

       

        history.push('/')

    })
    .catch(err=> console.log(err))



  };


  return (
    <>

         <LoginTitle>Prijava</LoginTitle>
      <form onSubmit={handleSignIn}>
    
        <Wrapper>
         

          <Label htmlFor="email">
            <b>Email</b>
          </Label>
          <FormField>
           
            <input
              type="email"
              name="email"
              className="form_input"
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

          <Button type='submit'>
            Login
          </Button>
        </Wrapper>
      </form>
    </>
  );
}


const Wrapper=styled.div`

   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%, -50%);
   background:white;
   padding:2vw;



`

const Button = styled.button`

  border:none;
  padding:0.6rem 1.2rem;
  outline:none;
  font-size:2rem;
  margin-top:2rem;



`

const FormField = styled.div`

   width:80%;



`

const Label = styled.h3`

  color:#333;
  font-size:2rem;


`

const LoginTitle=styled.h1`

 text-align:center;
 margin:2rem 0;


`


export default LoginPage;
