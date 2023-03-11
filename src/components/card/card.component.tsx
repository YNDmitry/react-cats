import { Component } from 'react'
import './card.styles.css'

interface iProps {
	user: {
		id: number
		name: string
		username: string
		phone: string
		email: string
	}
}

class Card extends Component<iProps> {
	render() {
		const { user } = this.props
		return (
			<div key={user.id} className='cards__card'>
				<img
					src={`https://robohash.org/${user.id}?set=set4`}
					alt={`cat ${user.name}`}
					width='150'
				/>
				<h1>
					{user.name} - {user.username}
				</h1>
				<div className='cards__card-info'>
					<div>Call me - {user.phone}</div>
					<div>{user.email}</div>
				</div>
			</div>
		)
	}
}

export default Card
