import { Box, Button } from "@mui/material";
import { useState } from "react";

import { MarketInfo } from "../../../widgets/marketInfo/ui/marketInfo";
import { Filters } from "../../../widgets/filters/ui/Filters";
import { ProductList } from "../../../widgets/poductList/ui/ProductList";

export const SellerDashboardPage = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 12,
    search: "",
    category: "",
  });

  return (
    <Box>
      <MarketInfo />

      <Filters filters={filters} setFilters={setFilters} />

      <ProductList filters={filters} />

      <Button
        variant="contained"
        sx={{
          position: "fixed",
          bottom: 40,
          right: 40,
        }}
      >
        + Добавить товар
      </Button>
    </Box>
  );
};
