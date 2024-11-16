const FilterRegion = ({ region, setRegion }) => {
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
    return (
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="p-2 shadow-md rounded-md dark:bg-gray-800 dark:text-white"
      >
        <option value="">Filter by Region</option>
        {regions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    );
  };
  
  export default FilterRegion;