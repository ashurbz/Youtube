import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}>
          <Outlet>
            <Body />
          </Outlet>
        </RouterProvider>
      </Provider>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default App;
