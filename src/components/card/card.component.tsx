import React from 'react'
import { iUser } from './card.interface'
import './card.styles.css'

const Card: React.FC<iUser> = ({ user }) => {
	const { id, name, username, phone, email } = user

	return (
		<div key={id} className='cards__card'>
			<img src={`https://robohash.org/${id}?set=set4`} alt={`cat ${name}`} width='150' />
			<h1>
				{name} - {username}
			</h1>
			<div className='cards__card-info'>
				<div>Call me - {phone}</div>
				<div>{email}</div>
			</div>
		</div>
	)
}

export default Card
