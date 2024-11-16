import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CountryInfo = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
        setCountry(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country:', error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!country) return <div className="text-center py-8">Country not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-2 rounded-md shadow-md mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-auto shadow-md"
          />

          <div className="dark:text-white">
            <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p><span className="font-semibold">Native Name:</span> {Object.values(country.name.nativeName)[0].common}</p>
                <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {country.region}</p>
                <p><span className="font-semibold">Sub Region:</span> {country.subregion}</p>
                <p><span className="font-semibold">Capital:</span> {country.capital?.[0]}</p>
              </div>
              <div>
                <p><span className="font-semibold">Top Level Domain:</span> {country.tld?.[0]}</p>
                <p><span className="font-semibold">Currencies:</span> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
                <p><span className="font-semibold">Languages:</span> {Object.values(country.languages).join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;