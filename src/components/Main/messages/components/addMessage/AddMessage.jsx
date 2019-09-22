import React from 'react';
import clas from './AddMessage.module.css'

function AddMessage(){
	let new1 = React.createRef();
	let post = () => {
		let text = new1.current.value;
		alert(text);
	}
	return(
		<div className={clas.addMes}>
			<textarea ref={new1}></textarea>
			<button type='button' onClick = {post}>Отправить сообщение</button>
		</div>
	);
}

export default AddMessage;