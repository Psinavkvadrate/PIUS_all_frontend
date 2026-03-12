import { Grid, Pagination } from "@mui/material";
import { ProductCard } from "./ProductCard";
import type { Product } from "../model/types";

interface Props {
  products: Product[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onOpen: (p: Product) => void;
}

export const ProductList = ({
  products,
  page,
  totalPages,
  onPageChange,
  onOpen,
}: Props) => {
  return (
    <>
      <Grid container spacing={3} mb={4}>
        {products.map((p) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
            <ProductCard
              product={p}
              onOpen={() => onOpen(p)}
              onAdd={() => {}}
            />
          </Grid>
        ))}
      </Grid>

      <Pagination
        page={page}
        count={totalPages}
        color="primary"
        onChange={(_, value) => onPageChange(value)}
      />
    </>
  );
};
