import React from "react";
import {slide as Menu} from "react-burger-menu";
import "./Styles.css";
import Grid from "@material-ui/core/Grid"
import 'react-pro-sidebar/dist/css/styles.css';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Icon} from "@material-ui/core";

class SideBar extends React.Component {
    render() {
        return (
            <div>
                        <Menu pageWrapId={"page-wrap"} outerContainerId={"App"}>
                            <a className="menu-item" href="/">
                                Home
                            </a>

                            <a className="menu-item" href="/burgers"></a>

                            <a className="menu-item" href="/pizzas">
                                Pizzas
                            </a>

                            <a className="menu-item" href="/desserts">
                                Desserts
                            </a>
                        </Menu>
                        
            </div>
        );
    }

}
export default SideBar;