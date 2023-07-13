import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="https://final-project-seven-rho.vercel.app/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="https://books-with-hooks-app.vercel.app/" activeStyle>
                        Books-with-hooks 
                    </NavLink>
                    <NavLink to="https://weather-app-lake-iota.vercel.app/" activeStyle>
                        Weather
                    </NavLink>
                    <NavLink to="https://form-validator-app.vercel.app/" activeStyle>
                        Form validator 
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;