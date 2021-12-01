import { useEffect, useState } from "react";
import Data from "./Data";
import ApiManager from "../ApiManager";
import Footer from "./Footer";
import axios from "axios";



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

  const fetchHomeData= async()=>{
    await axios.all([apiManager.fetchTodayRelease(days[d.getDay()].toLowerCase()),
    apiManager.fetchTopAiring(),
    apiManager.fetchUpcomingAnime(),
    apiManager.fetchTopManga()]).then(
      axios.spread((...resp)=>{
          setToday(resp[0].data[days[d.getDay()].toLowerCase()]);
          setAiring(resp[1].data.top);
          setUpcoming(resp[2].data.top);
          setManga(resp[3].data.top);
          setLoading(false)
        })
    )
  }
  
  useEffect(async () => {
    fetchHomeData(); 
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
