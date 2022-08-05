import React,{useEffect} from 'react'
import HeroBanner from './components/HeroBanner'
import SearchBox from './components/SearchBox'
import {instance} from './axios/axios'
import './App.css'
function App() {
  useEffect(()=>{
    instance.get(`crawl/q=best+iphone&num=100`).then(res=>console.log('imageRes'+ res.data))
},[])

  return (
    <div className='app'>
      <HeroBanner/>
      <SearchBox/>
    </div>
  )
}

export default App