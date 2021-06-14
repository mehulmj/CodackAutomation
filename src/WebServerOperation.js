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
class WebServerOperation extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            openDelete:false,
            openEdit:false,
            portNumber: 80,
            changedPortNumber: null,
            webServerStatus : false
        };
        this.deleteFile = this
            .deleteFile
            .bind(this);
        this.fileUpload=this.fileUpload.bind(this);
        this.alertDeleteFile=this.alertDeleteFile.bind(this);
        this.alertEditFile=this.alertEditFile.bind(this);
        this.editFile=this.editFile.bind(this);
        this.handlePortNumberChange=this.handlePortNumberChange.bind(this);
    }
    fileUpload(event)
    {
        console.log(event)
    }
    deleteFile(event)
    {
        var fileName = event.target.id || event.target.value;
        console.log(fileName);
        this.setState({openDelete:true});
    }

    editFile(event)
    {
        var fileName = event.target.id || event.target.value;
        console.log(fileName);
        this.setState({openEdit:true});
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
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Rename
                  </Button>
                </DialogActions>
              </Dialog>
              </div>);
    }
    alertDeleteFile()
    {
        
          const handleClose = () => {
            this.setState({openDelete:false});
          };
         return(
            <Dialog
            open={this.state.openDelete}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title"><span style={{color:"red"}}>{"Are you sure you want to delete this file?"}</span></DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This action would delete the file permanently and might not be recoverable!
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
    handlePortNumberChange(event)
    {
        this.setState({changedPortNumber: event.target.value});
    }
    render()
    {
        const list_of_files = [
            {
                "file": 'index.html'
            }, {
                "file": 'page1.js'
            }, {
                "file": 'page2.js'
            }
        ];
        return (
            <div>
                {this.alertDeleteFile()}
                {this.alertEditFile()}
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
                                Server is currently : {(this.state.webServerStatus === true &&
                                     <div style={{display:"inline"}}><b style={{color:"green"}}> ACTIVE</b><br/><br/>
                                     <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "red",
                                        color: "white"
                                    }}>
                                        <h3>
                                            <b>stop</b>
                                        </h3>
                                            <StopIcon/>
                                    </Button>    </div>) || (this.state.webServerStatus == false && <div style={{display:"inline"}}><b style={{color:"red"}}> INACTIVE</b><br/><br/>
                                     <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "green",
                                        color: "white"
                                    }}>
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
                                        backgroundColor: "grey",
                                        color: "white"
                                    }}>
                                        <h3>
                                            <b>reboot</b>
                                        </h3>
                                            <CachedIcon/>
                                    </Button>
                                    {"    "}
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
                                    onChange={this.handlePasswordChange}
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
                                        color: "white"
                                    }}>
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
                                                            onClick={this.deleteFile}>
                                                            <DeleteIcon id={row.file} onClick={this.deleteFile}/>
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
                                                            onClick={this.deleteFile}>
                                                            <DeleteIcon id={row.file} onClick={this.deleteFile}/>
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