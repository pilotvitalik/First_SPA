import React from 'react';
import clas from './My_page.module.css';
import AddPost from './Posts/AddPost';
import Post from './Posts/Post';
import Image from './../../../Waterfall-In-Forest-Wallpaper.jpg'

function My_page(props){
	let Img = [
		{id: 1, alt: 'waterfall'}
	]
	let post = props.postData.map(post => (<Post mes={post.post} like={post.like} key={post.id}/>))
	return(
		<div className={clas.content}>
			<div className={clas.author}>
				<img className={clas.img} src={Image} alt={Img[0].alt}/>
				<div className={clas.desc}>
					Description
				</div>
			</div>
			<div className={clas.post}>
				<AddPost/>
				{post}
			</div>
		</div>
	);
}

export default My_page;