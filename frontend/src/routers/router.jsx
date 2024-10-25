import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";
import ContactList from "../components/ContactList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contacts",
        element: <ContactList></ContactList>,
      },
    ],
  },
]);

export default router;
