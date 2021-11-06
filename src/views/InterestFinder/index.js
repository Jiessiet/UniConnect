import { Container, Grid, Button, Typography } from "@mui/material";
import InterestTagCard from "../../components/InterestTagCard";
import InterestCategory from "../../components/InterestCategory";
import uniqid from "uniqid";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    height: "80%",
    transform: "translate(0, 20%)",
    borderWidth: "3px", 
    borderColor: "#C8D9A3",
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "80vw",
      [theme.breakpoints.up("md")]: {
        width: "80vw",
      },
    },
  }));

  return (
    <Container sx={{mt:12}}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      {tagCategoyRender(tagCategoryArray)}
      <Button
        variant="contained"
        sx={{
          margin: 2,
          color: "#74A651",
          backgroundColor: "#C8D9A3",
          marginLeft: "80vw",
          "&:hover": {
            backgroundColor: "#C6F2C4",
            color: "#74A651",
          },
        }}
        href="/login"
        size="large"
      >
        <Typography variant="button" component="div" sx={{ cursor: "pointer" }}>
          Submit
        </Typography>
      </Button>
    </Container>
  );
};

export default InterestFinder;

//sx={{display: "flex", justifyContent: "center"}}
