import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Directions } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const ItemCard = ({ items }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ width: 300, height: 260 }}
        image={items.img}
        title={items.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {items.description}
        </Typography>
        <Typography variant="h5" color="primary">
          ${items.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ItemDetail/${items.id}`}>
          <Button variant="contained" size="small">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
