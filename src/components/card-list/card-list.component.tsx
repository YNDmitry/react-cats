import { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

interface iUsersListObject {
	id: number
	name: string
	username: string
	phone: string
	email: string
}

class CardList extends Component<{ users: Array<iUsersListObject> }> {
	render() {
		const { users } = this.props

		return (
			<div className='cards'>
				{users.length > 0 ? (
					users.map((el) => {
						return <Card user={el} key={el.id} />
					})
				) : (
					<h1>Cats not found :(</h1>
				)}
			</div>
		)
	}
}

export default CardList
