import React from "react";
import styled from "styled-components";
import RMDLogo from "../images/tmd_logo.svg";
import TMDBLogo from "../images/images.png";

//1. Learn How to create styled component.
//2. Learn how to hendle props in styled component.
//3. create a global type styled components.

const StyledHeader = styled.div`
  background: #000000;
  padding: 0 20px;
  box-sizing: border-box;
  .header-content {
    max-width: 1200px;
    min-height: 120px;
    padding:20px,0;
    margin: 0 auto,
    box-sizing:border-box;
    @media screen and (max-width:500px){
        min-height:0px;
    }
  }
`;

const StyledRMDLogo = styled.img`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  min-height: 50px;
  float: right;
  height: 20px;
  @media screen and(max-width:500px) {
    width: 150px;
    margin-top: 5px;
  }
`;
const StyledTMDLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
  min-height: 50px;

  height: 20px;
  @media screen and(max-width:500px) {
    width: 150px;
    margin-top: 5px;
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <StyledTMDLogo src={TMDBLogo} alt="tmd-logo" />
      <StyledRMDLogo src={RMDLogo} alt="rmd-logo" />
    </div>
  </StyledHeader>
);

export default Header;
