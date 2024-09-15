import DropDown from './ui/DropDown'
import SearchBar from './ui/SearchBar'

const Filtering = () => {
    return (
        <div className='flex items-center justify-between mb-10'>
            <SearchBar />
            <DropDown />
        </div>
    )
}

export default Filtering