import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: lightgray;
`
const Logo = styled.div`
    font-size: 2rem;
    // font-weight: bold;
`

const NavbarWrapper = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    // background-color: gray;
`

const NavbarItem = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;
`

export { Wrapper, Logo, NavbarWrapper, NavbarItem }