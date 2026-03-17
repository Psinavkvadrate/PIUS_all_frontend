import { Box, Typography, Button } from "@mui/material";
import { useGetMyMarketQuery } from "../../../entities/market/api/marketApi";

export const MarketInfo = () => {
  const { data } = useGetMyMarketQuery();

  if (!data) return null;

  return (
    <Box mb={4}>
      <Typography variant="h5">{data.marketName}</Typography>
      <Typography color="text.secondary">{data.description}</Typography>

      <Button variant="outlined" sx={{ mt: 2 }}>
        Редактировать
      </Button>
    </Box>
  );
};
