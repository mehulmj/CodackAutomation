import React from "react";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {useCookies} from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';
import {BrowserRouter as Router, Switch,Redirect, Route, Link} from "react-router-dom";

class Header extends React.Component
{
    constructor(props) {
        super(props);
        var cookiesstr = document.cookie;
        var loginEmail = "";
        var loginName = "";
        var isLogout=0;
        if (cookiesstr.length > 0) {
            var cookies = cookiesstr.split(";")
            console.log(cookiesstr) 
            loginName = cookies[1].split("=")[1]
            loginEmail = cookies[0].split("=")[1]
        }
        console.log(loginName)
        var currentPage = this.props.currentPage;
        this.state = {
            currentPage: currentPage,
            loginEmail: loginEmail,
            loginName: loginName,
            auth:true,
            anchor:null,
            isLogout:isLogout,
            portNumber: "80"
        };
        this.getHeader = this
            .getHeader
            .bind(this);
        this.handleLogout=this.handleLogout.bind(this);
        this.checkLogout=this.checkLogout.bind(this);

    }
    handleLogout()
    {
        var allCookies = document.cookie.split(';');
        for (var i = 0; i < allCookies.length; i++)
            document.cookie = allCookies[i] + "=;expires="
            + new Date(0).toUTCString();
        this.setState({isLogout:1});
    }
    checkLogout()
    {
        if(this.state.isLogout==1 && this.state.loginEmail!=="")
       {
           this.setState({isLogout:0})
           if(window.location.pathname=="/")
           {
               window.location.reload();
           }
           else{
            return (
                <Redirect
                            to= "/"
                />
            );}
        }
        return (<div/>);
    }
    getHeader() {
        var color = [
            "white",
            "white",
            "white",
            "white",
            "white",
            "white",
            "white"
        ];
        var linkto = [
            "Home",
            "About",
            "Statistics",
            "WebServer",
            "Docker",
            "Login",
            "Operation"
        ];
        color[linkto.indexOf(this.state.currentPage)] = "yellow";

        if (this.state.loginEmail == "") {
            return (
                <Toolbar>
                    <Link
                        to="/"
                        style={{
                        textDecoration: "None",
                        color: color[0]
                    }}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link
                        to="/About"
                        style={{
                        textDecoration: "None",
                        color: color[1]
                    }}>
                        <Button color="inherit">About</Button>
                    </Link>

                    <Link
                        to="/Login"
                        style={{
                        textDecoration: "None",
                        color: color[5],
                        paddingRight: "-19px"
                    }}>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Toolbar>

            );
        } else {
            const open = Boolean(this.state.anchor);
              const handleMenu = (event) => {
                this.setState({anchor:event.currentTarget});
              };
            
              const handleClose = () => {
                this.setState({anchor:null});
              };
            return (
                <Toolbar>

                    <Link
                        to="/"
                        style={{
                        textDecoration: "None",
                        color: color[0]
                    }}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link
                        to={{
                        pathname: "/About"
                    }}
                        style={{
                        textDecoration: "None",
                        color: color[1]
                    }}>
                        <Button color="inherit">About</Button>
                    </Link>

                    <Link
                        to={{
                        pathname: "/Dashboard"
                    }}
                        style={{
                        textDecoration: "None",
                        color: color[2]
                    }}>
                        <Button color="inherit">Statistics</Button>
                    </Link>
                    <Link
                        to={{
                        pathname: "/WebServer"
                    }}
                        style={{
                        textDecoration: "None",
                        color: color[3],
                        paddingRight: "-19px"
                    }}>
                        <Button color="inherit">WebServer</Button>
                    </Link>
                    <Link
                        to={{
                        pathname: "/Docker"
                    }}
                        style={{
                        textDecoration: "None",
                        color: color[4],
                        paddingRight: "-19px"
                    }}>
                        <Button color="inherit">Docker</Button>
                    </Link>
                    <Link
                        to={{
                        pathname: "/Operations"
                    }}
                        style={{
                        textDecoration: "None",
                        color: color[6],
                        paddingRight: "-19px"
                    }}>
                        <Button color="inherit">Operation</Button>
                    </Link>
                    <div style={{marginLeft:"60vw"}}>
                <IconButton
                aria-label="User"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
            <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchor}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                <Paper style={{backgroundColor:"darkgrey",marginTop:"-10px",height:"5vh",textAlign:"center",width:"100%",paddingTop:"2vh"}}><b style={{color:"white"}}>{this.state.loginName.toUpperCase()}</b></Paper>
                <MenuItem onClick={this.handleLogout} style={{paddingLeft:"2.5vw",paddingTop:"2vh"}}><b style={{color:"red"}}>LOGOUT</b><ExitToAppIcon/></MenuItem>
                </Menu>
                </div>
                </Toolbar>

            );

        }
    }

    render() {
        return (
            <div>
                <div>
                    <AppBar
                        position="static"
                        style={{
                        backgroundColor: "red"
                    }}>
                        {this.getHeader()}
                    </AppBar>
                </div>
                {this.checkLogout()}
            </div>
        );
    }
}
export default Header;