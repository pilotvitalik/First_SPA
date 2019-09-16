import React from 'react';
import Avatar from './common_comp/Avatar.jsx'
import Textarea from './common_comp/Textarea'
import clas from './Post.module.css';

function Post(props){
	return(
		<div className={clas.post}>
			<div>
				<Avatar />
				<Textarea message={props.message}/>
			</div>
			<div>
				<div>
					{props.like} Likes
				</div>
				<div>
					Like
				</div>
				<div>
					Dislike
				</div>
			</div>
		</div>
	);
}

export default Post;