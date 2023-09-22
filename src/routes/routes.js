import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TravelList from "../projects/TravelList/TravelList";
import FlashCard from "../projects/FlashCard/FlashCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "travel-list",
    element: <TravelList></TravelList>,
  },
  {
    path: "flash-card",
    element: <FlashCard></FlashCard>,
  },
]);

export default router;
