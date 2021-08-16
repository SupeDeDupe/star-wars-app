

export function SearchBox({searchTerm, setSearchTerm}){

    const handleTextChange = (e) => {
        console.log(e);
        setSearchTerm(e.target.value)
    }
    return (
        <input 
            className="search-box" 
            type="text" 
            placeholder="Search"
            onChange={handleTextChange} 
            value={searchTerm}
        />
    )
}