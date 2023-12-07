import { useEffect, useState } from "react"
import youtube from "./api/youtube"
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Layout"
import Feed from "./Components/Feed"
import SearchResult from "./Components/SearchResult"
import MainVideo from "./Components/MainVideo"


//AIzaSyBn1UI36ZjsSGyiXSTBNdbYVM5l5Igzjq4
const App= ()=>{

const [videos, setVideos] = useState([])
const [mainVideo, setMainVideo] = useState([])

async function handleSubmit(searchTerm){
  const response = await youtube.get("search",{
     params:{
       part:"snippet",
       maxResults:48,
       key:"AIzaSyBn1UI36ZjsSGyiXSTBNdbYVM5l5Igzjq4",
       q:searchTerm
     }
   })
     setVideos(response.data.items)
}

useEffect(()=>{
  console.log("hello")
  handleSubmit('doremon')
  console.log("Bye")
},[])




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Feed  videos={videos}/>} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/mainvideo" element={<MainVideo />} />
      </Route>
    )
  );

  return <div>
      <RouterProvider router={router} />
  </div>
}

export default App