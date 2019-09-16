import React from 'react';
import clas from './Header.module.css';

const Header = () => {
	return(
	    <header>
	    	<div>
	    		<div className={clas.img}>
		     		<img src='https://html.crumina.net/html-olympus/img/logo.png' alt='logo' className = 'logo'/>
		     		<h6>Olympus</h6>
	    		</div>
	    	</div>
		</header>	
	);
}

export default Header