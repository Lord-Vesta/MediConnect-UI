import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Verify from "./pages/Verify";
import Home from "./pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/doctors", element: <Doctors /> },
      { path: "/doctors/:speciality", element: <Doctors /> },
      { path: "/login", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/appointment/:docId", element: <Appointment /> },
      { path: "/my-appointments", element: <MyAppointments /> },
      { path: "/my-profile", element: <MyProfile /> },
      { path: "/verify", element: <Verify /> },
    ],
  },
]);
