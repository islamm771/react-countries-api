import { FaSearch } from 'react-icons/fa';
import { setSearch } from '../../app/feature/CountryFilterSlice';
import { useAppDispatch, useAppSelector } from '../../app/store';

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const { search } = useAppSelector((state) => state.countryFilter);
    const handleChange = (value: string) => {
        dispatch(setSearch(value))
    }

    return (
        <div className="search-con w-full md:w-[400px] shadow-md rounded-lg py-2.5 pr-8 pl-4 relative">
            <input
                className='w-full block p-2.5 outline-none'
                value={search}
                onChange={(e) => { handleChange(e.target.value); }}
                type="text"
                placeholder="Search for a country..."
            />
            <span className='absolute top-6 right-4'>
                <FaSearch color='#858585' />
            </span>
        </div>
    )
}

export default SearchBar