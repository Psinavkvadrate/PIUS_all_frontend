import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import type { OrderDetails, OrderStatus } from "../../../entities/order/model/types";

interface Props {
  order: OrderDetails | null;
  open: boolean;
  onClose: () => void;
}

const statusColors: Record<OrderStatus, "default" | "primary" | "success" | "error"> = {
  generated: "default",
  in_progress: "primary",
  completed: "success",
  declined: "error",
};

export const OrderDetailsModal = ({ order, open, onClose }: Props) => {
  if (!order) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Заказ #{order.orderId.slice(0, 8)} — {order.deliveryCity}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography variant="subtitle2">Адрес доставки:</Typography>
          <Typography>{order.deliveryAddress}</Typography>
        </Box>

        {order.markets.map((market) => (
          <Box key={market.marketId} p={2} bgcolor="background.paper" borderRadius={2}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography variant="subtitle1">{market.marketName}</Typography>
              <Chip
                label={market.status}
                color={statusColors[market.status]}
                sx={{ textTransform: "capitalize" }}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              {market.items.map((item) => (
                <Box
                  key={item.productId}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>{item.name} x{item.quantity}</Typography>
                  <Typography>${item.price.toFixed(2)}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </DialogContent>
    </Dialog>
  );
};