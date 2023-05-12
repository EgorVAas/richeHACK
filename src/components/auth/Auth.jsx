import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./auth.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
  const {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setEmail,
    setPassword,
    setHasAccount,

    handleSignUp,
    handleLogin,
  } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="Auth__container" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          {hasAccount ? (
            <Typography
              component="h1"
              variant="h5"
              style={{ fontFamily: "Cormorant Infant, serif" }}
            >
              Login Form
            </Typography>
          ) : (
            <Typography
              component="h1"
              variant="h5"
              style={{ fontFamily: "Cormorant Infant, serif" }}
            >
              Register Form
            </Typography>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              helperText={passwordError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {hasAccount ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ fontFamily: "Cormorant Infant, serif" }}
                onClick={() => {
                  handleLogin();
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ fontFamily: "Cormorant Infant, serif" }}
                onClick={() => {
                  handleSignUp();
                }}
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            )}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className="loginText">
                  Forgot Password?
                </Link>
              </Grid>
              <Grid item>
                {hasAccount ? (
                  <Link
                    href="#"
                    variant="body3"
                    onClick={() => setHasAccount(!hasAccount)}
                    className="loginText"
                  >
                    {"Don't have an account? Register Now"}
                  </Link>
                ) : (
                  <Link
                    href="#"
                    variant="body3"
                    onClick={() => setHasAccount(!hasAccount)}
                    className="loginText"
                  >
                    {"Already have an account? Login"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
