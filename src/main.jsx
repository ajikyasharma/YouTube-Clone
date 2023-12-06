import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Feed from './Components/Feed.jsx'
import SearchResult from './Components/SearchResult.jsx'
import MainVideo from './Components/MainVideo.jsx'
import Layout from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Feed/>} />
      <Route path="/searchresult" element={<SearchResult />} />
      <Route path="/mainvideo" element={<MainVideo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render( 

  <RouterProvider router={router} />
)
