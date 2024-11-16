const FilterRegion = ({ region, setRegion }) => {
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  
    return (
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="p-3 rounded-md shadow-md
          bg-white dark:bg-dark-secondary
          focus:outline-none"
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