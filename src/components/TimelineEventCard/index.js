import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, createTheme, Stack} from "@mui/material";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const TimelineEventCard = ({
  title,
  description,
  location,
  picture,
  totalParticipant,
  currentParticipant,
  eventId,
  setEventId,
  key,
  eventLink
}) => {


  return (
    <Card sx={{ maxWidth: 600 }} onClick={()=>{setEventId(key)}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <CardMedia
            component="img"
            height="230"
            image={picture}
            alt="green iguana"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {description}
            </Typography>
            <Stack direction="row"  mt={3} mb={0}>
              <LocationOnSharpIcon/>
              <Typography
                variant="overline"
                display="block"
                color="textSecondary"
              >
                {location}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="body1" display="block" color="textSecondary">
                {currentParticipant} / {totalParticipant}
              </Typography>
              <PeopleAltIcon />
            </Stack>
            <Typography variant="body1" display="block" color="textSecondary">
                {eventLink}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    
  );
};

export default TimelineEventCard;
