import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ErrorComponent from "./components/ErrorComponent";
import useConnectivity from "./utils/useConnectivity";
import NoConnectionPage from "./components/NoConnectionPage";

function App() {
  const checkConnection = useConnectivity();

  return (
    <>
      <Provider store={store}>
        <Header />
        {!checkConnection ? (
          <NoConnectionPage />
        ) : (
          <RouterProvider router={appRouter}>
            <Outlet>
              <Body />
            </Outlet>
          </RouterProvider>
        )}
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
    ],
  },
]);

export default App;
