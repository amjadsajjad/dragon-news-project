import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3">
                <h2 className="text-xl font-semibold">Login With</h2>
                <button className="btn btn-outline flex gap-2 items-center w-full">
                    <FaGoogle></FaGoogle>
                    Log in with Google
                </button>
                <button className="btn btn-outline flex gap-2 items-center w-full">
                    <FaGithub></FaGithub>
                    Log in with GitHub
                </button>
                
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold">Find Us On</h2>
                <a href="https://www.facebook.com/" className="flex justify-center gap-2 items-center border rounded-t-lg p-4">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a href="https://twitter.com/?lang=en" className="flex justify-center gap-2 items-center border-x p-4">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a href="https://www.instagram.com/" className="flex justify-center gap-2 items-center border rounded-b-lg p-4">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
                
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
                
            </div>


        </div>
    );
};

export default RightSideNav;