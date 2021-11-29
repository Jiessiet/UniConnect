import { Card, CardContent, Typography, Container } from "@mui/material";
import { useState } from "react";
import useStyles from "./styles";

const InterestCategory = ({title, children}) => {
    const [collapse, setCollapse] = useState(false)
    const classes = useStyles();
  return (
    <Card sx={{ mt: 3, backgroundColor:"#C8D9A3", 
    cursor: "pointer", }} >
        <CardContent>
          <Typography variant="h4" component="div" onClick={(e) => {setCollapse(!collapse)}}>
            {title}
          </Typography>
          {collapse ? null : children}
        </CardContent>
    </Card>
  );
};

export default InterestCategory;