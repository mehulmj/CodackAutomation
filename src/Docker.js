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
import {Box, CardActions, Container} from "@material-ui/core";
import Header from './Header.js';
import Dashboard from './Dashboard.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import {green} from "@material-ui/core/colors";

class Docker extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            containerIsSelected: false,
            containerSelectedName: "",
            containerIsSelectedID: "" //to be used later when connection is set up
        }
        this.getContainerContent = this
            .getContainerContent
            .bind(this);
        this.setContainercid = this
            .setContainercid
            .bind(this);
    }
    createData(cname, status, image, port) {
        return {cname, status, image, port};
    }
    getContainerContent() {
        console.log(this.state.containerSelectedName)
        if (this.state.containerIsSelected) {
            return (
                <div>
                    <div>
                        <Card
                            style={{
                            width: "90%",
                            height: "70%"
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    image="osstats.png"
                                    style={{
                                    width: "100%",
                                    height: "30vh"
                                }}/>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        style={{
                                        color: "orange",
                                        fontWeight: "bolder"
                                    }}>
                                        STATISTICS
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        Check your {"  "}
                                        <b>{this.state.containerSelectedName}</b>
                                        {"  "}
                                        container status. Get detailed graphical view of your container status
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Link
                                        to={{
                                        pathname: "/Dashboard",
                                        dashboardFor : "docker",
                                        cname: this.state.containerSelectedName //giving container name for now after db set up give id
                                    }}
                                        style={{
                                        textDecoration: "None",
                                    }}>
                                        <Button size="small" color="primary">
                                            Let's Go
                                        </Button>
                                    </Link>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                    <br/><br/>
                    <div>
                        <Card
                            style={{
                            width: "90%",
                            height: "70%"
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    image="monitor.jpg"
                                    style={{
                                    width: "100%",
                                    height: "30vh"
                                }}/>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        style={{
                                        color: "blue",
                                        fontWeight: "bolder"
                                    }}>
                                        OPERATION
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        Perform some operations / make chages to your {"  "}
                                        <b>{this.state.containerSelectedName}</b>
                                        {"  "}
                                        container.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link
                                        to={{
                                        pathname: "/Operations",
                                    }}
                                        style={{
                                        textDecoration: "None"
                                    }}>
                                        <Button size="small" color="primary">
                                            Let's Go
                                        </Button>
                                    </Link>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Card
                        style={{
                        width: "90%",
                        height: "70%"
                    }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                    style={{
                                    color: "Grey",
                                    fontWeight: "bolder"
                                }}>
                                    INFORMATION
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Click on the container name you want to work with. After selecting , you will
                                    get two options ie view statistics or do operations
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                    </Card>
                </div>
            );
        }
    }
    setContainercid(event) {
        console.log(event);
        this.setState({containerSelectedName: event.target.textContent, containerIsSelected: true})
    }
    render() {

        const rows = [
            this.createData('container 1', 'Running', 'centos', '8080'),
            this.createData('container 2', 'Not Running', 'linux', ''),
            this.createData('container 3', 'Created', 'fedora', '8888')
        ];

        return (
            <div style={{
                backgroundColor: "wheat"
            }}>
                <Header currentPage="Docker"/>
                <br/><br/>
                <Card
                    style={{
                    marginLeft: "6vw",
                    width: "90%",
                    backgroundColor: "#B6D0E2"
                }}>
                    <CardMedia
                        image="webserver_table.jpg"
                        style={{
                        width: "100%",
                        marginTop: "-4vh",
                        height: "15vh"
                    }}>
                        <h1
                            style={{
                            color: "#088F8F",
                            fontSize: "2.5vw",
                            fontWeight: "bolder",
                            textAlign: "center",
                            paddingTop: "2.5vh"
                        }}>AVAILABLE CONTAINERS</h1>
                    </CardMedia>
                    <CardContent>
                        <TableContainer
                            style={{
                            marginLeft: "9vw",
                            align: "center",
                            width: "70vw",
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
                                            <b>Container Name</b>
                                        </TableCell>
                                        <TableCell align="right">
                                            <b>Status</b>
                                        </TableCell>
                                        <TableCell align="right">
                                            <b>Image</b>
                                        </TableCell>
                                        <TableCell align="right">
                                            <b>Ports</b>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                <Button value={row.cname} onClick={this.setContainercid}>
                                                    <b
                                                        style={{
                                                        color: "blue"
                                                    }}>
                                                        {row.cname}
                                                    </b>
                                                </Button>
                                            </TableCell>
                                            {(() => {
                                                if (row.status === "Running") {
                                                    return (
                                                        <TableCell
                                                            align="right"
                                                            style={{
                                                            color: "green"
                                                        }}>
                                                            <b>{row.status}</b>
                                                        </TableCell>
                                                    )
                                                } else {
                                                    return (
                                                        <TableCell
                                                            align="right"
                                                            style={{
                                                            color: "red"
                                                        }}>
                                                            <b>{row.status}</b>
                                                        </TableCell>
                                                    )
                                                }
                                            })()}
                                            <TableCell align="right">{row.image}</TableCell>
                                            <TableCell align="right">{row.port}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
                <br/><br/>
                <div style={{
                    marginLeft: "10vw"
                }}>{this.getContainerContent()}</div>
                <br/>
            </div>
        );
    }
}
export default Docker;
