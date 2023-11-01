import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtag} = blog
    return (
        <div>
            <img src={cover} alt={`Cover picture of image ${title}`}/>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img className='w-32' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            {
                hashtag.map((hash,idx)=> <p className='inline mx-4' key={idx}>{hash}</p>)
            }
            
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}

export default Blog;