import { Card, CardContent, Typography, Container } from "@mui/material";
import { useState } from "react";

const InterestTagCard = ({ title }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderWidth: "3px", 
        borderColor: "rgba(255, 0, 0, 0)",
        borderStyle: "solid",
        ...(selected
          ? { borderColor: "#74A651" }
          : null),
      }}
      onClick={() => {
        console.log("hello")
        setSelected(!selected);
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InterestTagCard;
