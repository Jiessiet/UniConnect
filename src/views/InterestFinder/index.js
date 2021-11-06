import { Container, Grid, Button, Typography } from "@mui/material";
import InterestTagCard from "../../components/InterestTagCard";
import InterestCategory from "../../components/InterestCategory";
import uniqid from "uniqid";

const InterestFinder = () => {
  const tagCategoryArray = [
    {
      title: "Gaming",
      tags: [
        "Zelda",
        "Skyrim",
        "Animal Crossing",
        "League of Legends",
        "Dota",
        "CS Go",
        "PUBG",
        "Fortnite",
        "Minecraft",
      ],
    },
    {
      title: "Media",
      tags: ["Anime", "Movies", "Series", "Theater", "Musical", "Concerts"],
    },
  ];

  const tagCardRender = (tag) => {
    return (
      <Grid item justifyContent="flex-start">
        <InterestTagCard title={tag} key={uniqid()} />
      </Grid>
    );
  };

  const tagCategoyRender = (tagCategoryArray) => {
    const result = [];
    tagCategoryArray.forEach((category) => {
      const tags = [];
      category.tags.forEach((tag) => {
        tags.push(tagCardRender(tag));
      });
      result.push(
        <InterestCategory title={category.title} key={uniqid()}>
          <Grid container spacing={3} mt={4} alignItems="center">
            {tags}
          </Grid>
        </InterestCategory>
      );
    });
    return result;
  };

  return (
    <Container>
      {tagCategoyRender(tagCategoryArray)}
      <Button
        variant="contained"
        sx={{ margin: 2, color: "#74A651", backgroundColor: "#C8D9A3", marginLeft: "80vw", '&:hover': {
          backgroundColor: '#C6F2C4',
          color: '#74A651'}}}
        href="/login"
        size = "large"
      >
        <Typography
          variant="button"
          component="div"
          sx={{ cursor: "pointer" }}
        >
          Submit
        </Typography>
      </Button>
    </Container>
  );
};

export default InterestFinder;

//sx={{display: "flex", justifyContent: "center"}}
