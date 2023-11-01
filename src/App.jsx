import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingtime, setReadingtime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time,id) => {
    const newTime = readingtime + time;
    setReadingtime(newTime)

    const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remaining)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <main className='md:flex gap-6'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks 
          bookmarks={bookmarks}
          readingtime={readingtime}
          ></Bookmarks>
        </main>
      </div>
    </>
  )
}

export default App
