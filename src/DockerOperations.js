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
import DeleteIcon from '@material-ui/icons/Delete';
import StopIcon from '@material-ui/icons/Stop';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import {Box, CardActions, Container} from "@material-ui/core";
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import {green} from "@material-ui/core/colors";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DockerOperations extends React.Component
{
    createData(cname) {
        return {cname};
    }
    render() {
        const rows = [
            this.createData('container 1'),
            this.createData('container 2'),
            this.createData('container 3')
        ];
        // constructor(props) {     super(props);     this.state={
        // openImage:false     };     this.pullImage = this         .pullImage
        // .bind(this); } pullImage() {     const handleClose = () => {
        // this.setState({openImage: false});     };
        return (
            <div>
                <div
                    style
                    ={{
                    backgroundColor: "#FADA5E",
                    marginTop: "-20px"
                }}>
                    <h1
                        style={{
                        color: "White",
                        textAlign: "center"
                    }}>
                        Work With Docker
                    </h1>
                    <Divider/>
                </div>
                <div style={{
                    height: "20px"
                }}/>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Card
                            style={{
                            backgroundColor: "#FFFAFA"
                        }}>
                            <CardMedia
                                image="docker-hub.png"
                                style={{
                                width: "100%",
                                height: "100px"
                            }}/>
                            <CardContent>
                                <b>Pull an image:
                                </b><br/><br/>
                                <TextField
                                    id="outlined-basic"
                                    label="enter image"
                                    type="text"
                                    variant="filled"
                                    color="secondary"
                                    style={{
                                    height: "3vw",
                                    backgroundColor: "white"
                                }}/>
                                <Button variant="outlined" color="primary" /*onClick={handleClickOpen}*/>
                                    Pull
                                </Button>
                                <Dialog /*open={open} onClose={handleClose}*/>
                                    <DialogTitle>
                                        Image do not exist
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Could not find this image in Docker hub.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button /*onClick={handleClose}*/ color="primary" autoFocus>
                                            Okay
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <br/><br/><br/><br/><br/>
                                <TableContainer
                                    style={{
                                    marginLeft: "1vw",
                                    align: "center",
                                    width: "28vw",
                                    height: "auto"
                                }}
                                    component={Paper}>
                                    <Table>
                                        <TableHead
                                            style={{
                                            backgroundColor: '#CCCCFF'
                                        }}>
                                            <TableRow>
                                                <TableCell>
                                                    <b>Image Pulled</b>
                                                </TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row"></TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <Button
                                                            variant="text"
                                                            style={{
                                                            height: "6vh",
                                                            color: "grey"
                                                        }}>
                                                            <DeleteIcon/>
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card
                            style={{
                            backgroundColor: "#FFFAFA"
                        }}>
                            <CardMedia
                                image="osstats.png"
                                style={{
                                width: "100%",
                                height: "100px"
                            }}/>
                            <CardContent>

                                <b>Create new network:
                                </b>
                                <br/><br/>
                                <TextField
                                    id="outlined-basic"
                                    label="enter network name"
                                    type="text"
                                    variant="filled"
                                    color="secondary"
                                    style={{
                                    height: "3vw",
                                    backgroundColor: "white"
                                }}/>
                                <br/><br/><br/><br/><br/>
                                <TableContainer
                                    style={{
                                    marginLeft: "1vw",
                                    align: "center",
                                    width: "28vw",
                                    height: "auto"
                                }}
                                    component={Paper}>
                                    <Table>
                                        <TableHead
                                            style={{
                                            backgroundColor: '#CCCCFF'
                                        }}>
                                            <TableRow>
                                                <TableCell>
                                                    <b>Networks Created</b>
                                                </TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row"></TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <Button
                                                            variant="text"
                                                            style={{
                                                            height: "6vh",
                                                            color: "grey"
                                                        }}>
                                                            <DeleteIcon/>
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card
                            style={{
                            backgroundColor: "#FFFAFA"
                        }}>
                            <CardMedia
                                image="storage.png"
                                style={{
                                width: "100%",
                                height: "100px"
                            }}/>
                            <CardContent>

                                <b>Create new volume:
                                </b>
                                <br/><br/>
                                <TextField
                                    id="outlined-basic"
                                    label="enter volume name"
                                    type="text"
                                    variant="filled"
                                    color="secondary"
                                    style={{
                                    height: "3vw",
                                    backgroundColor: "white"
                                }}/>
                                <br/><br/><br/><br/><br/>
                                <TableContainer
                                    style={{
                                    marginLeft: "1vw",
                                    align: "center",
                                    width: "28vw",
                                    height: "auto"
                                }}
                                    component={Paper}>
                                    <Table>
                                        <TableHead
                                            style={{
                                            backgroundColor: '#CCCCFF'
                                        }}>
                                            <TableRow>
                                                <TableCell>
                                                    <b>Volumes Created</b>
                                                </TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row"></TableCell>
                                                    <TableCell component="th" scope="row">
                                                        <Button
                                                            variant="text"
                                                            style={{
                                                            height: "6vh",
                                                            color: "grey"
                                                        }}>
                                                            <DeleteIcon/>
                                                        </Button>
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
            </div>
        );
    }
}
export default DockerOperations;