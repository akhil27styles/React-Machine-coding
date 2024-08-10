import { useState } from 'react'
import './App.css'
import SearchFilter from './components/SearchFilter'
import Debounce from './components/Debounce'
import PhoneNum from './components/PhoneNum'
import { BrandFilter } from './components/Ecommerce-filter/BrandFilter'
import Folder from './components/folders-structure/Folder'
import data from './components/folders-structure/data.js'
import MultiSelectSearch from './components/MultiSelectSearch.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrandFilter /> */}
      {/* <SearchFilter/> */}
      {/* <Debounce/> */}
       {/* <PhoneNum/> */}
       {/* <Folder data={data}/> */}
       <MultiSelectSearch />
    </>
  )
}

export default App
