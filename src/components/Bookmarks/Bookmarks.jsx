import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingtime}) => {
    // const [title]= bookmarks
    return (
        <div className="md:w-1/3 bg-gray-500 ml-6 mt-4">
            <h3 className="text-3xl text-center">Your Reading time: {readingtime} Min</h3>
            <h2 className='text-3xl text-center p-4 text-white'>Bookmarked Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.object.isRequired,
    readingtime: PropTypes.number,
}

export default Bookmarks;