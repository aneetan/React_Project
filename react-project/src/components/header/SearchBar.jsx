import {Input} from 'antd'

const SearchBar = () => {
    const {Search} = Input
    return(
        <div className='search-btn'>
            <Search
            placeholder='Search here...'
            allowClear  // ads X button to clear
            //enterButton="Search" -----> Adds a button searched
            size='large'
            onSearch={() => {console.log("Searched")}}
            />
        </div>
    )
}

export default SearchBar;