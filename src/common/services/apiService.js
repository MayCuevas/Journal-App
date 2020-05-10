const apikey = process.env.REACT_APP_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;


const  apiService = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

export default apiService;