import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full md:w-[480px]">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-300" />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-4 pl-12 pr-4 rounded-lg shadow-md
          bg-white dark:bg-dark-elements
          text-gray-900 dark:text-white
          placeholder-gray-400 dark:placeholder-gray-300
          focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700
          transition-all duration-300 ease-in-out
          text-sm md:text-base"
      />
    </div>
  );
};

export default SearchBar;