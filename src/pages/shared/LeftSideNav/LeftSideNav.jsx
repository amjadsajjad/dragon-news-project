import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('../../../../public/categories.json')
        .then(res => res.json())
        .then(data=>setCategories(data))
    },[])
    
    return (
        <div className="space-y-3">
            <h2>Categories:{categories.length}</h2>
            {
                categories.map(category => <Link className="block font-semibold text-lg" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
            
        </div>
    );
};

export default LeftSideNav;