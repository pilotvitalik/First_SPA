import React from 'react';
import clas from './Sidebar.module.css';
import Navbar from './navbar/Navbar';

function Sidebar(){
	return(
		<div className={clas.sidebar}>
			<Navbar />
		</div>
	);
}

export default Sidebar;