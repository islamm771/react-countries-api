import CountriesList from '../components/CountriesList';
import Filtering from '../components/Filtering';

const Index = () => {

    return (
        <div className="container mt-10">
            <Filtering />
            <CountriesList />
        </div>
    )
}

export default Index