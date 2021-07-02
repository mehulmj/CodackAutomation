import React from "react";
import DownloadLink from "react-download-link";
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import RefreshIcon from '@material-ui/icons/Refresh';
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
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {
    Card,
    CardMedia,
    CardContent,
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import PageviewIcon from '@material-ui/icons/Pageview';
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
import FolderIcon from '@material-ui/icons/Folder';
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
            softwareExists: false,
            currentDir:"/",
            directoryRows: [],
            processRows:[]
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
        this.handleDirChange=this.handleDirChange.bind(this);
        this.handleDirButton=this.handleDirButton.bind(this);
        this.handleInstallButton = this
            .handleInstallButton
            .bind(this);
            this.handleUninstallButton = this
            .handleUninstallButton
            .bind(this);
        this.api_check_software=this.api_check_software.bind(this);
        this.loaddata=this.loaddata.bind(this);
    }
    loaddata()
    {
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/osoperations/get_running_process').then(response => {
        return response.json()
    }).then(users => {
        var process=[];
        var resultProcess=users["running_processes"]
        for(var i=1;i<resultProcess.length;i++)
        {
            process.push(this.createProcessData(resultProcess[i]["COMMAND"],resultProcess[i]["%CPU"],resultProcess[i]["%MEM"],resultProcess[i]["PID"],resultProcess[i]["RSS"],resultProcess[i]["START"],resultProcess[i]["STAT"],resultProcess[i]["TIME"],resultProcess[i]["TTY"],resultProcess[i]["USER"],resultProcess[i]["VSZ"]))
        }
        this.setState({processRows: process,openBackdrop:false});
    });
}
createProcessData(command,cpu,mem,pid,rss,start,stat,time,tty,user,vsz)
    {
        return {cpu,mem,pid,command,rss,start,stat,time,tty,user,vsz};
    }
    handleInstallButton()
    {
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/osoperations/install_software?software_name='+this.state.softwareName).then(response => {
        return response.json()
    }).then(users => {
        if(users["installation"]==false)
        {
            var message="Couldnt install " + this.state.softwareName;
            var type="error";
        }
        else
        {
            var message="Installed " + this.state.softwareName;
            var type="success";
        }
        this.setState({openBackdrop:false,softwareExists:users["installation"],openSnackBar:true,alertType:type,snackBarMessage:message});
      });
    }
    handleUninstallButton()
    {
        
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/osoperations/uninstall_software?software_name='+this.state.softwareName).then(response => {
        return response.json()
    }).then(users => {
        if(users["installation"]==false)
        {
            var message="Couldnt uninstall " + this.state.softwareName;
            var type="error";
        }
        else
        {
            var message="Uninstalled " + this.state.softwareName;
            var type="success";
        }
        this.setState({openBackdrop:false,softwareExists:users["installation"],openSnackBar:true,alertType:type,snackBarMessage:message});
      });
    }
    handleSoftwareNameButton()
    {
        if (this.state.softwareNameText == "") {
            this.setState({openSnackBar: true, alertType: "error", snackBarMessage: "Please enter the name of the software"})
        }  else 
            {
            var softwareName=this.state.softwareNameText
            this.api_check_software(softwareName);
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

    
    api_check_software(software_name)
    {
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/osoperations/check_software?software_name='+software_name).then(response => {
        return response.json()
    }).then(users => {
        this.setState({openBackdrop:false,softwareExists:users["software_exists"],isCheckSoftware:true});
        if(this.state.softwareExists==true)
        {
            this.setState({softwareName:users["software_name"]});
        }
        else
        {
            this.setState({softwareName:software_name});
        }
    });
    } 
    handleDirChange(event)
    {
        this.setState({currentDir:event.target.value});
    }
    componentDidMount()
    {
        this.handleDirButton();
        this.loaddata();    
    }
    handleDirButton()
    {
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/osoperations/directory_content?directory='+this.state.currentDir).then(response => {
        return response.json()
    }).then(users => {
        var rows=[];
        if(users["status"]==false)
        {
            this.setState({openSnackBar:true,alertType:"error",snackBarMessage:"No such directory",openBackdrop:false});
        }
        else
        {
            for(var i in users["list_of_files"])
            {
                rows.push({"name":users["list_of_files"][i]["name"],"file_type":users["list_of_files"][i]["file_type"]});
            }
            this.setState({openBackdrop:false,directoryRows:rows});
        }
    });
    }
    render()
    {
        const processRows=this.state.processRows;
        const list_of_files = this.state.directoryRows;
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
                    width: "14vw",
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
                    </Grid>
                    <br/>
                    <Grid container>
                    <Grid item sm={12}>
                    <Card
                            style={{
                            backgroundColor: "#B6D0E2"
                        }}>
                            <CardMedia
                                style={{
                                width: "100%",
                                height: "4vh"
                            }}>
                                <h1
                                    style={{
                                    color: "#088F8F",
                                    fontSize: "2.5vw",
                                    fontWeight: "bolder",
                                    textAlign: "center"
                                }}>VIEW DIRECTORY</h1>
                            </CardMedia>
                            <br/> 
                            <Divider/>
                            <CardContent>
                                <div>
                                    <h3>Currently viewing <b style={{color:"red"}}>{this.state.currentDir}</b> directory </h3>
                            <IconButton style={{marginLeft:"95%"}} onClick={()=>{this.handleDirButton()}}>
                            <RefreshIcon/>
                            </IconButton>
                                    <br/><br/>
                                    <TextField
                                    id="outlined-basic"
                                    value={this.state.currentDir}
                                    onChange={this.handleDirChange}
                                    label="Name Of The Directory"
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
                                    onClick={this.handleDirButton}>
                                    <h3>
                                        <b>VIEW</b>
                                    </h3>
                                    <PageviewIcon/>
                                </Button>
                                <br/><br/>   
                                </div>
                                <TableContainer
                                    style={{
                                    width: '46vw',
                                    marginLeft:"50%",
                                    marginTop:"-10%"
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

                                                <TableCell align="right">
                                                    <h4
                                                        style={{
                                                        color: "white"
                                                    }}>FILE TYPE</h4>
                                                </TableCell>
                                                <TableCell align="right"/>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {list_of_files.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        <h5
                                                            style={{
                                                            color: "blue"
                                                        }}>{row.name.toUpperCase()}</h5>
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <h5
                                                            style={{
                                                            color: "grey"
                                                        }}>{row.file_type=="dir" && <FolderIcon/>}{row.file_type=="file" && <InsertDriveFileIcon/>}</h5>
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
                                                </TableRow>))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br/>
                <Grid container>
                    <Grid item sm={12}>
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
                                }}>RUNNING PROCESSES</h1>
                            </CardMedia>
                            <CardContent>

                            <IconButton style={{marginLeft:"95%"}} onClick={()=>{this.loaddata()}}>
                            <RefreshIcon/>
                            </IconButton>
                                <TableContainer
                                    style={{
                                    width: '100%'
                                }}
                                    component={Paper}>
                                    <Table>
                                        <TableHead
                                            style={{
                                            backgroundColor: '#088F8F'
                                        }}>
                                            <TableRow>
                                                <TableCell>
                                                    <b>Command</b>
                                                </TableCell>
                                                <TableCell>
                                                    <b>start</b>
                                                </TableCell>
                                                <TableCell>
                                                    <b>time</b>
                                                </TableCell>
                                                <TableCell>
                                                    <b>user</b>
                                                </TableCell>
                                                <TableCell>
                                                    Stop Process
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {processRows.map((row) => (
                                                <TableRow key={row.command}>

                                                    <TableCell component="th" scope="row">
                                                        {row.command}
                                                    </TableCell>
                                                    <TableCell>{row.start}</TableCell>
                                                    <TableCell>{row.time}</TableCell>
                                                    <TableCell>{row.user}</TableCell>
                                                    <TableCell component="th" scope="row" align="right">
                                                        <IconButton
                                                            value={row.file}
                                                            aria-label="User"
                                                            style={{
                                                            color: "red"
                                                        }}
                                                            onClick={this.deleteFile}>
                                                            <StopIcon id={row.file} onClick={this.deleteFile}/>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br/>
    </div>
        );
    }
}
export default OsOperations;