import { Box, TextField, MenuItem } from "@mui/material";

export const Filters = ({ filters, setFilters }) => {
  return (
    <Box display="flex" gap={2} mb={3}>
      <TextField
        label="Поиск"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <TextField
        select
        label="Категория"
        value={filters.category || ""}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <MenuItem value="">Все</MenuItem>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="clothing">Clothing</MenuItem>
      </TextField>
    </Box>
  );
};
