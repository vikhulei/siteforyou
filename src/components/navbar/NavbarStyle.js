import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 40px 0 40px;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 100px;
`

const NavbarWrapper = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
`

const NavbarItem = styled.a`
    text-decoration: none;
    color: black;
    font-weight: bold;
`

export { Wrapper, Logo, NavbarWrapper, NavbarItem }