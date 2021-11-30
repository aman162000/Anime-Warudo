import { useEffect, useState } from "react";
import Data from "./Data";
import ApiManager from "../ApiManager";
import Footer from "./Footer";

const BASE_URL = "https://api.aniapi.com";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [upcoming, setUpcoming] = useState([]);
  const [airing, setAiring] = useState([]);
  const [manga, setManga] = useState([]);
  const [today, setToday] = useState([]);
  const d = new Date();
  const apiManager = new ApiManager();

  useEffect(async () => {
    apiManager
      .fetchTodayRelease(days[d.getDay()].toLowerCase())
      .then((resp) => {
        setLoading(false);
        setToday(resp.data[days[d.getDay()].toLowerCase()]);
      })
      .catch((err) => {});

    apiManager
      .fetchTopAiring()
      .then((resp) => {
        setLoading(false);
        setAiring(resp.data.top);
      })
      .catch((err) => {});
    apiManager
      .fetchUpcomingAnime()
      .then((resp) => {
        setLoading(false);
        setUpcoming(resp.data.top);
      })
      .catch((err) => {});

    apiManager
      .fetchTopManga()
      .then((resp) => {
        setLoading(false);
        setManga(resp.data.top);
      })
      .catch((err) => {});
 
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ padding: "0", position: "relative" }}
      >
        <img
          className="main-img"
          style={{ width: "100%" }}
          src="https://i.pinimg.com/originals/d3/24/b5/d324b5cf9a95d5b386b2215641ba7540.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className="container my-5">
        <div className="row">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div>
              <Data heading={"Today Release"} data={today} />
              <Data heading={"Top Airing"} data={airing} />
              <Data heading={"Upcoming Anime"} data={upcoming} />
              <Data heading={"Top Manga"} data={manga} />
            </div>
          )}
        </div>
        
      </div>
      <Footer/>
    </>
  );
}
