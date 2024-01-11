import { createBrowserRouter } from "react-router-dom";
import Layout from "./../layouts/Layout";
import App from "./../App";
import Signup from "./../pages/Signup";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
