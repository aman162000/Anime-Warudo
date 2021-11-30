import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ApiManager from "../ApiManager";
import Card from "./Card";
export default function SearchPage(props) {
  const params = useParams();
  const apiManager = new ApiManager();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [dataOver, setDataOver] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handelOnScroll);
    return () => {
      window.removeEventListener("scroll", handelOnScroll);
    };
  });

  const getData = () => {
    if (!isFetching) {
      apiManager
        .fetchSearchQuery(params, page)
        .then((resp) => {
          if (
            resp.data.message !== undefined &&
            resp.data.message === "Resource does not exist"
          ) {
            dataOver(true);
          }
          if (page > 1) {
            let arr = [...data, ...resp.data.results];
            setData(arr);
          } else {
            setData(resp.data.results);
          }
          setPage(page + 1);
          setIsFetching(false);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(page);
    }
  };
  useEffect(() => {
    getData();
    setLoading(false);
    setIsFetching(false);
  }, []);
  const handelOnScroll = (e) => {
    if (!dataOver) {
      var e = document.getElementById("feed-end");
      const r = e.getBoundingClientRect();
      const isAtEnd =
        parseInt(r.bottom) <=
        (window.innerHeight || document.documentElement.clientHeight);
      if (isAtEnd) {
        if (!isFetching) {
          setIsFetching(true);
          getData();
        }
      }
    }
  };

  return (
    <>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div style={{}} className="container my-3" onScroll={handelOnScroll}>
          <div className="row px-2 ">
            {data.map((d, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2  d-flex justify-content-center"
                key={index}
              >
                <Link
                  target="_blank"
                  to={`/details/${
                    props.type === undefined || null
                      ? d.type === "TV"
                        ? "anime"
                        : d.type.toLowerCase()
                      : props.type
                  }/${d.mal_id}/`}
                >
                  <Card
                    image_url={d.image_url}
                    title={d.title}
                    type={d.type}
                    start_date={d.start_date}
                  />
                </Link>
              </div>
            ))}
            {data !== "error" && !dataOver && (
              <div className="text-center" id="feed-end">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
