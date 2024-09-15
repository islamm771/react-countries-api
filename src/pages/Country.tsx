import { useNavigate, useParams } from 'react-router-dom'
import { useGetCountryQuery } from '../app/feature/CountrySlice'
import { IoIosArrowRoundBack } from 'react-icons/io'

const Country = () => {
    const navigate = useNavigate()
    const { name } = useParams()
    const { isLoading, data, error } = useGetCountryQuery({ name: name })
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>error</div>
    }
    console.log(data)
    if (data) {
        return (
            <div className='container my-12'>
                <div>
                    <button className='shadow-md rounded-lg pl-6 pr-8 py-2.5 flex items-center gap-1'
                        onClick={() => navigate(-1)}>
                        <IoIosArrowRoundBack size={25} /> Back
                    </button>
                </div>
                <div className="grid lg:grid-cols-2 gap-24 mt-12">
                    <div>
                        <img className='mx-auto md:w-[500px] lg:w-[800px]' src={data[0].flags.png} alt="" />
                    </div>
                    <div className='xl:pt-8'>
                        <h3 className='text-2xl font-bold'>{data[0].name.common}</h3>
                        <div className='grid gap-8 md:grid-cols-2 md:gap-24 mt-6'>
                            <div className='space-y-2'>
                                <p><b className="font-semibold">Native Name: </b> {data[0].altSpellings[1]} </p>
                                <p><b className="font-semibold">Population:</b> {data[0].population}</p>
                                <p><b className="font-semibold">Region:</b> {data[0].region}</p>
                                <p><b className="font-semibold">Sub Region:</b> {data[0].subregion}</p>
                                <p><b className="font-semibold">Capital:</b> {data[0].capital}</p>
                            </div>
                            <div>
                                <p><b className="font-semibold">Top Level Domain:</b> {data[0].tld[0]}</p>
                                <p>
                                    <b className="font-semibold">
                                        Currencies:{" "}
                                    </b>
                                    {Object.keys(data[0].currencies).map((curr, index) => (
                                        <span key={curr}>
                                            {data[0].currencies[curr].name}
                                            {index < Object.keys(data[0].currencies).length - 1 ? ', ' : ''}
                                        </span>
                                    ))}
                                </p>
                                <p>
                                    <b className="font-semibold">
                                        Languages:{" "}
                                    </b>
                                    <span>
                                        {Object.values(data[0].languages).join(', ')}
                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className='mt-12'>
                            <span><b className='font-semibold 2xl:mr-4'>Border Countries:</b></span>
                            {data[0].borders ? (
                                <ul className='inline-flex gap-2 flex-wrap mt-4 2xl:mt-0'>
                                    {data[0]?.borders?.map((border) => (
                                        <li className='shadow-md rounded-md px-6 py-2 text-sm' key={border}>{border}</li>
                                    ))}
                                </ul>) :
                                <p>No border countries available.</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}

export default Country