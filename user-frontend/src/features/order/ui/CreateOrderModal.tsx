import { Modal, Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { orderApi } from "../../../entities/order/api/orderApi";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const CreateOrderModal = ({ open, onClose }: Props) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleConfirm = async () => {
    await orderApi.createOrder({
      deliveryAddress: address,
      deliveryCity: city,
      phone,
      deliveryComment: comment,
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          bgcolor: "white",
          p: 4,
          borderRadius: 3,
          mx: "auto",
          mt: "20vh",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6">Оформление заказа</Typography>

        <TextField
          label="Город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <TextField
          label="Адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          label="Телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextField
          label="Комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button variant="contained" onClick={() => handleConfirm()}>
          Подтвердить
        </Button>
      </Box>
    </Modal>
  );
};
