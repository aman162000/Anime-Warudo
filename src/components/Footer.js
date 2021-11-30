import React, { useState,useEffect } from 'react'
import ApiManager from '../ApiManager'


export default function Footer() {

    const [movie, setMovie] = useState(null)
    const [novels,setNovel] = useState(null)
    const [manhwa,setManhwa] = useState(null)
    const [ova, setOva] = useState(null)
    const [loading, setLoading] = useState(true);
    const apiManager = new ApiManager();
    useEffect(() => {
       apiManager.fetchTopMovie().then((resp)=>{
        setMovie(resp.data.top.slice(0,10))
       }).catch(err=>{
           console.log(err);
       })
       apiManager.fetchTopNovels().then((resp)=>{
        setNovel(resp.data.top.slice(0,10))
       
       }).catch(err=>{
           console.log(err);
       })
       apiManager.fetchTopManhwa().then((resp)=>{
        setManhwa(resp.data.top.slice(0,10))
        
       }).catch(err=>{
           console.log(err);
       })
       apiManager.fetchTopOva().then((resp)=>{
        setOva(resp.data.top.slice(0,10))
        setLoading(false)
       }).catch(err=>{
           console.log(err);
       })
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
