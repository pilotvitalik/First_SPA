import React from 'react';
import clas from './css/Navbar.module.css';
import {NavLink} from 'react-router-dom'

function Navbar(){
	return(
		<ul>
			<li><NavLink className={clas.item} to='/my_page' activeClassName={clas.active}>Моя страница</NavLink></li>
			<li><a className={clas.item} href='https://yandex.ru/'>Новости</a></li>
			<li><NavLink className={clas.item} to='/messages' activeClassName={clas.active}>Сообщения</NavLink></li>
			<li><a className={clas.item} href='https://yandex.ru/'>Музыка</a></li>
			<li><a className={clas.item} href='https://yandex.ru/'>Настройка</a></li>
		</ul>
	);
}

export default Navbar