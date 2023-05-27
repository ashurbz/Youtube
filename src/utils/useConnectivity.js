import { useEffect, useState } from "react";

const useConnectivity = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const online = window.addEventListener("online", () => {
      setIsOnline(true);
    });
    const offline = window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  return isOnline;
};

export default useConnectivity;
