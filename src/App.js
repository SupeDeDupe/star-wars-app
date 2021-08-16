import { useQuery } from "@apollo/client";
import "./App.css";
import {CharacterCard} from "./CharacterCard"
import { GET_CHARACTERS } from "./GraphQL";

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  console.log(data);
  return (
    <div className="App">
        {data ? data.allPeople.people.map((person) => 
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
          ) : loading ? 
          <div>loading characters...</div> : 
          <div>I guess the data just isn't coming 🤷</div>
        }
    </div>
  );
}

export default App;

