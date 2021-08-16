import styled from "styled-components/macro";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export function CharacterCard({name, gender, birthYear, eyeColor, hairColor, height, mass, species, homeworld}) {
    return (
        <CharacterCardStyles>
            <header>
                {name}
            </header>
            <p>Gender: {gender}</p>
            <p>Birth year: {birthYear}</p>
            <p>Species: {species}</p>
            <p>Homeworld: {homeworld}</p>
            <p>Hair color: {hairColor}</p>
            <Grid container>
                <Grid item xs={1}>
                    <VisibilityIcon />
                </Grid>
                <Grid item xs={5}>
                    <Typography >Eye color: {eyeColor}</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <p>Height: {height}cm</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Mass: {mass}kg</p>
                </Grid>
            </Grid>
        </CharacterCardStyles>
    )
}

const CharacterCardStyles = styled.div`
flex: 0 0 25em;

border-radius: 6px;
background-color: #346751;
//#C84B31 is a nice color too
padding: 15px;
margin: 30px auto;

.MuiSvgIcon-root{
    vertical-align: middle;
}
.MuiTypography-root{
    font-size: 20px;
    vertical-align: middle;
}
`;
