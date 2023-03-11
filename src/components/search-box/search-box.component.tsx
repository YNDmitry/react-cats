import { Component } from 'react'
import './search-box.styles.css'

interface iProps {
	name: string
	placeholder: string
	onChangeHandler: any
}

class SearchBox extends Component<iProps> {
	render() {
		const { name, placeholder, onChangeHandler } = this.props

		return (
			<div className='search-box'>
				<h1>Search {name}</h1>
				<input type='search' name={name} placeholder={placeholder} onChange={onChangeHandler} />
			</div>
		)
	}
}

export default SearchBox
