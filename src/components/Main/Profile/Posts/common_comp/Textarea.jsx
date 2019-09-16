import React from 'react';
import clas from './css/Textarea.module.css';

function Textarea(props){
	return(
		<textarea className={clas.textarea}>
			{props.message}
		</textarea>
	);
}

export default Textarea;