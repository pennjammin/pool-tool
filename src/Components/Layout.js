import React, { Component } from "react";
import styled from "styled-components";


const ContainerDiv = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: blue;
`;

export default class Layout extends Component {
  render() {
    return (
      <ContainerDiv>
          POOL
      </ContainerDiv>
    );
  }
}
