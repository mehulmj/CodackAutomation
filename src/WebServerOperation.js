import React from "react";
import DownloadLink from "react-download-link";
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ReactFC from "react-fusioncharts";
import Tooltip from "@material-ui/core/Tooltip"
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import FusionCharts from "fusioncharts";
import Grid from '@material-ui/core/Grid';
import Header from './Header.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import EditAttributesRoundedIcon from '@material-ui/icons/EditAttributesRounded';
import {
    Card,
    CardMedia,
    CardContent,
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import WebServer from "./WebServer.js";
import Dialog from '@material-ui/core/Dialog';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import CloseIcon from '@material-ui/icons/Close';
import CloudDownloadTwoToneIcon from '@material-ui/icons/CloudDownloadTwoTone';
import {Markup} from 'interweave';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CachedIcon from '@material-ui/icons/Cached';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}/>;
}
class WebServerOperation extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            openDelete:false,
            openEdit:false,
            portNumber: 80,
            deleteFileName:"",
            changedPortNumber: null,
            webServerStatus : false,
            openPortNumberChange:false,
            snackBarMessage:"",
            openSnackBar:false,
            openBackdrop:false,
            html_files:[],
            cgi_files:[],
            alertType:"error",
            renameFile:"",
            originalFileName:""
        };
        this.handleRenameChange=this.handleRenameChange.bind(this);
        this.fileUpload=this.fileUpload.bind(this);
        this.deleteFile=this.deleteFile.bind(this);
        this.alertEditFile=this.alertEditFile.bind(this);
        this.editFile=this.editFile.bind(this);
        this.handlePortNumberChange=this.handlePortNumberChange.bind(this);
        this.alertPortNumberChange=this.alertPortNumberChange.bind(this);
        this.handlePortButton=this.handlePortButton.bind(this);
        this.handleStopResumeButton=this.handleStopResumeButton.bind(this);
        this.handleRebootButton=this.handleRebootButton.bind(this);
        this.get_list_html=this.get_list_html.bind(this);
        this.get_list_cgi=this.get_list_cgi.bind(this);
        this.apiRename=this.apiRename.bind(this);
    }
    componentDidMount()
    {
        this.get_list_html();
        this.get_list_cgi();
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/weboperations/check_status').then(response => {
            return response.json()
        }).then(users => {
            this.setState({webServerStatus:users["status"],openBackdrop:false})
        });
    }
    apiRename()
    {
        this.setState({openBackdrop:true,openEdit:false})
        fetch('http://192.168.43.172:5000/weboperations/rename_file_html?file_name='+this.state.originalFileName+'&to_name='+this.state.renameFile).then(response => {
        return response.json()
    }).then(users => {
        var message="Successfully renamed the file"
        this.setState({snackBarMessage:message,alertType:"success",openBackdrop:false})
        this.get_list_html();
    });
    }
    handleRebootButton()
    {
        this.setState({openBackdrop:true, webServerStatus:false});
        fetch('http://192.168.43.172:5000/weboperations/reboot_server').then(response => {
            return response.json()
        }).then(users => {
            var message="Successfully rebooted the server"
            this.setState({snackBarMessage:message,alertType:"success",openBackdrop:false,webServerStatus:true})
        });
    }
    handleStopResumeButton()
    {
        this.setState({openBackdrop:true});
        var status= !this.state.webServerStatus;
        if(status == false)
        { 
            fetch('http://192.168.43.172:5000/weboperations/stop_server').then(response => {
        return response.json()
    }).then(users => {
        var message="Successfully stopped the server"
        this.setState({snackBarMessage:message,alertType:"success",openBackdrop:false,webServerStatus:false})
    });
        }
        else
        {
            fetch('http://192.168.43.172:5000/weboperations/start_server').then(response => {
                return response.json()
            }).then(users => {
                var message="Successfully started the server"
                this.setState({snackBarMessage:message,alertType:"success",openBackdrop:false,webServerStatus:true})
            });
        }
    }
    handlePortButton()
    {
        if(this.state.changedPortNumber==null)
        {
            this.setState({openSnackBar:true, alertType:"error", snackBarMessage:"Please Enter a valid port number"})
            return(<div></div>);
        }
        else if(this.state.portNumber == this.state.changedPortNumber)
        {
            this.setState({openSnackBar:true,alertType:"error", snackBarMessage:"Port Number is the same as the current one, choose a different port number"})
        }
        else
        this.setState({openPortNumberChange:true});
    }
    alertPortNumberChange()
    {
       
        const handleClose = () => {
            this.setState({openPortNumberChange:false});
          };
         return(
            <Dialog
            open={this.state.openPortNumberChange}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title"><span style={{color:"red"}}>{"Are you sure you want to change the port number?"}</span></DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This would change the port number from {this.state.portNumber} to {this.state.changedPortNumber}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
         );
    }
    fileUpload(event)
    {
        var file= event.target.files[0];
        const formData=new FormData();
        formData.append('file',file);
        fetch('http://192.168.43.172:5000/weboperations/upload_file',{
            method:"post",
            body: formData
        }).then(response => {
        return response.json()
    }).then(users => {
        console.log(users);
        this.get_list_html();
    });
    }
    deleteFile(event)
    {
        var fileName = event.target.id || event.target.value;
        console.log(fileName);
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/weboperations/delete_file_html?file_name='+fileName).then(response => {
        return response.json()
    }).then(users => {
        var message="Successfully delted the file"
        this.setState({snackBarMessage:message,alertType:"success",openBackdrop:false})
        this.get_list_html();
    });
        
    }
    editFile(event)
    {
        var fileName = event.target.id || event.target.value;
        this.setState({openEdit:true,originalFileName:fileName});
    }
    handleRenameChange(event)
    {
        this.setState({renameFile:event.target.value});
    }
    alertEditFile()
    {
        
          const handleClose = () => {
            this.setState({openEdit:false});
          };
          
          return (
              <div>
              <Dialog open={this.state.openEdit} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><span style={{color:"green"}}>Rename File</span></DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Enter the new file name
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Rename"
                    fullWidth
                    onChange= {this.handleRenameChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.apiRename} color="primary">
                    Rename
                  </Button>
                </DialogActions>
              </Dialog> 
              </div>);
    }
    get_list_html()
    {
    this.setState({openBackdrop:true})
    fetch('http://192.168.43.172:5000/webserver').then(response => {
        return response.json()
    }).then(users => {
        var list_of_files=[];
        var resultfiles=users["list_files_html"];
        for(var i=0;i<resultfiles.length;i++)
        {
            list_of_files.push({'file':resultfiles[i]});
        }
        this.setState({html_files:list_of_files,openBackdrop:false})
    });
    }
    get_list_cgi()
    {
    this.setState({openBackdrop:true})
    fetch('http://192.168.43.172:5000/webserver').then(response => {
        return response.json()
    }).then(users => {
        var list_of_files=[];
        var resultfiles=users["list_files_cgi"];
        for(var i=0;i<resultfiles.length;i++)
        {
            list_of_files.push({'file':resultfiles[i]});
        }
        this.setState({cgi_files:list_of_files,openBackdrop:false})
    });
    }
    handlePortNumberChange(event)
    {
        console.log(event);
        this.setState({changedPortNumber: event.target.value});
    }
    
    render()
    {
        const list_of_files = this.state.html_files
        const cgi_files=this.state.cgi_files;
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
        
            this.setState({openSnackBar:false});
          };
        return (
            <div>
                {this.alertEditFile()}
                {this.alertPortNumberChange()}
                <div>
                    <Snackbar open={this.state.openSnackBar} autoHideDuration={4000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={this.state.alertType}>
                            {this.state.snackBarMessage}
                        </Alert>
                    </Snackbar>
                </div>
               
                <br/>
                <br/>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Card style={{backgroundColor:"#FAF0E6"}}>
                        <CardMedia
                                style={{
                                width: "100%",
                                height: "9.5vh"
                            }}>
                                <h1
                                    style={{
                                    color: "",
                                    fontSize: "2.5vw",
                                    fontWeight: "bolder",
                                    textAlign: "center"
                                }}>STATUS</h1>
                            </CardMedia>
                            <Divider/>
                            <CardContent>
                            <Backdrop style={{zIndex:"1000"}} open={this.state.openBackdrop}>
                                <CircularProgress color="blue" />
                            </Backdrop>
                                Server is currently : {(this.state.webServerStatus === true &&
                                     <div style={{display:"inline"}}><b style={{color:"green"}}> ACTIVE</b><br/><br/>
                                     <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "red",
                                        color: "white"
                                    }}
                                    onClick={this.handleStopResumeButton}>
                                        <h3>
                                            <b>stop</b>
                                        </h3>
                                            <StopIcon/>
                                    </Button> 
                                    {"    "}      
                                    <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "grey",
                                        color: "white"
                                    }}
                                    onClick={this.handleRebootButton}>
                                        <h3>
                                            <b>reboot</b>
                                        </h3>
                                            <CachedIcon/>
                                    </Button> </div>) || (this.state.webServerStatus == false && <div style={{display:"inline"}}><b style={{color:"red"}}> INACTIVE</b><br/><br/>
                                     <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "green",
                                        color: "white"
                                    }}
                                    onClick={this.handleStopResumeButton}>
                                        <h3>
                                            <b>resume</b>
                                        </h3>
                                            <PlayArrowIcon/>
                                    </Button>    </div>) 
                                }
                            <div style={{display:"inline"}}> 
                                    
                                    <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "#8B0000",
                                        color: "white"
                                    }}>
                                        <h3>
                                            <b>delete</b>
                                        </h3>
                                            <DeleteIcon/>
                                    </Button>
                            </div>
                            </CardContent>
                        </Card>
                    </Grid>
                <Grid item sm={6}>
                        <Card style={{backgroundColor:"#FFE4B5"}}>
                            <CardContent>
                                <span style={{color:"#2E8B57"}}><h3> Your current <u>port number</u> is : {this.state.portNumber}</h3></span>
                               <TextField
                                    id="outlined-basic"
                                    value={this.state.value}
                                    onChange={this.handlePortNumberChange}
                                    label="Port Number"
                                    type="number"
                                    variant="filled"
                                    color="secondary"
                                    style={{backgroundColor:"white"}}
                                    placeholder={this.state.portNumber}/>
                                    <br/><br/>  
                                 <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "#4169E1",
                                        color: "white",
                                    }}
                                        onClick={this.handlePortButton}>
                                        <h3>
                                            <b>Change</b>
                                        </h3>
                                            <EditAttributesRoundedIcon/>
                                    </Button>    
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Card
                            style={{
                            backgroundColor: "#B6D0E2"
                        }}>
                            <CardMedia
                                style={{
                                width: "100%",
                                height: "100px"
                            }}>
                                <h1
                                    style={{
                                    color: "#088F8F",
                                    fontSize: "2.5vw",
                                    fontWeight: "bolder",
                                    textAlign: "center"
                                }}>LIST OF FILES IN HTML DIRECTORY</h1>
                            </CardMedia>
                            <CardContent>

                                <TableContainer
                                    style={{
                                    width: '46vw'
                                }}
                                    component={Paper}>
                                    <Table>
                                        <TableHead
                                            style={{
                                            backgroundColor: '#088F8F'
                                        }}>
                                            <TableRow>
                                                <TableCell align="left">
                                                    <h4 style={{color:"white"}}>FILE NAME</h4>
                                                </TableCell>
                                                <TableCell align="right"/>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {list_of_files.map((row) => (
                                                <TableRow key={row.ip}>
                                                    <TableCell component="th" scope="row">
                                                        <h5
                                                            style={{
                                                            color: "blue"
                                                        }}>{row
                                                                .file
                                                                .toUpperCase()}</h5>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        <IconButton
                                                            value={row.file}
                                                            aria-label="User"
                                                            style={{
                                                            color: "red"
                                                        }}
                                                            onClick={this.deleteFile}
                                                        >
                                                            <DeleteIcon  onClick={this.deleteFile} id={row.file} />
                                                        </IconButton>

                                                        <IconButton
                                                            aria-label="User"
                                                            color="inherit"
                                                            value={row.file}
                                                            onClick={this.editFile}>
                                                            <EditIcon id={row.file} onClick={this.editFile}/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <br/>
                                <input
                                    accept="/*"
                                    ref="fileInput"
                                    id="contained-button-file"
                                    multiple
                                    onChange={this.fileUpload}
                                    type="file" style={{display: "none"}}/>
                                    <Button
                                        variant="contained"
                                        style={{
                                        marginLeft: "22%",
                                        width: "50%",
                                        backgroundColor: "#f2d5a9",
                                        color: "#444d56"
                                    }}
                                    onClick={() => this.refs.fileInput.click()}>
                                        <h3>
                                            <b>ADD A FILE</b>
                                        </h3>
                                        <IconButton aria-label="User" color="inherit">
                                            <AddCircleIcon/>
                                        </IconButton>
                                    </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={6}>
                        <Card
                            style={{
                            backgroundColor: "#B6D0E2"
                        }}>
                            <CardMedia
                                style={{
                                width: "100%",
                                height: "100px"
                            }}>
                                <h1
                                    style={{
                                    color: "#088F8F",
                                    fontSize: "2.5vw",
                                    fontWeight: "bolder",
                                    textAlign: "center"
                                }}>LIST OF FILES IN CGI DIRECTORY</h1>
                            </CardMedia>
                            <CardContent>

                                <TableContainer
                                    style={{
                                    width: '46vw'
                                }}
                                    component={Paper}>
                                    <Table>
                                        <TableHead
                                            style={{
                                            backgroundColor: '#088F8F'
                                        }}>
                                            <TableRow>
                                                <TableCell align="left">
                                                    <h4 style={{color:"white"}}>FILE NAME</h4>
                                                </TableCell>
                                                <TableCell align="right"/>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cgi_files.map((row) => (
                                                <TableRow key={row.ip}>
                                                    <TableCell component="th" scope="row">
                                                        <h5
                                                            style={{
                                                            color: "blue"
                                                        }}>{row
                                                                .file
                                                                .toUpperCase()}</h5>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        <IconButton
                                                            value={row.file}
                                                            aria-label="User"
                                                            style={{
                                                            color: "red"
                                                        }}
                                                            >
                                                            <DeleteIcon id={row.file}/>
                                                        </IconButton>

                                                        <IconButton
                                                            aria-label="User"
                                                            color="inherit"
                                                            value={row.file}
                                                            onClick={this.editFile}>
                                                            <EditIcon id={row.file} onClick={this.editFile}/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <br/>
                                <input
                                    accept="/*"
                                    ref="fileInput"
                                    id="contained-button-file"
                                    multiple
                                    onChange={this.fileUpload}
                                    type="file" style={{display: "none"}}/>
                                    <Button
                                        variant="contained"
                                        style={{
                                        marginLeft: "22%",
                                        width: "50%",
                                        backgroundColor: "#f2d5a9",
                                        color: "#444d56"
                                    }}
                                    onClick={() => this.refs.fileInput.click()}>
                                        <h3>
                                            <b>ADD A FILE</b>
                                        </h3>
                                        <IconButton aria-label="User" color="inherit">
                                            <AddCircleIcon/>
                                        </IconButton>
                                    </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default WebServerOperation;