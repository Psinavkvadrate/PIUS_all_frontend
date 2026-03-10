import {
  AppBar,
  Toolbar,
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
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "64px",
          height: "64px",
        }}
      >
        <Box
          component="img"
          src="/mainlogo.png"
          alt="Marketplace"
          sx={{
            height: 170,
            objectFit: "contain",
            cursor: "pointer",
            transform: [
              "translateY(5px)",
              "translateX(-50px)"
            ].join(' ')
          }}
        />

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
            <span>{userName}</span>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};