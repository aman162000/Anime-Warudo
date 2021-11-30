import axios from "axios";

class ApiManager {
  constructor() {
    this.BASE_URL = "https://api.jikan.moe/v3";
    this.type = ['manga','anime']
  }
  async fetchUpcomingAnime() {
    return await axios.get(`${this.BASE_URL}/top/anime/1/upcoming`);
  }
  async fetchTopManga() {
    return await axios.get(`${this.BASE_URL}/top/manga`);
  }
  async fetchTopAiring() {
    return await axios.get(`${this.BASE_URL}/top/anime/1/airing`);
  }
  async fetchTodayRelease(day) {
    return await axios.get(`${this.BASE_URL}/schedule/${day}`);
  }
  async fetchDetails(param) {
    let type = this.type.includes(param.type) ? param.type : (param.type)
    return await axios.get(`${this.BASE_URL}/${type}/${param.id}`);
  }
  async fetchRecommendation(param) {
    let type = param.type !== "movie" ? "anime": param.type ;
    return await axios.get(
      `${this.BASE_URL}/${type}/${param.id}/recommendations`
    );
  }

  async fetchSearchQuery(param, page) {
    let name = param.name.split("-").join(" ");
 
    return await axios.get(
      `${this.BASE_URL}/search/${param.type}?q=${name}&page=${page}`
    );
  }

  async fetchTopMovie(){
    return await axios.get(`${this.BASE_URL}/top/anime/1/movie`);
  }

  async fetchTopNovels(){
    return await axios.get(`${this.BASE_URL}/top/manga/1/novels`)
  }
  
  async fetchTopManhwa(){
    return await axios.get(`${this.BASE_URL}/top/manga/1/manhwa`)
  }

  async fetchTopOva(){
    return await axios.get(`${this.BASE_URL}/top/anime/1/ova`)
  }
}

export default ApiManager;
