import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface Props {
  cartCount: number;
  userName: string;
}

export const Header = ({ cartCount, userName }: Props) => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg, #6c5ce7, #00b894)",
        borderRadius: 3,
        mb: 4,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ cursor: "pointer" }}>
          Marketplace
        </Typography>

        <Box display="flex" alignItems="center" gap={3}>
          <Button color="inherit">Главная</Button>
          <Button color="inherit">Заказы</Button>

          <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Box display="flex" alignItems="center" gap={1}>
            <AccountCircleIcon />
            <Typography>{userName}</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};