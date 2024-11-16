const FilterRegion = ({ region, setRegion }) => {
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
    return (
      <div className="relative min-w-[200px]">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full appearance-none py-4 px-6 pr-12 rounded-lg shadow-md
            bg-white dark:bg-dark-elements
            text-gray-900 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700
            transition-all duration-300 ease-in-out
            cursor-pointer text-sm md:text-base"
        >
          <option value="">Filter by Region</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-gray-400 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    );
  };
  
  export default FilterRegion;