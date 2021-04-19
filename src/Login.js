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
import TextField from '@material-ui/core/TextField'
import {Box, CardActions, Container } from "@material-ui/core";
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Login extends React.Component
{
    render()
    {
        return(
            <div>
                <div style ={{backgroundColor:"#191970", marginTop: "-20px",height:"100px" , paddingTop:"2vw"}}>
                <h1 style={{color: "White" , textAlign:"center"}}> LOGIN PAGE</h1>
            </div>
            <Divider/>

            <br/>
            <div style={{marginLeft:"30vw"}}>
            <Card style={{width:"40vw"}}>
            <CardMedia image="loginCard.gif" style={{width:"100%",height:"140px"}}/>
            <CardContent>
                <form style = {{textAlign:"center"}}>
            <h3 style={{color:"grey"}}>
                Email Id:
            </h3>
            <TextField required id="outlined-basic" label="Email-Id" variant="outlined" placeholder="abc@example.com" />
            <br/>
            <h3 style={{color:"grey"}}>
                Password:
            </h3>
            <TextField required id="outlined-basic" label="Password" variant="outlined" placeholder="*******" />
            <div style={{height:"2vw"}}/>
            <input type="submit" value="LOGIN" style={{fontSize:"1.3vw",fontWeight:"bolder",color:"white",backgroundColor:"#0000CD",borderRadius:"7px",width:"10vw",height:"2.9vw"}}/>
                </form>
            </CardContent>
            <Divider/>
            <CardActions style={{paddingLeft:"8vw"}}>
            <Link to="/SignUp" style={{textDecoration:"none"}}>
            <Button size="small" color="primary">
                Create a new user?
            </Button>
            </Link>
            <Link to="/ForgotPassword" style={{textDecoration:"none"}}>
            <Button size="small" color="primary">
                Forgot password?
            </Button>
            </Link>           
             </CardActions>
            <CardMedia style={{backgroundColor:"#1E90FF	",height:"30px"}}/>
            </Card>
            </div> 
            <br/>
            <div style={{marginBottom:"-20vh",backgroundColor:"#191970",height:"30vh"}}/>
            </div>
        );
    }
}
export default Login;