import React from "react";
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
class Header extends React.Component
{
    constructor(props) {
        super(props);
        var currentPage=this.props.currentPage;
        this.state = {
            currentPage: currentPage,
        };
    }
    render(){
        var color=["white","white","white","white","white","white"];
        var linkto=["Home","About","Statistics","WebServer","Docker","Login"];
        color[linkto.indexOf(this.state.currentPage)]="yellow";

        return ( 
            <div>
        <div>
            <AppBar position="static" style={{backgroundColor:"red"}}>
                <Toolbar>
                <Link to="/" style={{textDecoration:"None",color:color[0]}}><Button color="inherit">Home</Button></Link>
                <Link to="/About" style={{textDecoration:"None",color:color[1]}}><Button color="inherit">About</Button></Link>

            <Link to="/Dashboard" style={{textDecoration:"None",color:color[2]}}><Button color="inherit">Statistics</Button></Link>
            <Link to="/WebServer" style={{textDecoration:"None",color:color[3],paddingRight:"-19px"}}><Button color="inherit">WebServer</Button></Link>
            <Link to="/Docker" style={{textDecoration:"None",color:color[4],paddingRight:"-19px"}}><Button color="inherit">Docker</Button></Link>
            <Link to="/Login" style={{textDecoration:"None",color:color[5],paddingRight:"-19px"}}><Button color="inherit">Login</Button></Link>

                </Toolbar>
            </AppBar>
            </div>
            </div>
    );}
}
export default Header;