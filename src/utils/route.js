import FirstLayout from "../components/layouts/FirstLayout"
import Home from "../pages/home/Home"
export default [
    {
      path: "/",
      element: <FirstLayout />, 
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]