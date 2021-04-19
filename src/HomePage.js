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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class HomePage extends React.Component
{
    render()
    {
        return (
            <div>
            
            <div style={{backgroundImage:`url('backgroundhead.gif')`,backgroundRepeat:"no-repeat",backgroundSize:"Cover",height:"650px"}}>
            <Header currentPage="Home"/>
            
            <Typography variant="h1" style={{color:"white",paddingTop:"50px"}} align="center">
                WELCOME!
            </Typography>
            </div>
            <div>
            <br/>
            <Divider />
            <br/>
            <Grid container spacing={9} justify="center">
            <Grid item>
                <Card style={{maxWidth:"400px"}}>
                <CardActionArea>
                <CardMedia image="apache.png" style={{width:"100%",height:"140px"}}/>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Web Server
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                A web server is server software, or a system of one or more computers dedicated to running this software, that can satisfy client HTTP requests on the public World Wide Web or also on private LANs and WANs.

                </Typography>
                </CardContent>
                <CardActions>
                    
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
            </CardActionArea>    
            </Card>
            </Grid>
            <Grid item>
            <Card style={{maxWidth:"400px", maxHeight:"400px"}}>
            <CardActionArea>
            <CardMedia image="docker.png" style={{width:"100%",height:"140px"}}/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Docker
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. 
            </Typography>
            </CardContent>
            <CardActions>
                
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
            </CardActionArea>    
            </Card>
            </Grid>
            <Grid item>
            <Card style={{maxWidth:"400px"}}>
            <CardActionArea>
            <CardMedia image="monitor.jpg" style={{width:"100%",height:"140px"}}/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Remote Monitoring
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                While working remotely, you need to know whats happening on your system or perform some actions on your server, using codack you can get updates, perform any required operation and get alerts via mail.
            </Typography>
            </CardContent>
            <CardActions>
                
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
            </CardActionArea>    
            </Card>
            </Grid>
            
            </Grid>
            </div>
            <br/>
            <div>
                <Divider/>
            </div>
            </div>
        );
    }
}
export default HomePage;