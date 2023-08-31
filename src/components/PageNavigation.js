import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {RiHomeOfficeFill} from "react-icons/ri";
const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/" className='me-4'>
        <RiHomeOfficeFill className="mx-2 fs-1"/>
        </NavLink> {title}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 1.5rem;
  }
`;

export default PageNavigation;