import { Link } from "react-router-dom"
import { ICountry } from "../interface"

interface IProps {
    country: ICountry
}

const CountryCard = ({ country }: IProps) => {

    return (
        <div className="country shadow-md rounded-lg">
            <div className="w-full h-[200px] lg:h-[150px]">
                <img className="w-full h-full object-cover rounded-t-lg" src={country.flags.svg} alt="" />
            </div>
            <div className="px-4 pt-6 pb-8">
                <h2 className="font-bold text-xl mb-3">
                    <Link to={`/${country.name.common}`}>{country.name.common}</Link>
                </h2>
                <p className="font-light"><b className="font-semibold">Population:</b> {country.population}</p>
                <p className="font-light"><b className="font-semibold">Region:</b> {country.region}</p>
                <p className="font-light"><b className="font-semibold">Capital:</b> {country.capital}</p>
            </div>
        </div>
    )
}


export default CountryCard


