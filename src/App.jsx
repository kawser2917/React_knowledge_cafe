import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <main className='md:flex gap-6'>
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </main>
      </div>
    </>
  )
}

export default App
