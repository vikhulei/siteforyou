import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    font-size: 2rem;
    // font-weight: bold;
`

const NavbarWrapper = styled.div`
    width: 500px;
`

const NavbarItem = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;
`

export { Wrapper, Logo, NavbarWrapper, NavbarItem }