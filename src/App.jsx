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
const [searchTerm, setSearchTerm] =useState('')

async function handleSubmit(word){
  const response = await youtube.get("search",{
     params:{
       part:"snippet",
       maxResults:48,
       key:"AIzaSyBn1UI36ZjsSGyiXSTBNdbYVM5l5Igzjq4",
       q:word
     }
   })
     setVideos(response.data.items)
}

useEffect(()=>{
  console.log("hello")
  handleSubmit(searchTerm)
  console.log("Bye")
},[searchTerm])




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout setSearchTerm={setSearchTerm}/>}>
        <Route path="/" element={<Feed  videos={videos} setMainVideo={setMainVideo}/>} />
        <Route path="/searchresult" element={<SearchResult videos={videos} setMainVideo={setMainVideo}/>} />
        <Route path="/mainvideo" element={<MainVideo videos={videos} mainVideo={mainVideo} setMainVideo={setMainVideo}/>} />
      </Route>
    )
  );

  return <div>
      <RouterProvider router={router} />
  </div>
}

export default App