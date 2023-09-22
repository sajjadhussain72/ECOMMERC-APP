import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        {/* <img src="./images/logo.png" alt="my logo img" /> */}
        <span className="text-warning-emphasis fw-bold fs-1 ps-5 ms-5 fst-italic">HUNZA.COM</span>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
    background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
  top: 0;
  .logo {
    height: 5rem;
  }
`;
export default Header;