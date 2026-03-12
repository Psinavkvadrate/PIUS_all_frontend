import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CartList } from "../../../widgets/cart/ui/CartList";
import { CreateOrderModal } from "../../../features/order/ui/CreateOrderModal";
import type { CartItem } from "../../../entities/cart/model/types";
import { cartApi } from "../../../entities/cart/api/cartApi";

const mockItems: CartItem[] = [
  {
    productId: "1",
    name: "iPhone 15",
    price: 999,
    quantity: 2,
    available: 5,
    img: "https://via.placeholder.com/150",
    market: {
      marketId: "m1",
      marketName: "Apple Store",
    },
  },
];

export const CartPage = () => {
  const [items, setItems] = useState(mockItems);
  const [open, setOpen] = useState(false);

  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  useEffect(() => {
    cartApi.getCart().then((data) => {
      setItems(data.items);
    });
  }, []);

  const increase = (id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.productId === id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  };

  const decrease = (id: string) => {
    setItems((prev) =>
      prev.map((i) =>
        i.productId === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i,
      ),
    );
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== id));
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 3 }}>
      <CartList
        items={items}
        totalPrice={totalPrice}
        onIncrease={increase}
        onDecrease={decrease}
        onDelete={remove}
        onCheckout={() => setOpen(true)}
      />

      <CreateOrderModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};
