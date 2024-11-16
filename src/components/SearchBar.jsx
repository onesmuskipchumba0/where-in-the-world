import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      <MagnifyingGlassIcon 
        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" 
      />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full md:w-96 pl-10 p-3 rounded-md shadow-md
          bg-white dark:bg-dark-secondary
          text-black dark:text-white
          placeholder-gray-400 dark:placeholder-gray-300
          focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;