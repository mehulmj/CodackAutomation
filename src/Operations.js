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
import SideBar from './SideBar.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import WebServerOperation from "./WebServerOperation.js";
import {Card, CardMedia, CardContent} from "@material-ui/core";
import Header from './Header.js';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Chart extends React.Component {
    render() {
        console.log(this.props);
        return <ReactFC {...this.props.config}/>;
    }
}
class Operations extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            serverName: props.location.serverName
        };
    }

    render()
    {
        console.log(this.props);
        return (
            <div>
                <Header currentPage={"Operation"}/>

                <br/>
                    <WebServerOperation/>
            </div>
        );

    }
}

export default Operations;