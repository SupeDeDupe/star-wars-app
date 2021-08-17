export function SearchBox({ searchTerm, onChange }) {
  return (
    <input
      className="search-box"
      type="text"
      placeholder="Search"
      onChange={onChange}
      value={searchTerm}
    />
  );
}
