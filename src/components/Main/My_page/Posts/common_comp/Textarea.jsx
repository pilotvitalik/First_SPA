import React from 'react';
import clas from './css/Textarea.module.css';

function Textarea(props){
	return(
		<textarea className={clas.textarea} value={props.mes}>
		</textarea>
	);
}

export default Textarea;