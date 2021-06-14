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
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}/>;
}
class SignUp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            emailId: "",
            password: "",
            confirmPassword: "",
            username: "",
            signupToken: {},
            openSnackBar: false
        }
        this.onValidateLogin = this
            .onValidateLogin
            .bind(this);
        this.handleConfirmPasswordChange = this
            .handleConfirmPasswordChange
            .bind(this);
        this.handleEmailChange = this
            .handleEmailChange
            .bind(this);
        this.handlePasswordChange = this
            .handlePasswordChange
            .bind(this);
        this.handleUsernameChange = this
            .handleUsernameChange
            .bind(this);
    }

    onValidateLogin()
    {
        if(this.state.emailId=="")
        {   
            this.setState({signupToken: {"signup":false, "message":"Please enter your email id"},buttonClick:1})
        }
        else if(this.state.username=="")
        {   
            this.setState({signupToken: {"signup":false, "message":"Please enter your username"},buttonClick:1})
        }
        else if(this.state.password=="")
        {   
            this.setState({signupToken: {"signup":false, "message":"Please enter your password"},buttonClick:1})
        }
        else if(this.state.confirmPassword=="")
        {   
            this.setState({signupToken: {"signup":false, "message":"Please rewrite your password"},buttonClick:1})
        }
        else if(this.state.password !== this.state.confirmPassword)
        {
            this.setState({signupToken: {"signup":false, "message":"Passwords do not match"},buttonClick:1});
        }
        else{
        fetch(`http://13.127.65.221:5000/signup?emailId=${this.state.emailId}&password=${this.state.password}&username=${this.state.username}`).then(response => {
            return response.json()
        }).then(users => {
            this.setState({signupToken: users, buttonClick: 1});
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
    handleUsernameChange(event)
    {
        console.log(event.target.value)
        this.setState({username: event.target.value});
    }
    handleConfirmPasswordChange(event)
    {
        this.setState({confirmPassword: event.target.value});
    }
    redirect()
    {   
        if (this.state.buttonClick == 1) {
            this.setState({buttonClick: 0});
            if (this.state.signupToken["signup"] == false) {
                this.setState({openSnackBar:true});
            } else if (this.state.signupToken["signup"] == true) {
                return (
                    <div>

                        <Cookies username={this.state.username} emailId={this.state.emailId}/>
                        <Redirect
                            to={{
                            pathname: "/",
                            signupToken: this.state.signupToken
                        }}/></div>
                );
            }

        }
    }
    render()
    {
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
                        SIGN UP PAGE</h1>
                </div>
                <Divider/>

                <br/>
                <div>
                    <Snackbar open={this.state.openSnackBar} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            {this.state.signupToken["message"]}
                        </Alert>
                    </Snackbar>
                </div>
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
                                    Username:
                                </h3>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Username"
                                    onChange={this.handleUsernameChange}
                                    variant="outlined"
                                    placeholder="Username"/>
                                <br/>
                                <h3
                                    style={{
                                    color: "grey"
                                }}>
                                    Email Id:
                                </h3>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Email-Id"
                                    onChange={this.handleEmailChange}
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
                                    label="Password"
                                    onChange={this.handlePasswordChange}
                                    variant="outlined"
                                    placeholder="*******"/>
                                <br/>
                                <h3
                                    style={{
                                    color: "grey"
                                }}>
                                    Confirm Your Password:
                                </h3>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Confirm Password"
                                    onChange={this.handleConfirmPasswordChange}
                                    variant="outlined"
                                    placeholder="*******"/>

                                <div
                                    style={{
                                    height: "2vw"
                                }}/>
                                <input
                                    type="button"
                                    value="SIGN UP"
                                    onClick={this.onValidateLogin}
                                    style={{
                                    fontSize: "1.3vw",
                                    fontWeight: "bolder",
                                    color: "white",
                                    borderColor: "#0000CD",
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
                            paddingLeft: "15vw"
                        }}>
                            <Link
                                to='/Login'
                                style={{
                                textDecoration: "none"
                            }}>
                                <Button size="small" color="primary">
                                    Already a user?
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
export default SignUp;