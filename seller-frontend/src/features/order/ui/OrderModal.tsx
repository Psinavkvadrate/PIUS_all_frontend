import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

export const OrderModal = ({ open, onClose, order }) => {
  if (!order) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Заказ № {order.orderNumber}</DialogTitle>
      <DialogContent dividers>
        <Box mb={2}>
          <Typography variant="subtitle1">Статус: {order.status}</Typography>
          <Typography variant="subtitle1">Сумма: {order.totalAmount} ₽</Typography>
          <Typography variant="subtitle1">
            Адрес доставки: {order.deliveryAddress}
          </Typography>
        </Box>

        <Typography variant="h6">Товары:</Typography>
        <List dense>
          {order.items?.map((item) => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.product.name}
                secondary={`Количество: ${item.quantity}, Цена: ${item.price} ₽`}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};