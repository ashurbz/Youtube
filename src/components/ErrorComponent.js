import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error.data);
  return (
    <div className="text-center">
      <h3>{error.status}</h3>
      <h4>{error.statusText}</h4>
      <h3>{error.data}</h3>
    </div>
  );
};

export default ErrorComponent;
