import axios from "axios";

class ApiManager {
  constructor() {
    this.BASE_URL = "https://api.jikan.moe/v3";
    this.type = ['manga','anime']
  }
  
  sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  async fetchUpcomingAnime() {
    this.sleep(2000)
    return await axios.get(`${this.BASE_URL}/top/anime/1/upcoming`);
  }
  async fetchTopManga() {
    this.sleep(2000)

    return await axios.get(`${this.BASE_URL}/top/manga`);
  }
  async fetchTopAiring() {
    this.sleep(2000)

    return await axios.get(`${this.BASE_URL}/top/anime/1/airing`);
  }
  async fetchTodayRelease(day) {
    this.sleep(2000)

    return await axios.get(`${this.BASE_URL}/schedule/${day}`);
  }
  async fetchDetails(param) {
    this.sleep(2000)

    let type = this.type.includes(param.type) ? param.type : (param.type)
    return await axios.get(`${this.BASE_URL}/${type}/${param.id}`);
  }
  async fetchRecommendation(param) {
    this.sleep(2000)

    let type = param.type !== "movie" ? "anime": param.type ;
    return await axios.get(
      `${this.BASE_URL}/${type}/${param.id}/recommendations`
    );
  }

  async fetchSearchQuery(param, page) {
    this.sleep(2000)

    let name = param.name.split("-").join(" ");
 
    return await axios.get(
      `${this.BASE_URL}/search/${param.type}?q=${name}&page=${page}`
    );
  }

  async fetchTopMovie(){
    this.sleep(2000)
    return await axios.get(`${this.BASE_URL}/top/anime/1/movie`);
  }

  async fetchTopNovels(){
    this.sleep(2000)

    return await axios.get(`${this.BASE_URL}/top/manga/1/novels`)
  }
  
  async fetchTopManhwa(){
    this.sleep(2000)

    return await axios.get(`${this.BASE_URL}/top/manga/1/manhwa`)
  }

  async fetchTopOva(){
    this.sleep(2000)

    return await axios.get(`${this.BASE_URL}/top/anime/1/ova`)
  }
}

export default ApiManager;
