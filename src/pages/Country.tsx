import { useNavigate, useParams } from 'react-router-dom'
import { useGetCountryQuery } from '../app/feature/CountrySlice'
import { IoIosArrowRoundBack } from 'react-icons/io'

const Country = () => {
    const navigate = useNavigate()
    const { name } = useParams()
    const { isLoading, data, error } = useGetCountryQuery({ name: name })
    if (isLoading) {
        return (
            <div className='container my-12 animate-pulse'>
                <div>
                    <div className="w-32 h-12 bg-gray-200 shadow-md rounded-lg"></div>
                </div>
                <div role="status" className="grid lg:grid-cols-2 gap-24 mt-12">
                    <div className="flex items-center justify-center h-[400px] bg-gray-300">
                        <svg className="w-10 h-10 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        </svg>
                    </div>
                    <div className="xl:pt-8">
                        <div className="w-3/4 h-2 bg-gray-200 rounded-full"></div>
                        <div className='grid gap-8 md:grid-cols-2 md:gap-24 mt-10'>
                            <div className='space-y-4'>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className='space-y-4'>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                                <div className="h-2 bg-gray-200 rounded-full"></div>
                            </div>
                        </div>
                        <div className='mt-20 flex items-center gap-4 flex-wrap'>
                            <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                            <ul className='inline-flex gap-2 flex-wrap'>
                                {Array.from({ length: 3 }).map((_, idx) => (
                                    <li className='border-country w-20 h-9 bg-gray-200 shadow-md rounded-lg' key={idx}></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
    if (error) {
        return <div>error</div>
    }
    console.log(data)
    if (data) {
        return (
            <div className='country-details container my-12'>
                <div>
                    <button className='back-btn shadow-md rounded-lg pl-6 pr-8 py-2.5 flex items-center gap-1 font-light'
                        onClick={() => navigate(-1)}>
                        <IoIosArrowRoundBack size={25} /> Back
                    </button>
                </div>
                <div className="grid lg:grid-cols-2 gap-24 mt-12">
                    <div>
                        <img className='mx-auto w-full md:w-[500px] lg:w-[800px]' src={data[0].flags.png} alt="" />
                    </div>
                    <div className='xl:pt-8'>
                        <h3 className='text-2xl font-bold'>{data[0].name.common}</h3>
                        <div className='grid gap-8 md:grid-cols-2 md:gap-24 mt-6'>
                            <div className='space-y-2'>
                                <p className="font-light"><b className="font-semibold">Native Name: </b> {data[0].altSpellings[1]} </p>
                                <p className="font-light"><b className="font-semibold">Population:</b> {data[0].population}</p>
                                <p className="font-light"><b className="font-semibold">Region:</b> {data[0].region}</p>
                                <p className="font-light"><b className="font-semibold">Sub Region:</b> {data[0].subregion}</p>
                                <p className="font-light"><b className="font-semibold">Capital:</b> {data[0].capital}</p>
                            </div>
                            <div className='space-y-2'>
                                <p className="font-light"><b className="font-semibold">Top Level Domain:</b> {data[0].tld[0]}</p>
                                <p className="font-light">
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
                                <p className="font-light">
                                    <b className="font-semibold">
                                        Languages:{" "}
                                    </b>
                                    <span>
                                        {Object.values(data[0].languages).join(', ')}
                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className='mt-12 flex items-center gap-4 flex-wrap'>
                            <p><b className='font-semibold'>Border Countries:</b></p>
                            {data[0].borders ? (
                                <ul className='inline-flex gap-2 flex-wrap'>
                                    {data[0]?.borders?.map((border) => (
                                        <li className='border-country shadow-md rounded-md px-6 py-2 text-sm' key={border}>{border}</li>
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