import { Wrapper, Logo, NavbarWrapper, NavbarItem } from "./NavbarStyle";

const Navbar = () => {
    return (    
        <Wrapper>
            <Logo>SiteForYou</Logo>
            <NavbarWrapper>
                <NavbarItem href="#">HOME</NavbarItem>
                <NavbarItem href="#">SERVICES</NavbarItem>
                <NavbarItem href="#">DIY</NavbarItem>
                <NavbarItem href="#">CONTACT</NavbarItem>
            </NavbarWrapper>
        </Wrapper>
    )
}

export default Navbar