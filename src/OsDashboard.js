import React from "react";
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
import {Card, CardMedia, CardContent} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import RefreshIcon from '@material-ui/icons/Refresh';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Chart extends React.Component {
    render() {
        return <ReactFC {...this.props.config}/>;
    }
}
class OsDashboard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            battery: 0,
            storage: 0,
            ram: 0,
            loginRows:[],
            processRows:[],
            result:null,
            open:true,
            openBackdrop:false
        };
        this.setdata=this.setdata.bind(this);
    }

    loaddata()
    {
        this.setState({openBackdrop:true})
        fetch('http://192.168.43.172:5000/os').then(response => {
        return response.json()
    }).then(users => {
        this.setState({result: users,openBackdrop:false});
        this.setdata();
    });
    }   
    setdata()
    {
        var result=this.state.result;
       
        var rows=[];
        var login=result["login"]
        for(var i in result["login"])
        {
            rows.push(this.createData(login[i]["FROM"],login[i]["LOGIN@"],login[i]["TTY"],login[i]["USER"]))
        }
        var process=[];
        var resultProcess=result["running_process"]
        for(var i=1;i<resultProcess.length;i++)
        {
            process.push(this.createProcessData(resultProcess[i]["COMMAND"],resultProcess[i]["%CPU"],resultProcess[i]["%MEM"],resultProcess[i]["PID"],resultProcess[i]["RSS"],resultProcess[i]["START"],resultProcess[i]["STAT"],resultProcess[i]["TIME"],resultProcess[i]["TTY"],resultProcess[i]["USER"],resultProcess[i]["VSZ"]))
        }
        this.setState({
            battery : result["battery"],
            ram: result["ram"],
            loginRows:rows,
            processRows:process
        }) 
        
    }
    createProcessData(command,cpu,mem,pid,rss,start,stat,time,tty,user,vsz)
    {
        return {cpu,mem,pid,command,rss,start,stat,time,tty,user,vsz};
    }
    createData(from, time, tty, user) {
        return {from, time, tty, user};
    }
    componentDidMount()
    {
        this.loaddata();
    }
    render(){
        var cookiesstr = document.cookie;
        var osname = "";
        if (cookiesstr.length > 0) {
            var cookies = cookiesstr.split(";")
            osname = cookies[1].split("=")[1]
        }
        else
        {
            return (
                <Redirect
                            to={{
                            pathname: "/",
                        }}/>
            );
        }
        const handleClose = () => {
            this.setState({open:false});
          };
        const battery = this.state.battery;
        const storage = this.state.storage;
        const ram = this.state.ram;
        const loginRows = this.state.loginRows;
        const processRows=this.state.processRows;
        return (
            <div>
                
                <div style={{
                    height: "20px"
                }}/>
                <Backdrop style={{zIndex:"1000"}}open={this.state.openBackdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <IconButton style={{marginLeft:"95%"}} onClick={()=>{this.loaddata()}}>
                    <RefreshIcon/>
                </IconButton>
                <Grid container spacing={4} justify="center">
                <div>
                </div>
                    <Grid item sm={6}>
                        <Card
                            style={{
                            backgroundColor: "#FFFAFA"
                        }}>
                            <CardMedia
                                image="battery.gif"
                                style={{
                                width: "100%",
                                height: "100px"
                            }}/>
                            <CardContent>
                                <div>
                                    <Chart
                                        config={{
                                        type: 'doughnut2d',
                                        height: 500,
                                        width: 600,
                                        dataFormat: 'json',
                                        bgcolor: "#FDF5E6",
                                        dataSource: {
                                            "chart": {
                                                "caption": "Battery %",
                                                "subCaption": "Your OS",
                                                "defaultCenterLabel": "Battery",
                                                "centerLabel": "$label: $value",
                                                "decimals": "0",
                                                "theme": "fusion",
                                                "showborder": "1",
                                                "showshadow": "1",
                                                "enablerotation": "1",
                                                "enablesmartlabel": "1",
                                                "centerLabelFontSize": "20",
                                                "labelFontSize": "20",
                                                "captionFontSize": "40",
                                                "centerLabelBold": "1"
                                            },
                                            "data": [
                                                {
                                                    "label": "Battery",
                                                    "value": `${battery}`,
                                                    "color": "#3CB371"
                                                }, {
                                                    "label": "Remaining",
                                                    "value": 100 - `${battery}`,
                                                    "color": "#FA8072"
                                                }
                                            ]
                                        }
                                    }}/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={6}>
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
                                <Chart
                                    config={{
                                    type: 'doughnut2d',
                                    width: 600,
                                    height: 500,
                                    dataFormat: 'json',
                                    dataSource: {
                                        "chart": {
                                            "caption": "Storage ",
                                            "subCaption": "Your Storage",
                                            "defaultCenterLabel": "Storage",
                                            "centerLabel": "$label: $value",
                                            "decimals": "0",
                                            "centerLabelFontSize": "20",
                                            "centerLabelBold": "1",
                                            "labelFontSize": "20",
                                            "captionFontSize": "40",
                                            "theme": "fusion"
                                        },
                                        "data": [
                                            {
                                                "label": "Storage",
                                                "value": `${storage}`
                                            }, {
                                                "label": "Remaining",
                                                "value": 64 - `${storage}`
                                            }
                                        ]
                                    }
                                }}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <div style={{
                    height: "20px"
                }}/>
                <Grid container spacing={4}>
                    <Grid item sm={6}>
                        <Card
                            style={{
                            backgroundColor: "#FFFAFA"
                        }}>
                            <CardMedia
                                image="ram.gif"
                                style={{
                                width: "100%",
                                height: "140px"
                            }}/>
                            <CardContent>
                                <Chart
                                    config={{
                                    type: 'doughnut2d',
                                    width: 600,
                                    height: 500,
                                    dataFormat: 'json',
                                    dataSource: {
                                        "chart": {
                                            "caption": "RAM %",
                                            "subCaption": "Your RAM",
                                            "defaultCenterLabel": "RAM",
                                            "centerLabel": "$label: $value",
                                            "centerLabelFontSize": "20",
                                            "centerLabelBold": "1",
                                            "labelFontSize": "20",
                                            "captionFontSize": "40",
                                            "decimals": "0",
                                            "theme": "fusion"
                                        },
                                        "data": [
                                            {
                                                "label": "RAM",
                                                "value": `${ram}`
                                            }, {
                                                "label": "Remaining",
                                                "value": 8 - `${ram}`
                                            }
                                        ]
                                    }
                                }}/>
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
                                }}>LOGIN DATA</h1>
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
                                                <TableCell>
                                                    <b>Name</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>From</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>To</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>Where</b>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {loginRows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.from}
                                                    </TableCell>
                                                    <TableCell align="right">{row.time}</TableCell>
                                                    <TableCell align="right">{row.tty}</TableCell>
                                                    <TableCell align="right">{row.user}</TableCell>
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
                                                <TableCell align="right">
                                                    <b>cpu</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>mem</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>rss</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>start</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>stat</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>time</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>tty</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>user</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>vsz</b>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {processRows.map((row) => (
                                                <TableRow key={row.command}>

                                                    <TableCell component="th" scope="row">
                                                        {row.command}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        {row.cpu}
                                                    </TableCell>
                                                    <TableCell align="right">{row.tty}</TableCell>
                                                    <TableCell align="right">{row.rss}</TableCell>
                                                    <TableCell align="right">{row.start}</TableCell>
                                                    <TableCell align="right">{row.stat}</TableCell>
                                                    <TableCell align="right">{row.time}</TableCell>
                                                    <TableCell align="right">{row.tty}</TableCell>
                                                    <TableCell align="right">{row.user}</TableCell>
                                                    <TableCell align="right">{row.vsz}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Divider/>
                <div
                    style={{
                    marginBottom: "1px",
                    backgroundColor: "red",
                    height: "100px"
                }}/>
            </div>
        );
    }
}

export default OsDashboard;