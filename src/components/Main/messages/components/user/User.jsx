import React from 'react'
import clas from './User.module.css'
import {NavLink} from 'react-router-dom'

const User = (props) => {
	let path = `/messages/${props.id}`
	return(
		<div>
			<NavLink className={clas.item} to={path} activeClassName={clas.active}>
				{props.name}
			</NavLink>
		</div>
	);
}

export default User
