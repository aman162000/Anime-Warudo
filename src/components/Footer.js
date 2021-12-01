import axios from 'axios'
import React, { useState,useEffect } from 'react'
import ApiManager from '../ApiManager'


export default function Footer() {

    const [movie, setMovie] = useState(null)
    const [novels,setNovel] = useState(null)
    const [manhwa,setManhwa] = useState(null)
    const [ova, setOva] = useState(null)
    const [loading, setLoading] = useState(true);
    const apiManager = new ApiManager();

    const fetchFooterData=()=>{
      axios.all([apiManager.fetchTopMovie(), apiManager.fetchTopNovels(),
        apiManager.fetchTopManhwa(),
        apiManager.fetchTopOva() ]).then(
        axios.spread((...resp)=>{
          setMovie(resp[0].data.top.slice(0,10))
          setNovel(resp[1].data.top.slice(0,10))
          setManhwa(resp[2].data.top.slice(0,10))
          setOva(resp[3].data.top.slice(0,10))
          setLoading(false);
        })
      )
    }

    useEffect(() => {
      fetchFooterData();
    }, [])

    return (
        <footer className="container-fluid">
            {loading ? (<div className="text-center p-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>) : (  <div className="container p-3">
          <div className="row mx-auto">
            <div className=" col ">
             <h4>Top Movie</h4>
             {movie.map((data)=>(
            <li class="footer-list" >
                <a href={`/details/anime/${data.mal_id}`} target="_blank" data-bs-toggle="tooltip" data-bs-placement="left" title={data.title}>{data.title.length > 20 ? data.title.slice(0,20)+"..." : data.title}</a></li>
             ))}
           
            </div>
            <div className="col">
              <h4>Top Novels</h4>
              {novels.map((data)=>(
            <li class="footer-list">
                <a href={`/details/manga/${data.mal_id}`} target="_blank" data-bs-toggle="tooltip" data-bs-placement="left" title={data.title}>{data.title.length > 20 ? data.title.slice(0,20)+"..." : data.title}</a></li>
             ))}
            </div>
            <div className="col">
              <h4>Top Manhwa</h4>
              {manhwa.map((data)=>(
            <li class="footer-list">
                <a href={`/details/manga/${data.mal_id}`} target="_blank" data-bs-toggle="tooltip" data-bs-placement="left" title={data.title} >{data.title.length > 20 ? data.title.slice(0,20)+"..." : data.title}</a></li>
             ))}
            </div>
            <div className="col">
              <h4>Top Ova</h4>
              {ova.map((data)=>(
            <li class="footer-list">
                <a href={`/details/anime/${data.mal_id}`} target="_blank" data-bs-toggle="tooltip" data-bs-placement="left" title={data.title}>{data.title.length > 20 ? data.title.slice(0,20)+"..." : data.title}</a></li>
             ))}</div>
          </div>
        </div>)}
      
</footer>
    )
}
