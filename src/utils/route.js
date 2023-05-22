import FirstLayout from "../components/layouts/FirstLayout";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/admin/Dashboard";
import ViewProfile from "../pages/admin/user/ViewProfile";
import EditProfile from "../pages/admin/user/EditProfile";
export default [
  {
    path: "/admin/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,



      },
      {
        path: "/admin/profile",
        children: [
          {
            path: "/admin/profile/view",
            element: <ViewProfile/>,
          },
          {
            path: "/admin/profile/edit",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
];
