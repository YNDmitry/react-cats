import { Component } from 'react'
import CardList from '../components/card-list/card-list.component'
import SearchBox from '../components/search-box/search-box.component'

interface iState {
	users: Array<{
		id: number
		name: string
		username: string
		email: string
		address: object
		phone: string
		website: string
		company: string
	}>
	searchField: string
}

class App extends Component<{}, iState> {
	state: iState = {
		users: [],
		searchField: '',
	}

	async componentDidMount(): Promise<any> {
		try {
			const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
				res.json()
			)
			this.setState(() => {
				return { users: users }
			})
		} catch (error) {
			console.log(error)
		}
	}

	onSearchChange = (e: { target: { value: string } }): void => {
		const searchField = e.target.value.toLowerCase()

		this.setState(() => {
			return { searchField }
		})
	}

	render() {
		const { users, searchField } = this.state
		const { onSearchChange } = this

		const filteredUsers = users.filter((user) => {
			return user.name.toLowerCase().includes(searchField)
		})

		return (
			<div className='App'>
				<div className='container'>
					<SearchBox name='Cats' placeholder='Search cats' onChangeHandler={onSearchChange} />
					<CardList users={filteredUsers} />
				</div>
			</div>
		)
	}
}

export default App
