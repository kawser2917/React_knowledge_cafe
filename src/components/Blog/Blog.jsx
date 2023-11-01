import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtag } = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of image ${title}`} />
            <div className='flex justify-between items-center mt-6'>
                <div className='flex gap-3'>
                    <img className='w-32' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span >{reading_time} min read</span>
                    <button className='mr-3 text-2xl text-red-600' onClick={()=>handleAddToBookmark(blog)}><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl mt-4">{title}</h2>
            {
                hashtag.map((hash, idx) => <p className='inline mx-2' key={idx}>#{hash}</p>)
            } <br />

            <button className='text-purple-500 underline font-bold' onClick={()=>handleMarkAsRead(reading_time)}>Mark as Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;