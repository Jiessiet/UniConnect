import { Container, Grid } from "@mui/material";
import InterestTagCard from "../../components/InterestTagCard";

const InterestFinder = () => {
  return (
    <Container>
      <Grid container spacing={3} mt={4} alignItems="center">
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
        <Grid item justifyContent = "flex-start">
          <InterestTagCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InterestFinder;

//sx={{display: "flex", justifyContent: "center"}}