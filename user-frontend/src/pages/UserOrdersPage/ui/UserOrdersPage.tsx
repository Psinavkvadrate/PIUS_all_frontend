import { useEffect, useState } from "react";
import type {
  OrderSummary,
  OrderDetails,
} from "../../../entities/order/model/types";
import { OrderCard } from "../../../entities/order/ui/OrderCard";
import { OrderDetailsModal } from "../../../features/order/ui/OrderDetailsModal";
import { Box } from "@mui/material";
import { orderApi } from "../../../entities/order/api/orderApi";

// Моковые данные
const mockOrders: OrderSummary[] = [
  {
    orderId: "uuid1",
    createdAt: "2026-02-24T10:30:00Z",
    status: "in_progress",
    totalPrice: 2500,
    totalItems: 3,
  },
  {
    orderId: "uuid2",
    createdAt: "2026-02-20T15:12:00Z",
    status: "completed",
    totalPrice: 1200,
    totalItems: 1,
  },
];

const mockOrderDetails: Record<string, OrderDetails> = {
  uuid1: {
    orderId: "uuid1",
    createdAt: "2026-02-24T10:30:00Z",
    status: "in_progress",
    totalPrice: 2500,
    deliveryAddress: "ул. Ленина 10",
    deliveryCity: "Москва",
    markets: [
      {
        marketId: "uuidM1",
        marketName: "Apple Store",
        status: "completed",
        totalPrice: 2000,
        items: [
          { productId: "uuidP1", name: "iPhone 15", quantity: 2, price: 1000 },
        ],
      },
    ],
  },
};

export const UserOrdersPage = () => {
  const [selected, setSelected] = useState<OrderDetails | null>(null);

  useEffect(() => {
    orderApi.getOrders().then((data) => {
      setOrders(data.orders);
    });
  }, []);

  return (
    <>
      <Box sx={{ mt: 3, mb: 6, width: "90%", maxWidth: 1200, mx: "auto" }}>
        {mockOrders.map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
            onClick={() => setSelected(mockOrderDetails[order.orderId] || null)}
          />
        ))}
      </Box>

      <OrderDetailsModal
        order={selected}
        open={Boolean(selected)}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

function setOrders(orders: OrderSummary[]) {
  throw new Error("Function not implemented.");
}
