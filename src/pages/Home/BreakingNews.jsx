import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-5">
            <button className="btn btn-secondary ">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-5" to="/">Hello, This is daragon news highlight text slider creating with Marquee</Link>
                <Link to="/">Hello, This is daragon news highlight text slider creating with Marquee</Link>
                <Link to="/">Hello, This is daragon news highlight text slider creating with Marquee</Link>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;