import { Card, CardContent, Typography, Button } from "@mui/material";

export const ProductCard = ({ product }) => {
  return (
    <Card>
      <img src={product.img} style={{ height: 150, width: "100%" }} />

      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography>{product.price} ₽</Typography>
        <Typography>Остаток: {product.available}</Typography>
        <Typography>{product.category}</Typography>

        <Button size="small">Редактировать</Button>
      </CardContent>
    </Card>
  );
};
