import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TravelList from "../projects/TravelList/TravelList";
import FlashCard from "../projects/FlashCard/FlashCard";
import Accordion from "../projects/Accordion/Accordion";
import Steps from "../projects/Steps/Steps";

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
  {
    path: "accordion",
    element: <Accordion></Accordion>,
  },
  {
    path: "steps",
    element: <Steps></Steps>,
  },
]);

export default router;
