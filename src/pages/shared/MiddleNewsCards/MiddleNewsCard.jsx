
import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const MiddleNewsCard = ({ singleNews }) => {

    return (
        <div className="card w-full mb-10 bg-base-100 shadow-xl">
            <div className='flex px-3  justify-between py-2 items-center bg-[#F3F3F3]'>
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='w-10 border rounded-full' src={singleNews.author.img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>{singleNews.author.name}</h2>
                        <p className=' text-sm text-gray-500'>{singleNews.author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <FaBookmark className='fill-accent'></FaBookmark>
                    <FaShareAlt className='fill-accent'></FaShareAlt>

                </div>
            </div>
            <div className='my-3 px-3'>
                <h2 className='text-xl font-bold'>{singleNews.title}</h2>

            </div>
            <figure className='px-3 '>
                <img className='rounded-lg' src={singleNews.image_url} alt="Shoes" />
            </figure>
            <div className="card-body">

                <div className=" text-justify">
                {
                        singleNews.details.length > 300 ? <><p className='text-gray-600 '>{singleNews.details.slice(0, 300)}</p> <Link to={`/news/${singleNews._id}`} className="text-blue-600 font-semibold">Read More</Link></> : <p className='text-gray-600 '>{singleNews.details}</p>

                    }
                </div>

                <hr />
                <div className="card-actions flex justify-between">
                    <div className="flex items-center gap-2">
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" checked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                        </div>
                        <p>4.5</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaEye></FaEye>
                        <p className='text-gray-500'>{singleNews.total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

MiddleNewsCard.propTypes = {
    singleNews: PropTypes.object
}

export default MiddleNewsCard;