import styled from "styled-components/macro";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export function CharacterCard({ person }) {
  return (
    <CharacterCardStyles>
      <header>{person.name}</header>
      <p>Gender: {person.gender}</p>
      <p>Birth year: {person.birthYear}</p>
      <p>Species: {person.species ? person.species.name : "Human"}</p>
      <p>Homeworld: {person.homeworld.name}</p>
      <p>Hair color: {person.hairColor}</p>
      <Grid container>
        <Grid item xs={1}>
          <VisibilityIcon />
        </Grid>
        <Grid item xs={5}>
          <Typography>Eye color: {person.eyeColor}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <p>Height: {person.height}cm</p>
        </Grid>
        <Grid item xs={6}>
          <p>Mass: {person.mass}kg</p>
        </Grid>
      </Grid>
    </CharacterCardStyles>
  );
}

const CharacterCardStyles = styled.div`
  flex: 0 0 20em;
  font-size: 25px;

  border-radius: 6px;
  background-color: #346751;
  //#C84B31 is a nice color too
  padding: 15px;
  margin: 30px auto;

  header {
    font-size: 35px;
  }

  .MuiSvgIcon-root {
    vertical-align: middle;
  }
  .MuiTypography-root {
    font-size: 25px;
    vertical-align: middle;
  }
`;
