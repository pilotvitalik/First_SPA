import React from 'react';
import Avatar from './common_comp/Avatar.jsx'
import clas from './Post.module.css';

function Post(){
	return(
		<div className={clas.post}>
			<div>
				<Avatar />
			</div>
			<div>
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