import { Button, TextField, Typography, Box } from "@mui/material";
import styles from "./AuthForms.module.css";

interface Props {
  onSwitch: () => void;
}

export const LoginForm = ({ onSwitch }: Props) => {
  return (
    <Box className={styles.form}>
      <Box className={styles.logoContainer}>
        <img
          src="/mainlogo.png"
          alt="Marketplace Logo"
          className={styles.logo}
        />
      </Box>

      <Box className={styles.content}>
        <Typography variant="h4" className={styles.title}>
          Sign In
        </Typography>

        <Typography className={styles.subtitle}>
          Welcome back!
        </Typography>

        <TextField label="Email" fullWidth />
        <TextField label="Password" type="password" fullWidth />

        <Button variant="contained" size="large" fullWidth>
          Login
        </Button>

        <Typography className={styles.switch}>
          Don't have an account?{" "}
          <Box
            component="span"
            onClick={onSwitch}
            className={styles.switchLink}
          >
            Register
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};