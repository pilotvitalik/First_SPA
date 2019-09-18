import React from 'react';
import clas from './My_page.module.css';
import AddPost from './Posts/AddPost';
import Post from './Posts/Post';
import Image from './../../../Waterfall-In-Forest-Wallpaper.jpg'

function Profile(){
	let postData = [
		{id: 1, post: 'Hello world!', like: 39},
		{id: 2, post: 'Hi piece!', like: 50}
	]

	let Img = [
		{id: 1, alt: 'waterfall'}
	]
	return(
		<div className={clas.content}>
			<div className={clas.author}>
				<img className={clas.img} src={Image} alt={Img[0].alt}/>
				<div className={clas.desc}>
					Description
				</div>
			</div>
			<div className={clas.post}>
				<AddPost />
				<Post mes={postData[0].post} like={postData[0].like}/>
				<Post mes={postData[1].post} like={postData[0].like}/>
			</div>
		</div>
	);
}

export default Profile;