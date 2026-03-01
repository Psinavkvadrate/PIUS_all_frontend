import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import styles from "./AuthForms.module.css";

interface Props {
  onSwitch: () => void;
}

export const RegisterForm = ({ onSwitch }: Props) => {
  const [step, setStep] = useState(0);
  const [isSeller, setIsSeller] = useState(false);

  const nextStep = () => {
    if (step < 2) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

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
          Register
        </Typography>

        <Typography className={styles.subtitle}>
          Step {step + 1} of 3
        </Typography>

        <Box
          key={step}
          className={`${styles.step} ${styles.stepAnimation}`}
        >
          {step === 0 && (
            <>
              <TextField label="Login" fullWidth />
              <TextField label="Password" type="password" fullWidth />
              <TextField label="Confirm Password" type="password" fullWidth />
            </>
          )}

          {step === 1 && (
            <>
              <TextField label="First Name" fullWidth />
              <TextField label="Last Name" fullWidth />
              <TextField label="Patronymic" fullWidth />
            </>
          )}

          {step === 2 && (
            <>
              <TextField
                label="Date of Birth"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
              <TextField label="City" fullWidth />
              <TextField label="Telegram" fullWidth />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={isSeller}
                    onChange={(e) => setIsSeller(e.target.checked)}
                  />
                }
                label="Register as Seller"
              />

              {isSeller && (
                <TextField label="Market Name" fullWidth />
              )}
            </>
          )}
        </Box>

        {/* Navigation Buttons */}
        <Box className={styles.buttons}>
          {step > 0 && (
            <Button onClick={prevStep} fullWidth>
              Back
            </Button>
          )}

          {step < 2 ? (
            <Button
              variant="contained"
              size="large"
              onClick={nextStep}
              fullWidth
            >
              Next
            </Button>
          ) : (
            <Button variant="contained" size="large" fullWidth>
              Register
            </Button>
          )}
        </Box>

        <Typography className={styles.switch}>
          Already have an account?{" "}
          <Box
            component="span"
            onClick={onSwitch}
            className={styles.switchLink}
          >
            Sign In
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};