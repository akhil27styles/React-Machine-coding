import { useState } from 'react'
import './App.css'
import SearchFilter from './components/SearchFilter'
import Debounce from './components/Debounce'
import PhoneNum from './components/PhoneNum'
import { BrandFilter } from './components/Ecommerce-filter/BrandFilter'
import Folder from './components/folders-structure/Folder'
import data from './components/folders-structure/data.js'
import MultiSelectSearch from './components/MultiSelectSearch.js'
import CommentApp from './components/Nested-Comments/CommentApp.jsx'
import Folders from './components/Advance-Folder/Folders.js'
import CarouselApp from './components/Image-Carousel/CarouselApp.js'
import ProgressBarApp from './components/ProgressBarApp.js'
function App() {
  const [folders, setfolders] = useState(data);

  return (
    <>
    {/* <BrandFilter /> */}
      {/* <SearchFilter/> */}
      {/* <Debounce/> */}
       {/* <PhoneNum/> */}
       {/* <Folder data={data}/> */}
       {/* <MultiSelectSearch /> */}
       {/* <CommentApp/> */}
       {/* <Folders data={data}  setData={ setfolders} /> */}
       {/* <CarouselApp/> */}
       <ProgressBarApp />
    </>
  )
}

export default App
