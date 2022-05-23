import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Route } from "react-router-dom";

import axios from 'axios';

const BASE_URL = "https://dashboard.addictproxies.com/api/";

const getCookie = function(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') {
		c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
		return c.substring(name.length, c.length);
		}
	}
	return "";
}

const setCookie = function(cname, cvalue, exdays=0) {
	console.log('setC')
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = ""
	if (exdays!==0)
	{
		expires = ";expires="+ d.toUTCString();
	}

	let cookie = cname + "=" + cvalue + expires + ";path=/";
	//console.log(cookie);

	document.cookie = cookie;
}

const deleteCookie = function( name, path, domain ) {
	if ( getCookie( name ) ) {
		document.cookie = name + "=" +
		((path) ? ";path="+path:"")+
		((domain)?";domain="+domain:"") +
		";expires=Thu, 01 Jan 1970 00:00:01 GMT";
	}
}

axios.interceptors.request.use(function (config) {
    // const token = getCookie('tokenAuth');
	
	// //console.log(token)
    // if (token!=="")
	// {
	// 	config.headers.Authorization = token;
	// }

    return config;
});

ReactDOM.render(
	<Route>
		<App />
	</Route>,
	document.getElementById("root")
);

export {BASE_URL, deleteCookie, getCookie, setCookie};