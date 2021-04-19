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
import { Card,CardMedia,CardContent } from "@material-ui/core";
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
    
class Chart extends React.Component {
    render () {
        console.log(this.props);
      return <ReactFC {...this.props.config} />;
    }
  }
class Dashboard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            battery : 90,
            storage : 100,
            ram:5
        };
    }
    
    loaddata()
    {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            console.log(this.responseText);
          }
        });
        
        xhr.open("GET", "http://192.168.43.172:5000/");
        
        xhr.send();
    }
    createData(name, from, to, where) {
        return { name, from, to, where};
      }
    render()
    {
        const battery=this.state.battery;
        const storage=this.state.storage;
        const osname="Mehul Jain";
        const ram=this.state.ram;
        this.loaddata();
        const rows = [
            this.createData('root', '18:04', '18:30','tty1'),
            this.createData('root', '19:40', '19:50', 'tty1'),
            this.createData('root', '3:00', '3:50','tty2'),
            this.createData('mehul', '12:00','12:45', 'tty1'),
            this.createData('root', '13:00', '13:50', 'tty2'),
          ];
        return (
            <div>
                <Header currentPage="Statistics"/>
            <div style ={{backgroundColor:"#FADA5E", marginTop: "-20px"}}>
                <h1 style={{color: "White" , textAlign:"center"}}> {osname} Operating System Statistics</h1>
                <Divider/>
            </div>
            <div style={{height:"20px"}}/>
            <Grid container spacing={4} justify="center">
            <Grid item sm={6}>
            <Card style={{ backgroundColor:"#FFFAFA"}}>
                <CardMedia image="battery.gif" style={{width:"100%",height:"100px"}} />
                <CardContent>
                <div>
                <Chart 
                    config={{type: 'doughnut2d',
                    height: 500,
                    width: 800,
                    dataFormat: 'json',
                    bgcolor:"#FDF5E6",
                    dataSource: {
                        "chart": {
                            "caption": "Battery %",
                            "subCaption": "Your OS",
                            "defaultCenterLabel": "Battery",
                            "centerLabel": "$label: $value",
                            "decimals": "0",
                            "theme": "fusion",
                            "showborder":"1",
                            "showshadow":"1",
                            "enablerotation":"1",
                            "enablesmartlabel":"1",
                            "centerLabelFontSize":"30",
                            "labelFontSize":"20",
                            "captionFontSize":"40",
                            "centerLabelBold":"1"
                        },
                        "data": [
                            {
                                "label": "Battery",
                                "value": `${battery}`,
                                "color":"#3CB371"
                            },
                            {
                                "label": "Remaining",
                                "value": 100-`${battery}`,
                                 "color":"#FA8072"
                            }
                        ]
                    }}}/>
                    </div>
                    </CardContent>
            </Card>
            </Grid>
            <Grid item sm={6}>
            <Card  style={{ backgroundColor:"#FFFAFA"}}>
                <CardMedia image="storage.png" style={{width:"100%",height:"100px"}}/>
                <CardContent>
            <Chart 
                    config={{type: 'doughnut2d',
                    width: 800,
                    height: 500,
                        dataFormat: 'json',
                    dataSource: {
                        "chart": {
                            "caption": "Storage ",
                            "subCaption": "Your Storage",
                            "defaultCenterLabel": "Storage",
                            "centerLabel": "$label: $value",
                            "decimals": "0",
                            "centerLabelFontSize":"28",
                            "centerLabelBold":"1",
                            "labelFontSize":"20",
                            "captionFontSize":"40",
                            "theme": "fusion"
                        },
                        "data": [
                            {
                                "label": "Storage",
                                "value": `${storage}`
                            },
                            {
                                "label": "Remaining",
                                "value": 64-`${storage}`
                            }
                        ]
                    }}}/>
           </CardContent>
           </Card>
           </Grid>  
           </Grid>

            <div style={{height:"20px"}}/>
            <Grid container spacing={4}>
                <Grid item sm={6}>
                <Card style={{backgroundColor:"#FFFAFA"}}>
                <CardMedia image="ram.gif" style={{width:"100%",height:"140px"}} />
                <CardContent>    
                <Chart 
                    config={{type: 'doughnut2d',
                    width: 800,
                    height: 500,
                    dataFormat: 'json',
                    dataSource: {
                        "chart": {
                            "caption": "RAM %",
                            "subCaption": "Your RAM",
                            "defaultCenterLabel": "RAM",
                            "centerLabel": "$label: $value",
                            "centerLabelFontSize":"30",
                            "centerLabelBold":"1",
                            "labelFontSize":"20",
                            "captionFontSize":"40",
                            "decimals": "0",
                            "theme": "fusion"
                        },
                        "data": [
                            {
                                "label": "RAM",
                                "value": `${ram}`
                            },
                            {
                                "label": "Remaining",
                                "value": 8-`${ram}`
                            }
                        ]
                    }}}/>
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item sm={6}>
                    <Card style={{ backgroundColor:"#B6D0E2"}}>
                    <CardMedia  style={{width:"100%",height:"100px"}} ><h1 style={{color:"#088F8F",fontSize:"2.5vw",fontWeight:"bolder",textAlign:"center"}}>LOGIN DATA</h1> </CardMedia>
                    <CardContent>
                    
                    <TableContainer style={{width: '46vw'}} component={Paper}>
                        <Table>
                            <TableHead style={{backgroundColor: '#088F8F'}}>
                            <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell align="right"><b>From</b></TableCell>
                            <TableCell align="right"><b>To</b></TableCell>
                            <TableCell align="right"><b>Where</b></TableCell>
                            </TableRow>
                            </TableHead>    
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                        {row.name}
                        </TableCell>
                        <TableCell align="right">{row.from}</TableCell>
                        <TableCell align="right">{row.to}</TableCell>
                        <TableCell align="right">{row.where}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </CardContent>
                </Card>
                    </Grid>
                    </Grid>
                    <Divider />
            <div style={{marginBottom:"1px",backgroundColor:"red",height:"100px"}}/>
        </div>
        );
    }
}

export default Dashboard;