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
import {Box, CardActions, Container} from "@material-ui/core";
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import Cookies from './Cookies.js';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {BrowserRouter as Router, Redirect, Switch, Route, Link} from "react-router-dom";
import {useCookies} from 'react-cookie';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}/>;
}
class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            loginToken: {},
            emailId: "",
            password: "",
            buttonClick: 0,
            person: {},
            openSnackBar:false
        };
        this.onValidateLogin = this
            .onValidateLogin
            .bind(this);
        this.handleEmailChange = this
            .handleEmailChange
            .bind(this);
        this.handlePasswordChange = this
            .handlePasswordChange
            .bind(this);
        this.redirect = this
            .redirect
            .bind(this);
    }
    onValidateLogin()
    {
        if(this.state.emailId=="")
        {   
            this.setState({loginToken: {"login":false, "message":"Please enter your email id"},buttonClick:1})
        }
        else if(this.state.password=="")
        {   
            this.setState({loginToken: {"login":false, "message":"Please enter your password"},buttonClick:1})
        }
        else
        {
        fetch(`http://13.127.65.221:5000/login?emailId=${this.state.emailId}&password=${this.state.password}`).then(response => {
            return response.json()
        }).then(users => {
            this.setState({loginToken: users,buttonClick:1});
        });
    }

    }
    handleEmailChange(event)
    {
        console.log(event.target.value)
        this.setState({emailId: event.target.value});
    }
    handlePasswordChange(event)
    {
        this.setState({password: event.target.value});
    }
    redirect()
    {
        if (this.state.buttonClick == 1) {
            console.log(this.state.loginToken)
            this.setState({buttonClick: 0});
            if (this.state.loginToken["login"] == false) {
                this.setState({openSnackBar:true});
            } else if (this.state.loginToken["login"] == true) {
                this.setState({openSnackBar:true});
                return (
                    <div><Cookies
                        username={this.state.loginToken["username"]}
                        emailId={this.state.emailId}/>
                        <Redirect
                            to={{
                            pathname: "/",
                            loginToken: this.state.loginToken
                        }}/></div>
                );
            }
            else if(!this.state.loginToken["login"])
            {   console.log("yes")
                this.setState({loginToken:{"message":"Couldnt set up connection with the server"},openSnackBar:true});
            }

        }
    }
    render()
    {
        // var url=window.location.href; url=url.substring(0,url.length-5);
        // window.location= url; console.log(url);
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
        
            this.setState({openSnackBar:false});
          };
        return (
            <div>
                <div
                    style
                    ={{
                    backgroundColor: "#191970",
                    marginTop: "-20px",
                    height: "100px",
                    paddingTop: "2vw"
                }}>
                    <h1
                        style={{
                        color: "White",
                        textAlign: "center"
                    }}>
                        LOGIN PAGE</h1>
                </div>
                <Divider/>
                <div>
                    <Snackbar open={this.state.openSnackBar} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            {this.state.loginToken["message"]}
                        </Alert>
                    </Snackbar>
                </div>
                <br/>
                <div style={{
                    marginLeft: "30vw"
                }}>
                    <Card style={{
                        width: "40vw"
                    }}>
                        <CardMedia
                            image="loginCard.gif"
                            style={{
                            width: "100%",
                            height: "140px"
                        }}/>
                        <CardContent>
                            <form
                                style={{
                                textAlign: "center"
                            }}>
                                <h3
                                    style={{
                                    color: "grey"
                                }}>
                                    Email Id:
                                </h3>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    value={this.state.value}
                                    onChange={this.handleEmailChange}
                                    label="Email-Id"
                                    variant="outlined"
                                    placeholder="abc@example.com"/>
                                <br/>
                                <h3
                                    style={{
                                    color: "grey"
                                }}>
                                    Password:
                                </h3>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    value={this.state.value}
                                    onChange={this.handlePasswordChange}
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    placeholder="*******"/>
                                <div
                                    style={{
                                    height: "2vw"
                                }}/>
                                <input
                                    type="button"
                                    onClick={this.onValidateLogin}
                                    value="LOGIN"
                                    style={{
                                    fontSize: "1.3vw",
                                    fontWeight: "bolder",
                                    color: "white",
                                    backgroundColor: "#0000CD",
                                    borderRadius: "7px",
                                    width: "10vw",
                                    height: "2.9vw"
                                }}/>
                            </form>

                        </CardContent>
                        <Divider/>
                        <CardActions
                            style={{
                            paddingLeft: "8vw"
                        }}>
                            <Link
                                to="/SignUp"
                                style={{
                                textDecoration: "none"
                            }}>
                                <Button size="small" color="primary">
                                    Create a new user?
                                </Button>
                            </Link>
                            <Link
                                to="/ForgotPassword"
                                style={{
                                textDecoration: "none"
                            }}>
                                <Button size="small" color="primary">
                                    Forgot password?
                                </Button>
                            </Link>
                        </CardActions>
                        <CardMedia
                            style={{
                            backgroundColor: "#1E90FF ",
                            height: "30px"
                        }}/>
                    </Card>
                </div>
                {this.redirect()}
                <br/>
                <div
                    style={{
                    marginBottom: "-20vh",
                    backgroundColor: "#191970",
                    height: "30vh"
                }}/>
            </div>
        );
    }
}
export default Login;