import axios from "./api";

const moviesService = {
  async getData(url) {
    const { data } = await axios.get(url);
    return data;
  },
};

export default moviesService;
