import axios from "./api";
import request from "./request";

const moviesService = {
  async getData(url) {
    const { data } = await axios.get(url);
    return data;
  },
};

export default moviesService;
