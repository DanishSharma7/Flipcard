import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import rep from "./assert/image.jpg";

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={rep} alt="Ace Of Club" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ace of Clubs may also refer to: Ace of Clubs (comics), a DC Comics
            supervillain.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
