import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';  
import toast from 'react-hot-toast';


function Blogs() {
  const { loading, posts } = useContext(AppContext);

  if (loading) {
    return <div className='flex justify-center items-center min-h-screen '>
         <Spinner />
        </div>; 
  }

  else if (posts.length === 0) {
    return <div>No Post Found</div>; 
  }

  return (
    <div className='min-h-screen flex flex-col gap-6 mt-10 px-4 md:w-[80%] md:flex-row md:flex-wrap'>
      {posts.map((post, index) => (
            <div className='bg-black/50 flex flex-col gap-5 py-5 px-3 rounded-3xl shadow-[1px_1px_5px] shadow-gray-600/70 '>
                <div className='flex flex-col gap-1'>
                <p className='font-bold text-fuchsia-600 text-[1.3rem]'>{post.title}</p>
                <p className=' text-white/50'>
                By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p className='font-bold'>
                    Posted On <span>{post.date}</span>
                </p>

                </div>
                <p className='text-[1.1rem]'>
                    {post.content}
                </p>

                <div className='flex w-full flex-wrap gap-3'>
                    {post.tags.map( (tag , index) => {
                        return <span key={index}
                        className='text-blue-600'
                        >{`#${tag}`}</span>
                    })}
                </div>
            </div>
      ))}
    </div>
  );
}

export default Blogs;
