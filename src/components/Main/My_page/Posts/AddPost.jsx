import React from 'react';
import Avatar from './common_comp/Avatar';
import Textarea from './common_comp/Textarea';
import clas from './AddPost.module.css';

const AddPost = (props) => {
	let newPost = React.createRef();
	let addPost = () => {
		let text = newPost.current.value;
		alert('Hello');
	}
	return(
		<form className={clas.addPost}>
			<div>
				<Avatar />
				<label>Поделитесь о чем Вы думаете...</label>
				<textarea className={clas.textarea} ref={newPost}>
				</textarea>
			</div>
			<button type='button' onClick = {addPost}>Отправить</button>
		</form>
	);
}

export default AddPost;