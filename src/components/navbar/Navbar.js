import { Wrapper, Logo, NavbarWrapper, NavbarItem } from "./NavbarStyle";

const Navbar = () => {
    return (    
        <Wrapper>
            <Logo>SiteForYou</Logo>
            <NavbarWrapper>
                <NavbarItem href="#">HOME</NavbarItem>
            </NavbarWrapper>
        </Wrapper>
    )
}

export default Navbar