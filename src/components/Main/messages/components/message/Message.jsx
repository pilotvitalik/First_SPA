import React from 'react'
import clas from './Message.module.css'

function Message(props){
	return(
		<div className={clas.mes}>
			<div></div>
			<p>{props.mes}</p>
		</div>
	);
}

export default Message
