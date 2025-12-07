import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const { signup } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Strong password regex
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 3) {
      return setError("Username must be at least 3 characters.");
    }

    if (!passwordRegex.test(password)) {
      return setError(
        "Password must be at least 8 chars, include a letter, a number, and a special character."
      );
    }

    try {
      await signup(username, password);
      setSuccess("Account created! Please log in.");
      setError(null);
      setUsername("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      setError(err.message);
      setSuccess(null);
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
            Sign Up
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            Create your MovieVault account.
          </Typography>

          <Divider sx={{ mb: 3, borderColor: "rgba(255,255,255,0.1)" }} />

          {error && (
            <Typography sx={{ color: "error.main", mb: 2 }}>
              {error}
            </Typography>
          )}

          {success && (
            <Typography sx={{ color: "success.main", mb: 2 }}>
              {success}
            </Typography>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Choose a username"
              variant="filled"
              fullWidth
              sx={{ mb: 2 }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              type="password"
              label="Choose a strong password"
              variant="filled"
              fullWidth
              sx={{ mb: 1 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Typography
              variant="caption"
              sx={{ color: "text.secondary", display: "block", mb: 2 }}
            >
              Must include: 8+ chars, a letter, a number, and a special symbol.
            </Typography>

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
              Create Account
            </Button>
          </form>

          <Typography
            variant="body2"
            sx={{ mt: 2, textAlign: "center", color: "text.secondary" }}
          >
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#42a5f5" }}>
              Log in
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupPage;

