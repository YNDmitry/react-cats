import React from 'react'
import Card from '../card/card.component'
import { iUsersListObject } from './card-list.interface'
import './card-list.styles.css'

const CardList: React.FC<iUsersListObject> = ({ users }) => {
	return users.length > 0 ? (
		<div className='cards'>
			{users.map((el) => {
				return <Card user={el} key={el.id} />
			})}
		</div>
	) : (
		<h1 className='text-center'>Cats not found...</h1>
	)
}

export default CardList
