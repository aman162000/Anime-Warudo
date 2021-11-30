import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiManager from "../ApiManager";
import Detail from "./Detail";

const DetailPage = () => {
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const apiManager = new ApiManager();
  useEffect(() => {
    apiManager
      .fetchDetails(param)
      .then((resp) => {
        setLoading(false);
        setDetail(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
    apiManager
      .fetchRecommendation(param)
      .then((resp) => {
        setLoading(false);
        setRecommendation(resp.data.recommendations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Detail detail={detail} param={param} recommendation={recommendation} />
      )}
    </>
  );
};

export default DetailPage;
