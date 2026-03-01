import { type ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./AuthLayout.module.css";

interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <Box className={styles.root}>
      <Box className={styles.left}>
        <Box className={styles.brand}>
          <Typography variant="h4" className={styles.logo}>
            MarketPlace
          </Typography>

          <Typography className={styles.subtitle}>
            Buy. Sell. Discover something new.
          </Typography>
        </Box>
      </Box>

      <Box className={styles.right}>{children}</Box>
    </Box>
  );
};