import axios from "axios"

const KEY = "AIzaSyBq5GuiEfOASCneWH9Inwzd18_bLjP9qbI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
    }
})