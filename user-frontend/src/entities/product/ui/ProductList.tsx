import { Grid, Pagination } from "@mui/material";
import { ProductCard } from './ProductCard';
import type { Product } from "../model/types";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <>
      <Grid container spacing={3} mb={4}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
            <ProductCard
              product={p}
              onOpen={() => {}}
              onAdd={() => {}}
            />
          </Grid>
        ))}
      </Grid>

      <Pagination count={10} color="primary" />
    </>
  );
};