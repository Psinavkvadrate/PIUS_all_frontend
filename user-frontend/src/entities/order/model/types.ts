export type OrderStatus = "generated" | "in_progress" | "completed" | "declined";

export interface OrderSummary {
  orderId: string;
  createdAt: string;
  status: OrderStatus;
  totalPrice: number;
  totalItems: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderMarket {
  marketId: string;
  marketName: string;
  status: OrderStatus;
  totalPrice: number;
  items: OrderItem[];
}

export interface OrderDetails {
  orderId: string;
  createdAt: string;
  status: OrderStatus;
  totalPrice: number;
  deliveryAddress: string;
  deliveryCity: string;
  markets: OrderMarket[];
}