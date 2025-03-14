import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const { page,
        setPage,
        totalPages, handlePageChange} = useContext(AppContext);


        const prevHandler =  () =>
        {
            // page > 1 ?
            //  setPage(prev => (prev-1)) :
            //  setPage(totalPages);

            page > 1 ? 
            handlePageChange(page - 1) :
            handlePageChange(totalPages);
        }

        const nextHandler =  () =>
            {
                // page < totalPages ?
                // setPage(prev => (page+1)) :
                // setPage(1);

                page < totalPages ? 
                handlePageChange(page + 1) :
                handlePageChange(1);
            }
    

  return (
    <div className='w-full bg-gray-200 text-black flex justify-between items-center px-5 py-3 rounded-2xl mt-8'>

        <div className='flex gap-4'>
            <button onClick={prevHandler} className='bg-amber-300 py-1 px-2 rounded-2xl cursor-pointer'>
                Previous
            </button>

            <button onClick={nextHandler} className='bg-amber-300 py-2 px-2 rounded-2xl cursor-pointer'>
                Next
            </button>
        </div>
            
        <div>

            <p>Page <span className='font-bold'>{page}</span> of <span className='font-bold'>{totalPages}</span></p>

        </div>
    </div>
  )
}

export default Pagination