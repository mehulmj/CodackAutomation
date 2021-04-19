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

class ForgotPassword extends React.Component
{
    render()
    {
        return(
            <div>
                <div style ={{backgroundColor:"#191970", marginTop: "-20px",height:"100px" , paddingTop:"2vw"}}>
                <h1 style={{color: "White" , textAlign:"center"}}> Forgot Password </h1>
            </div>
            <Divider/>
            <br/>
            <br/>
            <div style={{marginLeft:"30vw"}}>
            <Card style={{width:"40vw"}}>
            <CardMedia image="forgotpass.gif" style={{width:"100%",height:"140px"}}/>
            <CardContent>
                <form style = {{textAlign:"center"}}>
            <h3 style={{color:"grey"}}>
                Email Id:
            </h3>
            <TextField required id="outlined-basic" label="Email-Id" variant="filled" placeholder="abc@example.com" />

            <div style={{height:"2vw"}}/>
            <input type="submit" value="ENTER OTP >>" style={{fontSize:"1.3vw",fontWeight:"bolder",color:"white",backgroundColor:"#0000CD",borderRadius:"7px",width:"10vw",height:"2.9vw"}}/>
                </form>
            </CardContent>
            <Divider/>
            <CardActions style={{paddingLeft:"14vw"}}>
            <Link to="/SignUp" style={{textDecoration:"none"}}>
            <Button size="small" color="primary">
                Create a new user?
            </Button>  
            </Link>
             </CardActions>
            <CardMedia style={{backgroundColor:"#1E90FF	",height:"30px"}}/>
            </Card>
            </div> 
            <br/>
            <br/>
            <div style={{marginBottom:"-20vh",backgroundColor:"#191970",height:"25vh"}}/>
            </div>
        );
    }
}
export default ForgotPassword;