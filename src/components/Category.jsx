import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react'


const Category = ({fetchURL}) => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{    

    axios.get(fetchURL).then((response) =>{
      
      setMovies(response.data.results)
    })
  },[fetchURL])
  
  return (
    
    <div className="text-white font-bold mx-auto pt-20 pl-5" >
      {movies.map((item,id)=>(
        <div className="w-[160px] sm:w-[200px] md:w=[240px] lg:w-[300px] inline-block cursor-pointer relative p-2 mr-4 pl-4">
        <img className="w-full h-auto block"src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>

        </div>
      </div>
      ))}
    </div>
  )
      }
export default Category
