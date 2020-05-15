
import { useContext } from 'react';
import NewsContext from "../../contexts/newsContext";

const UseData = () => {
   const [news, setNews] = useContext(NewsContext)
    console.log(NewsContext);
    const update = (article) => {
        setNews(
            (prevState) => ({ ...prevState, article })
        )
    }
    return {
        article: {},
        update,
    }
}

export default UseData