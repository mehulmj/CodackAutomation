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
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import GetAppIcon from '@material-ui/icons/GetApp';
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
class OsOperations extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            openDelete: false,
            openEdit: false,
            softwareName: "",
            softwareNameText:"",
            webServerStatus: false,
            openPortNumberChange: false,
            snackBarMessage: "",
            openSnackBar: false,
            openBackdrop: false,
            alertType: "error",
            isCheckSoftware : false,
            softwareExists: false
        };
        this.deleteFile = this
            .deleteFile
            .bind(this);
        this.fileUpload = this
            .fileUpload
            .bind(this);
        this.alertDeleteFile = this
            .alertDeleteFile
            .bind(this);
        this.alertEditFile = this
            .alertEditFile
            .bind(this);
        this.editFile = this
            .editFile
            .bind(this);
        this.handleSoftwareNameChange = this
            .handleSoftwareNameChange
            .bind(this);
       
        this.handleSoftwareNameButton = this
            .handleSoftwareNameButton
            .bind(this);
        this.handleInstallButton = this
            .handleInstallButton
            .bind(this);
            this.handleUninstallButton = this
            .handleUninstallButton
            .bind(this);
        this.handleRebootButton = this
            .handleRebootButton
            .bind(this);
    }
    handleRebootButton()
    {
        this.setState({openBackdrop: true, webServerStatus: false});
        var status = !this.state.webServerStatus;
        var message = "Succesfully rebooted the server";
        setTimeout(() => {
            this.setState({openBackdrop: false, webServerStatus: true, openSnackBar: true, alertType: "success", snackBarMessage: message})
        }, 900)
    }
    handleInstallButton()
    {
        this.setState({openBackdrop: true});
        var message = "Succesfully installed " + this.state.softwareName;
        setTimeout(() => {
            this.setState({openBackdrop: false, softwareExists: true,openSnackBar: true, alertType: "success", snackBarMessage: message})
        }, 1000)
    }
    handleUninstallButton()
    {
        this.setState({openBackdrop: true});
        var message = "Succesfully uninstalled " + this.state.softwareName;
        setTimeout(() => {
            this.setState({openBackdrop: false, softwareExists: false,openSnackBar: true, alertType: "success", snackBarMessage: message})
        }, 1000)
    }
    handleSoftwareNameButton()
    {
        if (this.state.softwareNameText == "") {
            this.setState({openSnackBar: true, alertType: "error", snackBarMessage: "Please enter the name of the software"})
        }  else 
            {
            var softwareName=this.state.softwareNameText
            this.setState({softwareName:softwareName,isCheckSoftware: true, softwareExists: false});
            }
        }
   
    fileUpload(event)
    {
        console.log(event)
    }
    deleteFile(event)
    {
        var fileName = event.target.id || event.target.value;
        console.log(fileName);
        this.setState({openDelete: true});
    }

    editFile(event)
    {
        var fileName = event.target.id || event.target.value;
        console.log(fileName);
        this.setState({openEdit: true});
    }
    alertEditFile()
    {

        const handleClose = () => {
            this.setState({openEdit: false});
        };

        return (
            <div>
                <Dialog
                    open={this.state.openEdit}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        <span
                            style={{
                            color: "green"
                        }}>Rename File</span>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the new file name
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="name" label="Rename" fullWidth/>
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
            </div>
        );
    }
    alertDeleteFile()
    {

        const handleClose = () => {
            this.setState({openDelete: false});
        };
        return (
            <Dialog
                open={this.state.openDelete}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    <span style={{
                        color: "red"
                    }}>{"Are you sure you want to delete this file?"}</span>
                </DialogTitle>
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
    handleSoftwareNameChange(event)
    {
        console.log(event);
        this.setState({softwareNameText: event.target.value});
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
        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                return;
            }

            this.setState({openSnackBar: false});
        };
        return (
            <div>
                {this.alertDeleteFile()}
                {this.alertEditFile()}
                <div>
                    <Snackbar
                        open={this.state.openSnackBar}
                        autoHideDuration={4000}
                        onClose={handleClose}>
                        <Alert onClose={handleClose} severity={this.state.alertType}>
                            {this.state.snackBarMessage}
                        </Alert>
                    </Snackbar>
                    <Backdrop
                        style={{
                        zIndex: "1000"
                    }}
                        open={this.state.openBackdrop}>
                        <CircularProgress color="blue"/>
                    </Backdrop>
                </div>

                <br/>
                <Button
                    variant="contained"
                    style={{
                    height: "6vh",
                    width: "12vw",
                    backgroundColor: "#8B0000",
                    color: "white",
                    marginLeft: "85%"
                }}
                    onClick={this.handleStopResumeButton}>
                    <h3>
                        <b>SHUT DOWN</b>
                    </h3>
                    {"  "}
                    <PowerSettingsNewIcon/>
                </Button>
                <br/>
                <br/>
                <Grid container spacing={1}>
                    <Grid item sm={6}>
                        <Card
                            style={{
                            backgroundColor: "#FAF0E6"
                        }}>
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
                                }}>SOFTWARES</h1>
                            </CardMedia>
                            <Divider/>
                            <CardContent>
                               <div>
                                    <h3>Check whether a software is installed on your system</h3>
                                    <br/>
                                    <TextField
                                    id="outlined-basic"
                                    value={this.state.softwareNameText}
                                    onChange={this.handleSoftwareNameChange}
                                    label="Name Of The Software"
                                    type="text"
                                    variant="filled"
                                    color="secondary"
                                    style={{
                                    backgroundColor: "white"
                                }}/>
                                <br/> <br/>
                                
                                <Button
                                    variant="contained"
                                    style={{
                                    height: "6vh",
                                    backgroundColor: "#48a093 ",
                                    color: "white"
                                }}
                                    onClick={this.handleSoftwareNameButton}>
                                    <h3>
                                        <b>CHECK</b>
                                    </h3>
                                    <DoneAllIcon/>
                                </Button>
                                { this.state.isCheckSoftware == true && this.state.softwareExists == false
                                    && <div><h3>{this.state.softwareName} {" "} is not installed in your system</h3>
                                    <br/>
                                    <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "green",
                                        color: "white"
                                    }}
                                    onClick={this.handleInstallButton}>
                                        <h3>
                                            <b>INSTALL</b>
                                        </h3>
                                            <GetAppIcon/>
                                    </Button> 
                                    </div>
                                }
                                  { this.state.isCheckSoftware == true && this.state.softwareExists == true
                                    && <div><h3>{this.state.softwareName} {" "} is  installed in your system</h3>
                                    <br/>
                                    <Button
                                        variant="contained"
                                        style={{
                                        height:"6vh",
                                        backgroundColor: "red",
                                        color: "white"
                                    }}
                                    onClick={this.handleUninstallButton}>
                                        <h3>
                                            <b>UNINSTALL</b>
                                        </h3>
                                            <DeleteIcon/>
                                    </Button> 
                                    </div>
                                }
                                </div>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item sm={6}>
                        <Card
                            style={{
                            backgroundColor: "#FFE4B5"
                        }}>
                            <CardContent>
                                <span
                                    style={{
                                    color: "#2E8B57"
                                }}>
                                    <h3>
                                        Your current
                                        <u>port number</u>
                                        is : {this.state.portNumber}</h3>
                                </span>
                                <TextField
                                    id="outlined-basic"
                                    value={this.state.value}
                                    onChange={this.handlePortNumberChange}
                                    label="Port Number"
                                    type="number"
                                    variant="filled"
                                    color="secondary"
                                    style={{
                                    backgroundColor: "white"
                                }}
                                    placeholder={this.state.portNumber}/>
                                <br/><br/>
                                <Button
                                    variant="contained"
                                    style={{
                                    height: "6vh",
                                    backgroundColor: "#4169E1",
                                    color: "white"
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
                                                    <h4
                                                        style={{
                                                        color: "white"
                                                    }}>FILE NAME</h4>
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
                                    type="file"
                                    style={{
                                    display: "none"
                                }}/>
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
                                                    <h4
                                                        style={{
                                                        color: "white"
                                                    }}>FILE NAME</h4>
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
                                    type="file"
                                    style={{
                                    display: "none"
                                }}/>
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
export default OsOperations;