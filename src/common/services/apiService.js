const apikey = process.env.REACT_APP_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;

const apiService = async () =>{
    const apikey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
    const res=  await fetch(url)
    const news =  await res.json();
    const newsData = news.articles;
    return newsData;
  };


export default apiService;

