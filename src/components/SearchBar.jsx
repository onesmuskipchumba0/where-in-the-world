import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">
      <MagnifyingGlassIcon className="h-5 w-5 absolute left-6 top-1/2 -translate-y-1/2 text-dark-gray dark:text-white" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-search"
      />
    </div>
  );
};

export default SearchBar;