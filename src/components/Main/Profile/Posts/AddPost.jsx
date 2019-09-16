import React from 'react';
import Avatar from './common_comp/Avatar';
import Textarea from './common_comp/Textarea';
import clas from './AddPost.module.css';

const AddPost = () => {
	return(
		<form className={clas.addPost}>
			<div>
				<Avatar />
				<label>Поделитесь о чем Вы думаете...</label>
				<Textarea />
			</div>
			<button type='button'>Отправить</button>
		</form>
	);
}

export default AddPost;