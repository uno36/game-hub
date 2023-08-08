import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e20a7d3bcbb54f998cc72f54ba6679dc'
  }
})