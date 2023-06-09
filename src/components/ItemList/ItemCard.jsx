import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Directions } from "@mui/icons-material";

export const ItemCard = ({ items, borrarItem, editarItem }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardMedia sx={{ height: 260 }} image={items.img} title={items.title} />
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
        <Button variant="contained" size="small">
          Ver detalle
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={() => {
            editarItem(items.id, {
              description: "descripcion modificada",
              price: 95000,
            });
          }}
        >
          Editar
        </Button>

        <Button
          variant="contained"
          size="small"
          onClick={() => {
            borrarItem(items.id);
          }}
        >
          Borrar
        </Button>
      </CardActions>
    </Card>
  );
};
