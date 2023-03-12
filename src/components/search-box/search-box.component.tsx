import React from 'react'
import { iSearchBox } from './search-box.interface'
import './search-box.styles.css'

const SearchBox: React.FC<iSearchBox> = ({ name, placeholder, onChangeHandler, initialValue }) => {
	return (
		<div className='search-box'>
			<h1>Search {name}</h1>
			<input
				type='search'
				name={name}
				value={initialValue}
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		</div>
	)
}

export default SearchBox
