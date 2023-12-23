import { useEffect, useState } from "react";
import MiddleNewsCard from "./MiddleNewsCard";

const MiddleNewsCards = () => {
    const [news,setNews] = useState([]);
    useEffect(()=>{
        fetch('../../../../public/news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    
    return (
        <div>
            <h2>All of the card are here. Card length:{news.length}</h2>
            {
                news.map((singleNews,index) => <MiddleNewsCard key={index} singleNews={singleNews}></MiddleNewsCard>)
            }


            
        </div>
    );
};

export default MiddleNewsCards;