import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import type { Product } from "../model/types";

interface Props {
  product: Product;
  onOpen: () => void;
  onAdd: () => void;
}

export const ProductCard = ({ product, onOpen, onAdd }: Props) => {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.img}
        onClick={onOpen}
        sx={{ cursor: "pointer" }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="primary" fontWeight={600}>
          ${product.price}
        </Typography>

        <Button
          fullWidth
          sx={{
            mt: 2,
            background: "#6c5ce7",
            color: "#fff",
            "&:hover": { opacity: 0.9 },
          }}
          onClick={onAdd}
        >
          Добавить в корзину
        </Button>
      </CardContent>
    </Card>
  );
};