import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import NavBar from "../shared/NavBar/NavBar";

const NewsDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            
            <div className="grid gap-5 md:grid-cols-4">
                <div className="col-span-3 border">
                <h2 className="text-3xl">News Details</h2>
                <h2>{id}</h2>

                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>

                </div>

            </div>
            
        </div>
    );
};

export default NewsDetails;