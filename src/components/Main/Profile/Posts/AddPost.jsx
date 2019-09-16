import React from 'react';
import Avatar from './common_comp/Avatar.jsx'
import clas from './AddPost.module.css';

const AddPost = () => {
	return(
		<form className={clas.addPost}>
			<div>
				<Avatar />
				<label>Поделитесь о чем Вы думаете...</label>
				<textarea id='_1'></textarea>
			</div>
			<button type='button'>Отправить</button>
		</form>
	);
}

export default AddPost;