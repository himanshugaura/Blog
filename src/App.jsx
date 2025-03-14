import { useContext, useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'


function App() {

    const {fetchBlog} = useContext(AppContext);
  
  useEffect(() => {
   fetchBlog();
  }, [])
  
  

  return (
    <>
    <div className='w-full flex flex-col items-center mt-5'>

    <Header />
    </div>
    <div className='w-full p-3 flex flex-col items-center relative h-fit'>
    <Toaster></Toaster>

   
    <Blogs />
   
    <div className='sticky bottom-5 w-[80vw]'>

    <Pagination />
    </div>
   

    </div>
    
      
    </>
  )
}

export default App
