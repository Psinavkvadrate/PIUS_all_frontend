import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Link,
} from "@mui/material";

import { AuthLayout } from "../../../shared/ui/AuthLayout/AuthLayout";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <Paper elevation={0} className={styles.card}>
        <Typography variant="h5" className={styles.title}>
          Welcome back
        </Typography>

        <Typography className={styles.subtitle}>
          Please login to your account
        </Typography>

        <Box className={styles.form}>
          <TextField
            label="Email"
            type="email"
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            fullWidth
            className={styles.button}
          >
            Login
          </Button>

          <Typography className={styles.register}>
            Don't have an account?{" "}
            <Link href="#" underline="hover">
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </AuthLayout>
  );
};