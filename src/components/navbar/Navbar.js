import { Wrapper, Logo, NavbarWrapper, NavbarItem } from "./NavbarStyle";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (    
        <Wrapper>
            <Logo src={logo}/>
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