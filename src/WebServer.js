import React from "react";
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from "@material-ui/core/Tooltip";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {Box, CardActions, Container } from "@material-ui/core";
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import WebTerminal from './WebTerminal.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  class WebServer extends React.Component
  {
        render() {
            return (
                <div>
                    <Header currentPage="WebServer"/>
                    <WebTerminal/>
                </div>
            );
        }
  }
  export default WebServer;