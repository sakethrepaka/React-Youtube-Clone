import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'bdff66d5bfmsha6b120b80df685dp19edd1jsnd5e8f666557b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI = async(url)=>{
       const {data} =  await axios.get(`${BASE_URL}/${url}`,options)
       return data
  }