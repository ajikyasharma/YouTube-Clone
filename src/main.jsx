import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Feed from './Components/Feed.jsx'
import SearchResult from './Components/SearchResult.jsx'
import MainVideo from './Components/MainVideo.jsx'
import Layout from './Layout.jsx'
import youtube from './api/youtube.js'


// const [videos, setVideos] = useState([])
// const [mainVideo, setMainVideo] = useState([])

// async function handleSubmit(searchTerm){
//   const response = await youtube.get("search",{
//      params:{
//        part:"snippet",
//        maxResults:10,
//        key:"AIzaSyDuZGboufPQ2aNq6cXNeFRNhNCucusWPIY",
//        q:searchTerm
//      }
//    })
//      setVideos(response)
// }

// handleSubmit('doremon')


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/" element={<Feed/>} />
//       <Route path="/searchresult" element={<SearchResult />} />
//       <Route path="/mainvideo" element={<MainVideo />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById('root')).render( 

  <App />
)
