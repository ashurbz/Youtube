import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ErrorComponent from "./components/ErrorComponent";
import useConnectivity from "./utils/useConnectivity";
import NoConnectionPage from "./components/NoConnectionPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  const checkConnection = useConnectivity();

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          {!checkConnection ? (
            <NoConnectionPage />
          ) : (
            <Outlet>
              <Body />
            </Outlet>
          )}
        </RouterProvider>
      </Provider>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

export default App;
