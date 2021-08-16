import styled from "styled-components/macro";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export function CharacterCard({name, gender, eyeColor, height, mass, species, homeworld}) {
    return (
        <CharacterCardStyles>
            <header>
                {name}
            </header>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Homeworld: {homeworld}</p>
            <Grid container>
                <Grid item xs={1}>
                    <VisibilityIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography>Eye color: {eyeColor}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={4}>
                    <p>Height: {height}cm</p>
                </Grid>
                <Grid item xs={4}>
                    <p>Mass: {mass}kg</p>
                </Grid>
            </Grid>
        </CharacterCardStyles>
    )
}

const CharacterCardStyles = styled.div`
width: 40%;
height: 100%;
border-radius: 6px;
background-color: #346751;
//#C84B31 is a nice color too
padding: 15px;
margin: 50px;
`;
