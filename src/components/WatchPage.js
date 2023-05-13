import { useDispatch } from "react-redux";
import { menuHidden } from "../utils/menuSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menuHidden());
  }, []);

  const [params] = useSearchParams();
  const searchParams = params.get("v");
  return (
    <div className="col-span-11">
      <iframe
        className="p-5"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
