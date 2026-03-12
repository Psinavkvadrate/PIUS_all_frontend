import { type ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./MainLayout.module.css";
import { Header } from "../../widgets/header/ui/Header";
import { Footer } from "../../widgets/footer/ui/Footer";
import { getMe } from "../../entities/user/api/userApi";

interface Props {
  children: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const [userName, setUserName] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getMe();

        setUserName(user.firstName);
        setCartCount(user.cart?.items?.length ?? 0);
      } catch (e) {
        console.error("Ошибка получения пользователя", e);
      }
    };

    fetchUser();
  }, []);

  return (
    <Box className={styles.background}>
      <Box className={styles.container}>
        <Header cartCount={cartCount} userName={userName} />

        <Box sx={{ flex: 1 }}>{children}</Box>

        <Footer />
      </Box>
    </Box>
  );
};
