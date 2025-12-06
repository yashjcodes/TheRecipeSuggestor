// SearchBar Component
import { Search, Filter } from 'lucide-react';
function SearchBar({ searchQuery, onSearchChange, onSearch, onToggleFilters }) {
  
  return (
    <div className="flex gap-3">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search recipes or ingredients..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        />
      </div>
      <button
        onClick={onToggleFilters}
        className="px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2"
      >
        <Filter className="w-5 h-5" />
        Filters
      </button>
      <button
        onClick={onSearch}
        className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all font-medium shadow-md"
      >
        Search
      </button>
    </div>
  );
}
export default SearchBar;