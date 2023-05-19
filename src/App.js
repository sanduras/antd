
import "antd/dist/reset.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import route from "./utils/route";

function App() {
  const router = createBrowserRouter(route);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
