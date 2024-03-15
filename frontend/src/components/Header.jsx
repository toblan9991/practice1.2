import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentCompany } = useSelector((state) => state.company);
  return (
    <nav>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Box>
          <Link to="/">
            <img
              src="../Frame_4.png"
              alt="Logo"
              sx={{ margin: "15px 10px 30px" }}
            />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction="row" spacing={2} mt={1}>
            <Link to="/">Features</Link>
            <Link to="/">Solution</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Resources</Link>
          </Stack>
        </Box>
        <Box>
          {currentCompany ? (
            <Button
              sx={{
                color: "white",
                backgroundColor: "black",
              }}
              variant="contained"
            >
              <Link to="/dashboard" className="dashboardHome">
                Dashboard
              </Link>
            </Button>
          ) : (
            <Stack direction="row" spacing={2}>
              <Button variant="text">
                <Link to="/login">LOGIN</Link>
              </Button>

              <Button
                sx={{
                  color: "white",
                  backgroundColor: "black",
                }}
                variant="contained"
              >
                <Link to="/sign-up">Sign Up</Link>
              </Button>
            </Stack>
          )}
        </Box>
      </Stack>
      {/* <Link to="/dashboard">Dashboard</Link> */}
    </nav>
  );
}
