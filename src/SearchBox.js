import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components/macro";

export function SearchBox({ searchTerm, onChange }) {
  return (
    <SearchBoxStyles>
      <SearchIcon />
      <input
        className="search-box-input"
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={searchTerm}
      />
    </SearchBoxStyles>
  );
}

const SearchBoxStyles = styled.div`
  position: absolute;
  right: 0;
  max-width: 400px;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;

  input {
    background-color: #161616;
    color: #ecdbba;
    border: 3px solid rgb(211, 211, 211, 0.2);
    border-radius: 4px;
    font-size: 30px;
  }
  input:focus {
    background-color: rgb(211, 211, 211, 0.2);
    border: 1px solid #ecdbba;
  }

  .MuiSvgIcon-root {
    font-size: 30px;
    color: rgb(211, 211, 211);
    margin: 0 10px;
  }
`;
