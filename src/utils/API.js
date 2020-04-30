// import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";
import db from "../db/heroes.json"

export default {
  search: function(query) {
    return db.filter(hero => hero.name.toLowerCase().includes(query.toLowerCase()))
    // return axios.get(BASEURL + query + APIKEY);
  }
};
