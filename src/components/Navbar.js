import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { ChatContext } from '../context';
import styled from 'styled-components';

function Navbar() {

  const {nameUser, handleLogOut} = React.useContext(ChatContext);



  return (
    <NavbarContainer>
      <NavbarLogo>Web Messenger</NavbarLogo>
      <NavbarUl>
        <NavbarLi><NavLink to={'/login'}>Login</NavLink></NavbarLi>
        <NavbarLi><NavLink to={'/signup'}>Sign up</NavLink></NavbarLi>
        <NavbarLi><Link onClick={handleLogOut} to={'/register'}>Logout</Link></NavbarLi>
        Hi  {nameUser.firstName} {nameUser.lastName}
      </NavbarUl>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  width: 100%;
  padding:calc(1.2vh + 1.5vw);
  background: #333;
  color: white;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-bottom:3rem;
  
`;

const NavbarLogo = styled.h1`
  font-size: 1.5rem;
`;

const NavbarUl=styled.ul`

 display:flex;
 
 

`

const NavbarLi = styled.li`
  margin-left:2rem;
  display:flex;
  align-items:center;
  height:100%;

`

export default Navbar;
