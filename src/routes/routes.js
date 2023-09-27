import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TravelList from "../projects/TravelList/TravelList";
import FlashCard from "../projects/FlashCard/FlashCard";
import Accordion from "../projects/Accordion/Accordion";
import Steps from "../projects/Steps/Steps";
import EatNSplit from "../projects/EatNSplit/EatNSplit";

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
  {
    path: "eat-n-split",
    element: <EatNSplit></EatNSplit>,
  },
]);

export default router;
