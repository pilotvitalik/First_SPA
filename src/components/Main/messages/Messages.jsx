import React from 'react'
import clas from './Messages.module.css'
import User from './components/user/User'
import Message from './components/message/Message'
import AddMessage from './components/addMessage/AddMessage'

function Messages(props){

	let users = props.Data.map(user => (<User name={user.name} key={user.id} id={user.id}/>))
	let messages = props.Mes.map(mes => (<Message mes={mes.mes} key={mes.id}/>))
	return(
		<div className={clas.messages}>
			<div className={clas.user}>
				{users}
			</div>
			<div className={clas.communic}>
				{messages}
				<AddMessage/>
			</div>
		</div>
	);
}

export default Messages