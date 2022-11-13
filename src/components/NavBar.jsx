import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "orange"}}><Logo>RalfantasticStore</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/1' style={{textDecoration: "none", color: "orange"}}><MenuItem>Emotions</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "orange"}}><MenuItem>Skills</MenuItem></Link>
                    <Link to='/category/3' style={{textDecoration: "none", color: "orange"}}><MenuItem>Tripps</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;