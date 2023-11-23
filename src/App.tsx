import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Notfound from "./pages/notfound";
import Top from "./pages/top";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Top />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ],
  {
    basename: "/rt",
  }
);

function App(): React.ReactElement {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
