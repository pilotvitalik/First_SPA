import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import My_page from './My_page/My_page';
import Messages from './messages/Messages';
import {BrowserRouter,Route} from 'react-router-dom';
import './Main.module.css';

function Main(){
	return(
		<BrowserRouter>
			<main>
			   	<Sidebar />
			   	<Route path = '/my_page' component={My_page}/>
			   	<Route path = '/messages' component={Messages}/>
		    </main>	
    	</BrowserRouter>
	);
}  

export default Main;
