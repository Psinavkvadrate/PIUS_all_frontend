import { Box, TextField, MenuItem, Button } from "@mui/material";

export const Filters = () => {
  return (
    <Box
      display="flex"
      gap={2}
      flexWrap="wrap"
      mb={4}
      p={3}
      bgcolor="background.paper"
      borderRadius={3}
    >
      <TextField label="Поиск" size="small" />
      <TextField select label="Категория" size="small" sx={{ minWidth: 150 }}>
        <MenuItem value="electronics">Electronics</MenuItem>
        <MenuItem value="clothing">Clothing</MenuItem>
        <MenuItem value="books">Books</MenuItem>
      </TextField>

      <TextField label="Мин цена" size="small" type="number" />
      <TextField label="Макс цена" size="small" type="number" />

      <Button variant="contained">Применить</Button>
    </Box>
  );
};