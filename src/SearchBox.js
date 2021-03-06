import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from '@material-ui/core';
import styled from "styled-components/macro";
import { useRef } from "react";
import PropTypes from "prop-types";

export function SearchBox({ searchTerm, onChange }) {
  const inputRef = useRef(null);
  const handleClick = (e) => {
    inputRef.current.focus();
  }

  return (
    <SearchBoxStyles>
      <IconButton onClick={handleClick}>
        <SearchIcon />
      </IconButton>
      
      <input
        ref={inputRef}
        className="search-box-input"
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={searchTerm}
      />
    </SearchBoxStyles>
  );
}

SearchBox.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func
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
  }
`;
