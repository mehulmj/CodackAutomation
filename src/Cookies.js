import React, {useState} from 'react';
import {useCookies} from 'react-cookie';

const Cookies = (props) => {
    const {emailId, username} = props;
    const [cookies,
        setCookie] = useCookies(['user']);
    setCookie('EmailId', emailId, {
        path: '/',
        maxAge: 3600
    });
    setCookie('Username', username, {
        path: '/',
        maxAge: 3600
    });
    return (<div>Success!</div>);   
};
export default Cookies;