import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import My_page from './My_page/My_page';
import Messages from './messages/Messages';
import {BrowserRouter,Route} from 'react-router-dom';
import './Main.module.css';

function Main(props){
	return(
		<BrowserRouter>
			<main>
			   	<Sidebar />
			   	<Route path = '/my_page' render = { () => <My_page postData = {props.state.myPage.postData}/>} />
			   	<Route path = '/messages' render = { () => <Messages Data = {props.state.messages.Data} Mes = {props.state.messages.Mes}/>} />
		    </main>	
    	</BrowserRouter>
	);
}  

export default Main;
