import React from 'react';
import styled from "styled-components";


function HeaderComp(){
    return(
        <Header>
            <H1>My Todo List 2023</H1>
            <H2>React-Redux</H2>
        </Header>
    )
}

function FooterComp() {
    return (
        <div>
            <Footer>2023 TodoList - React Redux</Footer>
        </div>
    );
}

function Layout({ children }) {
    return (
        <div>
            <HeaderComp />
                <div>
                    {children}
                </div>
            <FooterComp />
        </div>
    );
}


//styled components 영역

const Header = styled.header`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e1e1e1;
  max-width: 1150px;
  min-width: 750px;
  margin: 10px auto 40px;
`
const H1 = styled.h1`
  display: block;
`
const H2 = styled.h2`
  display: block;
`

const Footer = styled.footer`
    text-align: center;
    padding: 80px 0;
`

export default Layout;