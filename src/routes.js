import { useRoutes} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Home, Hotels, TouristSites, AboutUs, ContactUs } from "./pages";

const Routes = () => useRoutes([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/hotels',
        element: <Hotels />
      },
      {
        path: '/touristsites',
        element: <TouristSites />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
      },
      {
        path: '/contactus',
        element: <ContactUs />
      }
    ]
  }
]);

export default Routes;