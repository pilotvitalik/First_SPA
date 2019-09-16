import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Profile from './Profile/Profile';
import './Main.module.css';

function Main(){
	return(
	<main>
	   	<Sidebar />
	   	<Profile />
    </main>	
	);
}

export default Main;