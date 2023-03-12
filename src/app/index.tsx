import React, { useEffect, useState, useCallback } from 'react'
import CardList from '../components/card-list/card-list.component'
import SearchBox from '../components/search-box/search-box.component'
import { User } from './index.interface'

const App: React.FC = () => {
	const [users, setUsers] = useState<User[]>([])
	const [filteredUsers, setFilteredUsers] = useState<User[]>([])
	const [searchField, setSearchField] = useState<string>('')

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/users')
				const fetchedUsers: User[] = await response.json()
				setUsers(fetchedUsers)
				setFilteredUsers(fetchedUsers)
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [])

	const filterUsers = useCallback((userArray: User[], searchString: string): void => {
		if (!searchString.trim()) {
			setFilteredUsers(userArray)
		} else {
			const newUsers = userArray.filter((user: User) => {
				return user.name.toLocaleLowerCase().includes(searchString)
			})
			setFilteredUsers(newUsers)
		}
	}, [])

	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = e.target.value.toLowerCase()
		setSearchField(searchFieldString)
	}

	useEffect(() => {
		filterUsers(users, searchField)
	}, [users, searchField, filterUsers])

	return (
		<div className='App'>
			<div className='container'>
				<SearchBox
					name='Cats'
					placeholder='Search cats'
					initialValue={searchField}
					onChangeHandler={onSearchChange}
				/>
				<CardList users={filteredUsers} />
			</div>
		</div>
	)
}

export default App
