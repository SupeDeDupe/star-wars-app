import { useQuery } from "@apollo/client";
import { useState } from "react";
import "./App.css";
import { CharacterCard } from "./CharacterCard";
import { GET_CHARACTERS } from "./GraphQL";
import { SearchBox } from "./SearchBox";

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(data);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (e) => {
    console.log(e);
    setSearchTerm(e.target.value);
  };
  const people = searchTerm
    ? data?.allPeople?.people.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data?.allPeople?.people;

  return (
    <div className="App">
      <div className="app-title-container">
        <h1 style={{ margin: "auto" }}>Star Wars Characters 🚀</h1>
        <SearchBox searchTerm={searchTerm} onChange={handleSearchTermChange} />
      </div>

      <div className="character-card-container">
        {data ? (
          people.map((person) => (
            <CharacterCard
              key={person.name}
              name={person.name}
              gender={person.gender}
              birthYear={person.birthYear}
              species={person.species ? person.species.name : "Human"}
              homeworld={person.homeworld.name}
              hairColor={person.hairColor}
              eyeColor={person.eyeColor}
              height={person.height}
              mass={person.mass}
            />
          ))
        ) : loading ? (
          <div>loading characters...</div>
        ) : (
          <div>I guess the data just isn't coming 🤷</div>
        )}
      </div>
    </div>
  );
}

export default App;
