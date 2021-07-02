import React from "react";
import DownloadLink from "react-download-link";
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import RefreshIcon from '@material-ui/icons/Refresh';
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
import {Card, CardMedia, CardContent, AppBar, Toolbar, Typography} from "@material-ui/core";
import {BrowserRouter as Router, Switch, Redirect, Route, Link} from "react-router-dom";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import WebServer from "./WebServer.js";
import Dialog from '@material-ui/core/Dialog';
import FullscreenIcon from '@material-ui/icons/Fullscreen'; 
import CloseIcon from '@material-ui/icons/Close';
import CloudDownloadTwoToneIcon from '@material-ui/icons/CloudDownloadTwoTone';     
import { Markup } from 'interweave';
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Chart extends React.Component {
    render() {
        return <ReactFC {...this.props.config}/>;
    }
}
class WebServerDashboard extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            battery: 5,
            storage: 100,
            ram: 5,
            result:null,
            open:true,
            openBackdrop:false,
            homePageHtml:`<!DOCTYPE html><html class="colormode-light"><head><script type="text/javascript" src="https://cdn.cookielaw.org/consent/a7ff9c31-9f59-421f-9a8e-49b11a3eb24e/OtAutoBlock.js"></script><script src="https://cdn.cookielaw.org/consent/a7ff9c31-9f59-421f-9a8e-49b11a3eb24e/otSDKStub.js" type="text/javascript" charSet="UTF-8" data-domain-script="a7ff9c31-9f59-421f-9a8e-49b11a3eb24e"></script><script>
            var timeHolder;

            function dispatchOneTrust(groups){
              if(typeof __NEXT_REDUX_STORE__ !== 'undefined') {
                __NEXT_REDUX_STORE__.dispatch({type: 'ONE_TRUST_DATA', groups})  
              } else {
                clearTimeout(timeHolder); // clear for safety
                timeHolder = setTimeout(dispatchOneTrust, 50)
              }
            }

            function OptanonWrapper() {
              dispatchOneTrust(OptanonActiveGroups)
            }
            </script><meta name="viewport" content="width=device-width"/><meta charSet="utf-8"/><title>The Doomed Mouse Utopia That Inspired the ‘Rats of NIMH’</title><link rel="icon" type="image/x-icon" href="/favicon.ico"/><link rel="canonical" href="http://atlasobscura.com/articles/the-doomed-mouse-utopia-that-inspired-the-rats-of-nimh"/><meta name="description" content="Dr. John Bumpass Calhoun spent the ’60s and ’70s playing god to thousands of rodents."/><meta name="x-pocket-override-excerpt" content="Dr. John Bumpass Calhoun spent the ’60s and ’70s playing god to thousands of rodents."/><meta itemProp="name" content="The Doomed Mouse Utopia That Inspired the ‘Rats of NIMH’"/><meta itemProp="description" content="Dr. John Bumpass Calhoun spent the ’60s and ’70s playing god to thousands of rodents."/><meta itemProp="image" content="https://pocket-image-cache.com/1200x/filters:no_upscale():format(jpg):extract_cover()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-syndicated-images%2Farticles%2F1477%2F1567099027_image.jpg"/><meta name="twitter:card" content="summary_large_image"/><meta name="twitter:url" content="https://getpocket.com/explore/item/the-doomed-mouse-utopia-that-inspired-the-rats-of-nimh?utm_source=pocket-newtab-intl-en"/><meta name="twitter:title" content="The Doomed Mouse Utopia That Inspired the ‘Rats of NIMH’"/><meta name="twitter:description" content="Dr. John Bumpass Calhoun spent the ’60s and ’70s playing god to thousands of rodents."/><meta name="twitter:site" content="@pocket"/><meta name="twitter:image" content="https://pocket-image-cache.com/1200x/filters:no_upscale():format(jpg):extract_cover()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-syndicated-images%2Farticles%2F1477%2F1567099027_image.jpg"/><meta property="fb:app_id" content="131450656879143"/><meta property="og:type" content="article"/><meta property="og:url" content="https://getpocket.com/explore/item/the-doomed-mouse-utopia-that-inspired-the-rats-of-nimh?utm_source=pocket-newtab-intl-en"/><meta property="og:title" content="The Doomed Mouse Utopia That Inspired the ‘Rats of NIMH’"/><meta property="og:description" content="Dr. John Bumpass Calhoun spent the ’60s and ’70s playing god to thousands of rodents."/><meta property="og:site_name" content="Pocket"/><meta property="og:image" content="https://pocket-image-cache.com/1200x/filters:no_upscale():format(jpg):extract_cover()/https%3A%2F%2Fs3.amazonaws.com%2Fpocket-syndicated-images%2Farticles%2F1477%2F1567099027_image.jpg"/><meta name="next-head-count" content="6"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/styles.1b51ee65.chunk.css" as="style" crossorigin="anonymous"/><link rel="stylesheet" href="https://assets.getpocket.com/web-discover/_next/static/chunks/styles.1b51ee65.chunk.css" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/pages/_app.2adbec96.chunk.css" as="style" crossorigin="anonymous"/><link rel="stylesheet" href="https://assets.getpocket.com/web-discover/_next/static/chunks/pages/_app.2adbec96.chunk.css" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/pages/syndicated-article.b80be3f2.chunk.css" as="style" crossorigin="anonymous"/><link rel="stylesheet" href="https://assets.getpocket.com/web-discover/_next/static/chunks/pages/syndicated-article.b80be3f2.chunk.css" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/main-28c2bb912a3315bf95af.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/webpack-4d4cbafad55fda59aa6a.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/framework.3cf562bb8baea43ab517.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/0a7151bf.3aa613878842be56e0d1.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/commons.01a265b47423ceef6189.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/8478bddf1c0e08e495aab196b1b9af0b03f1c644.7a39688da8a9f7fcbbf4.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/12c6099f9f19cf44235b895769133f4f975036df.1ef6ec3305e81709d39d.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/96d2b7c08ac70cbf6f8be7f68559c067bdf1de1c.06cfaf49f3ddaff98194.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/0cf71c118da9335750fa2b4dda255d98991ba6bb.ced5e10dda4625288e03.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/2cb41d510b6da659c2f70d82424807dada00140e.89560f79524af3650956.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/49eebf15f62038bb885094f3670753acc328db52.3f44e49631f50a1fbf70.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/5bb79bece52ddac55370f01898d0c96bf4ec5a11.10c9b0576412adaf0abe.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/66049a52e352e8641328040ecc86ed9c0298c955.0eb81fa70d6358f6bec3.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/styles.4f4f8e8507da76ee0f9d.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/pages/_app-912e7294b85ac458a518.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/905f9e71216cb81bbc80e3ef8cca5c2674e75fdd.0765d5a199e3341eae45.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/d39f0ab6ef217ae15d0f2f3944f6f1156dd19605.8ce5017512197a14a3ee.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/13b1663a07299fd6dbaa83bec4a6285e4e721641.c8718ea19e0bb6c0b145.js" as="script" crossorigin="anonymous"/><link rel="preload" href="https://assets.getpocket.com/web-discover/_next/static/chunks/pages/syndicated-article-42b5d61129ad3dd6033b.js" as="script" crossorigin="anonymous"/></head><body><div id="__next"><header class="h1bh2prp"><div class="p16bck5y global-nav-container"><nav class="n27eiag"><button class="b1344aws i1pibbob hamburger-icon inline"><span class="igxbmuu icon "><svg aria-labelledby="mobile-menu-menu-icon-title mobile-menu-menu-icon-description" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M2 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 19a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z" clip-rule="evenodd"></path><title id="mobile-menu-menu-icon-title">Open</title><desc id="mobile-menu-menu-icon-description">Open the Pocket mobile menu</desc></svg></span></button><a id="pocket-logo-nav" class="pocket-logo" href="/explore?src=navbar"><div class="lduquv9 logo"><span class="l1n9llcl">Pocket</span></div></a><div class="lvjqdba" aria-label="Page navigation"><ul class="lo0mpm1 links"><li><a id="global-nav-discover-link" class="selected" href="https://getpocket.com/explore?src=navbar">Discover</a></li><li><a id="global-nav-my-list-link" class="" href="http://getpocket.com/my-list?src=navbar">My List</a></li></ul></div><div class="tva5lsb"></div><div><a href="https://getpocket.com/login?src=navbar" id="global-nav-login-link" class="a1mm8cla login-link">Log in</a><a class="b1344aws sm6eflf secondary" href="https://getpocket.com/signup?src=navbar" id="global-nav-signup-link"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11.125a5.067 5.067 0 01-5.06-5.063A5.067 5.067 0 0112 1c2.79 0 5.06 2.271 5.06 5.062A5.067 5.067 0 0112 11.125zM12 3a3.06 3.06 0 10.001 6.121A3.06 3.06 0 0012 3.001zM11.99 15.006c4.41 0 7.98 2.302 8.01 4.993H4v-.07c.12-2.741 3.63-4.923 7.99-4.923zm0-2c-5.44 0-9.85 3.071-9.99 6.883V20C2 21.1 2.9 22 4 22h16c1.09 0 1.98-.88 2-1.97-.04-3.883-4.5-7.025-10.01-7.025z"></path></svg></span><span class="label">Sign up</span></a></div></nav></div></header><div class="p16bck5y "><section class="m176e2k4"><div class="spacing"></div></section><header class="m176e2k4"><div class="spacing"><div class="p1wsrchy">Pocket worthy<span>Stories to fuel your mind.</span></div><header><h1 class="huwp7ir">The Doomed Mouse Utopia That Inspired the ‘Rats of NIMH’</h1><h2 class="dbjv4gk">Dr. John Bumpass Calhoun spent the ’60s and ’70s playing god to thousands of rodents.</h2></header><div class="b12pz0kr"><a href="https://www.atlasobscura.com/?utm_source=pocket">Atlas Obscura</a><ul><li itemProp="author">Cara Giaimo</li></ul></div><aside class="sx3hrcw top"><button class="b1344aws primary"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h16a2 2 0 012 2H2zm2 0H2v6c0 5.523 4.477 10 10 10s10-4.477 10-10V5h-2v6a8 8 0 11-16 0V5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span>Save Story</button><p>Read when you’ve got time to spare.</p></aside></div></header><article class="m176e2k4"><aside class="s1vdhuq3"><aside class="smfdtxx"><div class="pocket-share"><div class="s1cnjnr2 unsaved card-actions"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h16a2 2 0 012 2H2zm2 0H2v6c0 5.523 4.477 10 10 10s10-4.477 10-10V5h-2v6a8 8 0 11-16 0V5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></span><div class="actionCopy">Save</div></div></div><div class="facebook-share"><button aria-label="facebook" class="react-share__ShareButton" style="background-color:transparent;border:none;padding:0;font:inherit;color:inherit;cursor:pointer"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12c0 5.49 4.023 10.041 9.281 10.866V15.18H7.488V12h2.793V9.577c0-2.757 1.643-4.28 4.155-4.28 1.204 0 2.462.215 2.462.215v2.707h-1.387c-1.366 0-1.792.848-1.792 1.718V12h3.05l-.487 3.18h-2.563v7.686C18.977 22.041 23 17.49 23 12z" clip-rule="evenodd"></path></svg></span></button></div><div class="twitter-share"><button aria-label="twitter" class="react-share__ShareButton" style="background-color:transparent;border:none;padding:0;font:inherit;color:inherit;cursor:pointer"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M23 5.132a8.976 8.976 0 01-2.592.715 4.567 4.567 0 001.985-2.51 9.013 9.013 0 01-2.865 1.102A4.495 4.495 0 0016.232 3c-2.495 0-4.516 2.036-4.516 4.547 0 .357.045.704.119 1.034-3.754-.188-7.079-1.999-9.304-4.746a4.551 4.551 0 001.398 6.064 4.55 4.55 0 01-2.049-.566v.053c0 2.203 1.555 4.041 3.623 4.452-.381.11-.779.164-1.192.164-.287 0-.572-.029-.846-.08a4.512 4.512 0 004.214 3.155A9.029 9.029 0 011 18.959 12.707 12.707 0 007.914 21c8.307 0 12.847-6.922 12.847-12.928 0-.198-.007-.394-.014-.59A9.242 9.242 0 0023 5.132z" clip-rule="evenodd"></path></svg></span></button></div><div class="reddit-share"><button aria-label="reddit" class="react-share__ShareButton" style="background-color:transparent;border:none;padding:0;font:inherit;color:inherit;cursor:pointer"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.5 11.846a2.617 2.617 0 00-2.614-2.615 2.58 2.58 0 00-1.57.53c-1.459-1.014-3.37-1.618-5.401-1.771l1.096-2.574 3.19.746a1.956 1.956 0 001.94 1.761c1.081 0 1.96-.88 1.96-1.961 0-1.082-.879-1.962-1.96-1.962-.684 0-1.287.354-1.637.89l-3.728-.873a.653.653 0 00-.752.38L11.51 7.956c-2.194.075-4.285.694-5.864 1.771a2.56 2.56 0 00-1.531-.495A2.617 2.617 0 001.5 11.846c0 .956.521 1.82 1.321 2.264-.01.115-.014.233-.014.352C2.807 18.067 6.91 21 11.954 21c5.043 0 9.148-2.933 9.148-6.538 0-.102-.004-.203-.01-.304a2.59 2.59 0 001.408-2.312zM7.38 13.808c0-.72.587-1.308 1.307-1.308s1.307.587 1.307 1.308c0 .722-.587 1.307-1.307 1.307s-1.306-.585-1.306-1.307zm7.592 4.337a5.141 5.141 0 01-6.035 0 .653.653 0 01.766-1.059 3.83 3.83 0 004.503 0 .653.653 0 11.766 1.06zm.25-3.03a1.308 1.308 0 11.001-2.615 1.308 1.308 0 01-.002 2.615z"></path></svg></span></button></div><div class="linkedin-share"><button aria-label="linkedin" class="react-share__ShareButton" style="background-color:transparent;border:none;padding:0;font:inherit;color:inherit;cursor:pointer"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 19H5v-9h3v9zM6.5 8.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM19 19h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V19h-3v-9h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V19z"></path></svg></span></button></div><div class="email-share"><button aria-label="email" class="react-share__ShareButton" style="background-color:transparent;border:none;padding:0;font:inherit;color:inherit;cursor:pointer"><span class="igxbmuu icon "><svg aria-labelledby=" " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M4 4a3 3 0 00-3 3v10a3 3 0 003 3h16a3 3 0 003-3V7a3 3 0 00-3-3H4zm-.956 2.704A1 1 0 014 6h16a1 1 0 01.956.704l-.02-.03L12 12.789 3.065 6.675l-.02.03zM3 9.054V17a1 1 0 001 1h16a1 1 0 001-1V9.054l-7.87 5.385a2 2 0 01-2.26 0L3 9.054z" clip-rule="evenodd"></path></svg></span></button></div></aside></aside><article class="a1ne38gy"><div><div class="rph6o54"><section class="ch4les4"><style>* { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin-top:0px;margin-right:0px;margin-bottom:0px;margin-left:0px;}.description{font-size:17.6px;}</style><div data-reactroot="" class="body story-image"><img alt="image.jpg" src="https://pocket-syndicated-images.s3.amazonaws.com/5d68083980267.jpg"/><p class="description"><span class="caption"><span class="caption-space"> </span> </span><span class="credit"><i>Calhoun inside Universe 25, his biggest, baddest mouse utopia. Photo: Yoichi R. Okamoto/Public Domain
    </i>.</span></p></div><p class="body"><span>On July 9th, 1968, eight</span> white mice were placed into a strange box at the National Institute of Health in Bethesda, 
<a title="Things to do in Maryland" href="https://www.atlasobscura.com/things-to-do/maryland" data-destination-link-kind="article" data-geo-id="4410" data-title="Maryland" data-slug="maryland">Maryland</a>. Maybe “box” isn’t the right word for it; the space was more like a room, known as Universe 25, about the size of a small storage unit. The mice themselves were bright and healthy, hand-picked from the institute’s breeding stock. They were given the run of the place, which had everything they might need: food, water, climate control, hundreds of nesting boxes to choose from, and a lush floor of shredded paper and ground corn cob.
</p><p class="body">
This is a far cry from a wild mouse’s life—no cats, no traps, no long winters. It’s even better than your average lab mouse’s, which is constantly interrupted by white-coated humans with scalpels or syringes. The residents of Universe 25 were mostly left alone, save for one man who would peer at them from above, and his team of similarly interested assistants. They must have thought they were the luckiest mice in the world. They couldn’t have known the truth: that within a few years, they and their descendants would all be dead.
</p><p class="body">
The man who played mouse-God and came up with this doomed universe was named John Bumpass Calhoun. As Edmund Ramsden and Jon Adams detail in a paper, “
<a href="http://eprints.lse.ac.uk/22514/1/2308Ramadams.pdf">Escaping the Laboratory: The Rodent Experiments of John B. Calhoun & Their Cultural Influence</a>,” Calhoun spent his childhood traipsing around 
<a title="Things to do in Tennessee" href="https://www.atlasobscura.com/things-to-do/tennessee" data-destination-link-kind="article" data-geo-id="4422" data-title="Tennessee" data-slug="tennessee">Tennessee</a>, chasing toads, collecting turtles, and banding birds. These adventures eventually led him to a doctorate in biology, and then a job in 
<a title="Things to do in Baltimore, Maryland" href="https://www.atlasobscura.com/things-to-do/baltimore-maryland" data-destination-link-kind="article" data-geo-id="304" data-title="Baltimore, Maryland" data-slug="baltimore-maryland">Baltimore</a>, where he was tasked with studying the habits of Norway rats, one of the city’s chief pests.
</p><p class="body">
In 1947, to keep a close eye on his charges, Calhoun constructed a quarter-acre “rat city” behind his house, and filled it with breeding pairs. He expected to be able to house 5,000 rats there, but over the two years he observed the city, the population never exceeded 150. At that point, the rats became too stressed to reproduce. They started acting weirdly, rolling dirt into balls rather than digging normal tunnels. They hissed and fought.
</p><p class="body">
This fascinated Calhoun—if the rats had everything they needed, what was keeping them from overrunning his little city, just as they had all of Baltimore?
</p><p class="body">
Intrigued, Calhoun built another, slightly bigger rat metropolis—this time in a barn, with ramps connecting several different rooms. Then he built another and another, hopping between patrons that supported his research, and framing his work in terms of population: How many individuals could a rodent city hold without losing its collective mind? By 1954, he was working under the auspices of the National Institute of Mental Health, which gave him whole rooms to build his rodentopias. Some of these featured rats, while others focused on mice instead. Like a rodent real estate developer, he incorporated ever-better amenities: climbable walls, food hoppers that could serve two dozen customers at once, lodging he described as “walk-up one-room apartments.” 
<a href="https://www.youtube.com/watch?v=0Z760XNy4VM">Video records of his experiments</a> show Calhoun with a pleased smile and a pipe in his mouth, color-coded mice scurrying over his boots.
</p><p class="body">
Still, at a certain point, each of these paradises collapsed. “There could be no escape from the behavioral consequences of rising population density,” Calhoun wrote 
<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1501789/pdf/califmed00143-0080.pdf">in an early paper</a>. Even Universe 25—the biggest, best mousetopia of all, built after a quarter century of research—failed to break this pattern. In late October, the first litter of mouse pups was born. After that, the population doubled every two months—20 mice, then 40, then 80. The babies grew up and had babies of their own. Families became dynasties, carving out and holding down the best in-cage real estate. By August of 1969, the population numbered 620.
</p><p class="body">
Then, as always, things took a turn. Such rapid growth put too much pressure on the mouse way of life. As new generations reached adulthood, many couldn’t find mates, or places in the social order—the mouse equivalent of a spouse and a job. Spinster females retreated to high-up nesting boxes, where they lived alone, far from the family neighborhoods. Washed-up males gathered in the center of the Universe, near the food, where they fretted, languished, and attacked each other. Meanwhile, overextended mouse moms and dads began moving nests constantly to avoid their unsavory neighbors. They also took their stress out on their babies, kicking them out of the nest too early, or even losing them during moves.
</p><div id="RIL_VIDEO_1" class="body RIL_video video_type_1"><object align="middle"><param value="//www.youtube-nocookie.com/v/0Z760XNy4VM" name="movie"/><param value="transparent" name="wmode"/><embed wmode="transparent" type="application/x-shockwave-flash" src="//www.youtube-nocookie.com/v/0Z760XNy4VM"/></object></div><p class="body">
Population growth slowed way down again. Most of the adolescent mice retreated even further from societal expectations, spending all their time eating, drinking, sleeping and grooming, and refusing to fight or to even attempt to mate. (These individuals were forever changed—when Calhoun’s colleague attempted to transplant some of them to more normal situations, they didn’t remember how to do anything.) In May of 1970, just under 2 years into the study, the last baby was born, and the population entered a swan dive of perpetual senescence. It’s unclear exactly when the last resident of Universe 25 perished, but it was probably sometime in 1973.
</p><p class="body">
Paradise couldn’t even last half a decade.
</p><p class="body">
In 1973, Calhoun 
<a href="http://www.ncbi.nlm.nih.gov/pmc/articles/PMC1644264/pdf/procrsmed00338-0007.pdf">published his Universe 25 research</a> as “Death Squared: The Explosive Growth and Demise of a Mouse Population.” It is, to put it lightly, an intense academic reading experience. He quotes liberally from the Book of Revelation, italicizing certain words for emphasis (e.g. “to kill with the 
<em>sword</em> and with 
<em>famine</em> and with 
<em>pestilence</em> and by 
<em>wild beasts</em>”). He gave his claimed discoveries catchy names—the mice who forgot how to mate were “the beautiful ones”’ rats who crowded around water bottles were “social drinkers”; the overall societal breakdown was the “behavioral sink.” In other words, it was exactly the kind of diction you’d expect from someone who spent his entire life perfecting the art of the mouse dystopia.
</p><p class="body">
Most frightening are the parallels he draws between rodent and human society. “I shall largely speak of mice,” he begins, “but my thoughts are on man.” Both species, he explains, are vulnerable to two types of death—that of the spirit and that of the body. Even though he had removed physical threats, doing so had forced the residents of Universe 25 into a spiritually unhealthy situation, full of crowding, overstimulation, and contact with various mouse strangers. To a society experiencing the rapid growth of cities—and reacting, in various ways, 
<a href="http://www.theatlantic.com/business/archive/2015/07/white-flight-alive-and-well/399980/">quite poorly</a><strong>—</strong>this story seemed familiar. Senators brought it up in meetings. It showed up in science fiction and comic books. Even Tom Wolfe, never lost for description, used Calhounian terms to describe 
<a title="Things to do in New York, New York" href="https://www.atlasobscura.com/things-to-do/new-york" data-destination-link-kind="article" data-geo-id="108" data-title="New York, New York" data-slug="new-york">New York</a> City, calling all of Gotham a “behavioral sink.”
</p><div data-reactroot="" class="body story-image"><img alt="image2.jpg" src="https://pocket-syndicated-images.s3.amazonaws.com/5d6808714bb1b.jpg"/><p class="description"><span class="caption"><span class="caption-space"> </span> </span><span class="credit"><i>Calhoun in 1986, nearly forty years after his first experiments. Photo: Cat Calhoun/CC BY-SA 3.0
    </i>.</span></p></div><p class="body">
Convinced that he had found a real problem, Calhoun quickly began using his mouse models to try and fix it. If mice and humans weren’t afforded enough physical space, he thought, perhaps they could make up for it with 
<em>conceptual</em> space—creativity, artistry, and the type of community not built around social hierarchies. His later Universes were designed to be spiritually as well as physically utopic, with rodent interactions carefully controlled to maximize happiness (he was particularly fascinated by some early rats who had created an innovative form of tunneling, where they rolled dirt into balls). He extrapolated this, too, to human concerns, becoming an early supporter of environmental design and H.G. Wells’s hypothetical “World Brain,” an international information network that was a clear precursor to the internet.
</p><p class="body">
But the public held on hard to his earlier work—as Ramsden and Adams put it, “everyone want[ed] to hear the diagnosis, no one want[ed] to hear the cure.” Gradually, Calhoun lost attention, standing, and funding. In 1986, he was forced to retire from the National Institute of Mental Health. Nine years later, he died.
</p><p class="body">
But there was one person who paid attention to his more optimistic experiments, a writer named Robert C. O’Brien. In the late ’60s, O’Brien allegedly 
<a href="https://www.washingtonpost.com/archive/lifestyle/1982/07/21/rats-the-real-secret-of-nimh/9d314dfc-e650-4705-822e-a56b954c8a2d/">visited Calhoun’s lab</a>, met the man trying to build a true and creative rodent paradise, and took note of the Frisbee on the door, the scientists’ own attempt “to help when things got too stressful,” as Calhoun put it. Soon after, O’Brien wrote 
<em>Ms. Frisby and the Rats of NIMH</em>—a story about rats who, having escaped from a lab full of blundering humans, attempt to build their 
<em>own</em> utopia. Next time, maybe we should put the rats in charge.`,
            fullScreenHtml:false,
            currentTime:" ",
            list_of_files:[],
            reqPerSec:" ",
            bytesPerReq: " ",
            cpuLoad:" ",
            serverVersion:"",
            serverUptime:"",
            totalAcesses:"",
            restartTime:""
        };
        this.handleFullScreenClick=this.handleFullScreenClick.bind(this);
        this.homePage=this.homePage.bind(this);
        this.handleFullScreenClose=this.handleFullScreenClose.bind(this);
        this.handleHomePageDownload=this.handleHomePageDownload.bind(this);
        this.setdata=this.setdata.bind(this);
    }
    componentDidMount()
    {
        setTimeout(this.loaddata(),100000);
    }
    loaddata()
    {
    this.setState({openBackdrop:true})
    fetch('http://192.168.43.172:5000/webserver').then(response => {
        return response.json()
    }).then(users => {
        this.setState({result: users});
        this.setdata();
    });
    }
    setdata()
    {
        var list_of_files=[];
        var resultfiles=this.state.result["list_files_html"];
        for(var i=0;i<resultfiles.length;i++)
        {
            list_of_files.push({'file':resultfiles[i]});
        }
        console.log();
        var time=this.state.result["status"]["CurrentTime"];
        var restartTime=this.state.result["status"]["RestartTime"];
        var reqPerSec=this.state.result["status"]["ReqPerSec"];
        var bytesPerReq=this.state.result["status"]["BytesPerSec"]
        var cpuLoad=this.state.result["status"]["CPULoad"];
        var serverVersion=this.state.result["status"]["ServerVersion"];
        var serverUptime=this.state.result["status"]["ServerUptime"];
        var totalAcesses=this.state.result["status"]["Total Accesses"];
        var html=this.state.result["home_page_html"]
        this.setState({homePageHtml:html,restartTime:restartTime,bytesPerReq:bytesPerReq,list_of_files:list_of_files,currentTime:time,reqPerSec:reqPerSec,cpuLoad:cpuLoad,serverUptime:serverUptime,serverVersion:serverVersion,totalAcesses:totalAcesses,openBackdrop:false});
        
    }   
    handleFullScreenClick()
    {
        this.setState({fullScreenHtml:true})
    }
    handleFullScreenClose()
    {
        this.setState({fullScreenHtml:false})
    }
    handleHomePageDownload()
    {
        var fileDownload = require('js-file-download');
        fileDownload(this.state.homePageHtml, 'HomePage.html');
    }
    homePage()
    {
        if(this.state.fullScreenHtml==true)
        {
             
            return (
                <Dialog fullScreen open={this.state.fullScreenHtml} onClose={this.handleFullScreenClose}>
                    <AppBar>
                        <Toolbar>
                        <Tooltip title="Close">
                        <IconButton edge="start" color="inherit" onClick={this.handleFullScreenClose} aria-label="close">
                        <CloseIcon />
                        </IconButton>
                        </Tooltip>
                        <Typography variant="h6">
                            Home Page
                        </Typography>
                        <Tooltip title="Download Html">
                        <IconButton  style={{marginLeft:"82vw"}} color="inherit" onClick={this.handleHomePageDownload} aria-label="download">
                        <CloudDownloadTwoToneIcon />
                        </IconButton>
                        </Tooltip>
                        </Toolbar>
                    </AppBar>
                    <Paper>
                    <div>
                        <br/><br/>
                    <div dangerouslySetInnerHTML={{__html:this.state.homePageHtml}}/>
                    </div>
                    </Paper>
                </Dialog>   
            )
        }
    }
    createData(ip, timestamp, where) {
        return {ip, timestamp, where};
    }
    render()
    {
        const cpuLoad = parseFloat(this.state.cpuLoad);
        const storage = this.state.storage;
        const ram = this.state.ram;
        const rows = [
            this.createData('172.156.111.23', '18:04', 'tty1'),
            this.createData('192.123.13.22', '19:40', 'tty1'),
            this.createData('200.23.233.101', '3:00', 'tty2'),
            this.createData('120.149.33.42', '12:00', 'tty1'),
        ];
        const list_of_files=this.state.list_of_files;
        return (
            <div>
                <br/>
                <div
                    style
                    ={{
                    backgroundColor:"darkgoldenrod",
                }}>
                    <h1
                        style={{
                        color: "White",
                        textAlign: "center"
                    }}>
                        {this.props.webserverName.toUpperCase()} {"  "}
                         STATISTICS</h1>
                    <Divider/>
                </div>
                <div style={{
                    height: "20px"
                }}/>
                <Backdrop style={{zIndex:"1000"}}open={this.state.openBackdrop}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                <div style={{display:"inline"}}>
                <h4 style={{color:"rebeccapurple"}}>Version: {this.state.serverVersion}</h4>
                <IconButton style={{marginLeft:"95%",display:"inline-block"}} onClick={()=>{this.loaddata()}}>
                    <RefreshIcon/>
                </IconButton>
                </div>
                <Grid container justify="center">
                    <Grid item sm={2}>
                        <div style={{borderStyle: "solid",borderColor:"lightslategray",height:"100%",backgroundColor:"lightgrey"}}>
                        <h5 style={{paddingLeft:"3vw"}}>CURRENT TIME</h5>
                        <Divider/>
                        <h5 style={{paddingLeft:"3vw"}}><b>{this.state.currentTime}</b></h5>
                        </div>
                    </Grid>
                      
                    <Grid item sm={2}>
                    <div style={{borderStyle: "solid",borderColor:"lightslategray",height:"100%",backgroundColor:"lightgrey"}}>
                        <h5 style={{paddingLeft:"2vw"}}>SERVER RESTART TIME</h5>
                        <Divider/>
                        <h5 style={{paddingLeft:"3vw"}}><b>{this.state.restartTime}</b></h5>
                        </div>
                    </Grid>
                    <Grid item sm={2}>
                    <div style={{borderStyle: "solid",borderColor:"lightslategray",height:"100%",backgroundColor:"lightgrey"}}>
                        <h5 style={{paddingLeft:"2vw"}}>REQUEST PER SECOND</h5>
                        <Divider/>
                        <h5 style={{paddingLeft:"3vw"}}><b>{this.state.reqPerSec}</b></h5>
                        </div>

                    </Grid>
                    <Grid item sm={2}>
                        <div style={{borderStyle: "solid",borderColor:"lightslategray",height:"100%",backgroundColor:"lightgrey"}}>
                        <h5 style={{paddingLeft:"2vw"}}>BYTES PER REQUEST</h5>
                        <Divider/>
                        <h5 style={{paddingLeft:"3vw"}}><b>{this.state.bytesPerReq}</b></h5>
                        </div>
                    </Grid>
                    <Grid item sm={2}>
                    <div style={{borderStyle: "solid",borderColor:"lightslategray",height:"100%",backgroundColor:"lightgrey"}}>
                        <h5 style={{paddingLeft:"2vw"}}>SERVER UPTIME</h5>
                        <Divider/>
                        <h5 style={{paddingLeft:"3vw"}}><b>{this.state.serverUptime}</b></h5>
                        </div>
                    </Grid>
                    <Grid item sm={2}>
                    <div style={{borderStyle: "solid",borderColor:"lightslategray",height:"100%",backgroundColor:"lightgrey"}}>
                        <h5 style={{paddingLeft:"2vw"}}>TOTAL ACCESSES</h5>
                        <Divider/>
                        <h5 style={{paddingLeft:"3vw"}}><b>{this.state.totalAcesses}</b></h5>
                        </div>
                    </Grid>
                </Grid>
                <br/>
                <Grid container spacing={4} justify="center">
                    <Grid item sm={6}>
                        <Card
                            style={{
                            backgroundColor: "#FFFAFA"
                        }}>
                            <CardMedia
                                image="ram.gif"
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
                                                "caption": "CPU Utilization %",
                                                "subCaption": "Your OS",
                                                "defaultCenterLabel": "CPU Utilization",
                                                "centerLabel": "$label: $value",
                                                "decimals": "5",
                                                "pieRadius":"100",
                                                "doughnutRadius":"50",
                                                "theme": "fusion",
                                                "showborder": "1",
                                                "showshadow": "1",
                                                "enablerotation": "1",
                                                "enablesmartlabel": "1",
                                                "centerLabelFontSize": "10",
                                                "labelFontSize": "15",
                                                "captionFontSize": "40",
                                                "centerLabelBold": "1",
                                            },
                                            "data": [
                                                {
                                                    "label": "CPU Utilization",
                                                    "value": `${cpuLoad}`,
                                                    "color": "#3CB371"
                                                }, {
                                                    "label": "",
                                                    "value": 100 - `${cpuLoad}`,
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
                                }}>TOTAL REQUESTS MADE</h1>
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
                                                <TableCell align="right">
                                                    <b>Ip Address</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>TimeStamp</b>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <b>Where</b>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.ip}>
                                                    <TableCell component="th" scope="row">
                                                        {row.ip}
                                                    </TableCell>
                                                    <TableCell align="right">{row.timestamp}</TableCell>
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

                <div style={{
                    height: "20px"
                }}/>
                <Grid container spacing={4}>
                    <Grid item sm={6}>
                    </Grid>
                    <Grid item sm={6}>
                      </Grid>
                    <Grid item sm={6}>
                        <Card>
                            <CardMedia
                                style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "#B6D0E2"

                            }}>
                                <h1
                                    style={{
                                    color: "#088F8F",
                                    fontSize: "2.5vw",
                                    fontWeight: "bolder",
                                    textAlign: "center"
                                }}>VIEW YOUR HOME PAGE</h1>
                            </CardMedia>                          
                       
                        <CardContent style={{height:"50vh",maxHeight:"50vh",backgroundColor:"#e9d8d4"}}>
                        <IconButton
                            aria-label="User"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={this.handleFullScreenClick}
                            style={{
                                right: "-43vw",
                            }}
                        >
                        <FullscreenIcon />
                        </IconButton>
                        {this.homePage()}
                        <Paper>
                            Click on full screen button to view your home page   
                        </Paper>
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
                                }}>LIST OF FILES</h1>
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
                                                    <b>File Name</b>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {list_of_files.map((row) => (
                                                <TableRow key={row.ip}>
                                                    <TableCell component="th" scope="row">
                                                        {row.file}
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
                <Divider/>
                <br/>
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

export default WebServerDashboard;