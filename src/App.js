import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { GET_CHARACTERS } from "./GraphQL";
import { SearchBox } from "./SearchBox";
import styled from "styled-components/macro";

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const people = searchTerm
    ? data?.allPeople?.people.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data?.allPeople?.people;

  return (
    <AppStyles>
      <div className="app-title-container">
        <h1 style={{ margin: "auto" }}>Star Wars Characters 🚀</h1>
        <SearchBox searchTerm={searchTerm} onChange={handleSearchTermChange} />
      </div>

      <div className="character-card-container">
        {data ? (
          people.map((person) => (
            <CharacterCard key={person.name} person={person} />
          ))
        ) : loading ? (
          <div>loading characters...</div>
        ) : error ? (
          <div>Oops there seems to be an error!</div>
        ) : (
          <div>I guess the data just isn't coming 🤷</div>
        )}
      </div>
    </AppStyles>
  );
}

export default App;

const AppStyles = styled.div`
  text-align: center;
  align-items: center;
  color: #ecdbba;

  h1 {
    font-size: 50px;
  }

  .app-title-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 50px;
  }

  .character-card-container {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;
  }
`;
