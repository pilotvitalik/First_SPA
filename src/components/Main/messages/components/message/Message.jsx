import React from 'react'
import clas from './Message.module.css'

function Message(props){
	return(
		<div className={clas.mes}>
			{props.mes}
		</div>
	);
}

export default Message
