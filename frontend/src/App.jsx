import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EmployeeOnboard from "./pages/EmployeeOnboard";
import EmployeeOffboard from "./pages/EmployeeOffboard";
import TeamDirectory from "./pages/TeamDirectory";
import SideLinks from "./components/SideLinks";
import EmployeeTable from "./components/EmployeeTable";
import OffboardForm from "./components/OffboardForm";
import EmployeeDetails from "./pages/EmployeeDetails";
import "./App.css";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Box } from "@mui/system";

function App() {
  const Layout = () => {
    return (
      <Box className="layout">
        <Stack direction="row" spacing={3}>
          <Box className="side-links">
            <SideLinks />
          </Box>

          <Box className="layout-content">
            <Outlet />
          </Box>
        </Stack>
      </Box>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/employee-onboard",
          element: <EmployeeOnboard />,
        },
        {
          path: "/employee-offboard",
          element: <EmployeeOffboard />,
        },
        {
          path: "/team-directory",
          element: <TeamDirectory />,
        },
        {
          path: "/offboard-form/:id",
          element: <OffboardForm />,
        },
        {
          path: "/employee-table",
          element: <EmployeeTable />,
        },
        {
          path: "/employee/:id",
          element: <EmployeeDetails />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
