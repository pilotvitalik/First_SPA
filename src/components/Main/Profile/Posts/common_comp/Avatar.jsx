import React from 'react';
import clas from './css/Avatar.module.css';

function Avatar(){
	return(
		<img className={clas.img} src='https://i.pinimg.com/originals/99/db/2e/99db2e985dbafb13a033f9ae7c345669.jpg' alt='avatar'/>
	);
}

export default Avatar;