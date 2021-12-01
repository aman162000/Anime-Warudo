import axios from "axios";
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
  
  const fetchData =()=>{
    axios.all([apiManager
      .fetchDetails(param),apiManager
      .fetchRecommendation(param)]).then(
      axios.spread((...resp)=>{
        setDetail(resp[0].data);
        setRecommendation(resp[1].data.recommendations);
        setLoading(false);
      })

    )
  }
  
  useEffect(() => {
      fetchData();
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
