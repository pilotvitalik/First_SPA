import React from 'react'
import clas from './Messages.module.css'
import User from './components/user/User'
import Message from './components/message/Message'

function Messages(){
	let Data = [
	{id: 1, name: 'Andrew'}, 
	{id: 2,	name: 'Elena'}, 
	{id: 3, name: 'Dmitriy'}, 
	{id: 4, name: 'Alexander'}
	]

	let Mes = [
	{id: 1, mes: 'Hi'}, 
	{id: 2,	mes: 'Hi! How are you?'}, 
	{id: 3, mes: 'Fine, thanks'}
	]

	return(
		<div className={clas.messages}>
			<div className={clas.user}>
				<User name={Data[0].name} id={Data[0].id}/>
				<User name={Data[1].name} id={Data[1].id}/>
				<User name={Data[2].name} id={Data[2].id}/>
				<User name={Data[3].name} id={Data[3].id}/>
			</div>
			<div className={clas.communic}>
				<Message mes={Mes[0].mes}/>
				<Message mes={Mes[1].mes}/>
				<Message mes={Mes[2].mes}/>
			</div>
		</div>
	);
}

export default Messages