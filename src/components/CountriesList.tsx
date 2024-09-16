import { useGetCountriesQuery } from '../app/feature/CountrySlice'
import { useAppSelector } from '../app/store';
import { ICountry } from '../interface'
import CountryCard from './CountryCard'
import CountrySkeleton from './CountrySkeleton';

const CountriesList = () => {
    const { region, search } = useAppSelector((state) => state.countryFilter);

    // Fetch countries based on region and search from the Redux state
    const { isLoading, data, error } = useGetCountriesQuery({ region, search });

    if (isLoading) {
        return <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
            <CountrySkeleton />
            <CountrySkeleton />
            <CountrySkeleton />
            <CountrySkeleton />
        </div>
    }

    if (error) {
        return <div className='not-found'>Not Found</div>
    }
    if (data) {
        return (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
                {data.map((country: ICountry) => (<CountryCard country={country} key={country.name.common} />))}
            </div>
        )
    }


    return null;
}

export default CountriesList