import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (username.length < 3) {
      return setError("Username must be at least 3 characters.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    try {
      await login(username, password);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 2,
          borderRadius: 3,
          boxShadow: "0 12px 24px rgba(0,0,0,0.6)",
          backgroundColor: "background.paper",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{ mb: 1, fontWeight: 600, color: "primary.main" }}
          >
            Log In
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            Access your MovieVault account.
          </Typography>

          <Divider sx={{ mb: 3, borderColor: "rgba(255,255,255,0.1)" }} />

          {error && (
            <Typography sx={{ color: "error.main", mb: 2 }}>
              {error}
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="filled"
              fullWidth
              sx={{ mb: 2 }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              label="Password"
              type="password"
              variant="filled"
              fullWidth
              sx={{ mb: 3 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1,
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Log In
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
          >
            Don’t have an account?{" "}
            <Link to="/signup" style={{ color: "#42a5f5" }}>
              Sign up
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;

