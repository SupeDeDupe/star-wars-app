import "./App.css";
import {CharacterCard} from "./CharacterCard"

function App() {
  return (
    <div className="App">
      <CharacterCard 
        name={"Luke Skywalker"} 
        gender={"Male"}
        species={"Human"}
        homeworld={"Tatooine"}
        eyeColor={"Blue"}
        height={172}
        mass={77}
      />
    </div>
  );
}

export default App;
