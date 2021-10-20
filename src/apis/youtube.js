import axios from "axios";
const config = require('./config.json');

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: config.nokkel
    }
});

