// FilterPanel Component


function FilterPanel({ filters, onFilterChange, onReset, show }) {
  if (!show) return null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
          <select
            value={filters.cuisine}
            onChange={(e) => onFilterChange({ ...filters, cuisine: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none"
          >
            <option value="">All Cuisines</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Diet Type</label>
          <select
            value={filters.isVegetarian}
            onChange={(e) => onFilterChange({ ...filters, isVegetarian: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none"
          >
            <option value="">All Types</option>
            <option value="true">Vegetarian</option>
            <option value="false">Non-Vegetarian</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max Prep Time</label>
          <select
            value={filters.maxPrepTime}
            onChange={(e) => onFilterChange({ ...filters, maxPrepTime: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none"
          >
            <option value="">Any Duration</option>
            <option value="30">Under 30 min</option>
            <option value="60">Under 60 min</option>
            <option value="120">Under 2 hours</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onReset}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
export default FilterPanel;