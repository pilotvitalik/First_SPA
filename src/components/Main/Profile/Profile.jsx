import React from 'react';
import clas from './Profile.module.css';
import AddPost from './Posts/AddPost';
import Post from './Posts/Post';

function Profile(){
	return(
		<div className={clas.content}>
			<div className={clas.author}>
				<img className={clas.img} src='https://www.setaswall.com/wp-content/uploads/2017/03/Waterfall-In-Forest-Wallpaper.jpg' alt='waterfall'/>
				<div className={clas.desc}>
					Description
				</div>
			</div>
			<div className={clas.post}>
				<AddPost />
				<Post message='Hello world!' like='39'/>
				<Post message='Hi piece!' like='50'/>
			</div>
		</div>
	);
}

export default Profile;