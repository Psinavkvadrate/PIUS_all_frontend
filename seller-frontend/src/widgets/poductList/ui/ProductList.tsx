import { Grid } from "@mui/material";
import { ProductCard } from "../../../entities/product/ui/ProductCard";
import { useGetMyProductsQuery } from "../../..//entities/product/api/productApi";

export const ProductList = ({ filters }) => {
  const { data } = useGetMyProductsQuery(filters);

  return (
    <Grid container spacing={2}>
      {data?.items?.map((p) => (
        <Grid item xs={3} key={p.id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
};
