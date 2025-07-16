import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Template from './Template'
import "./main.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Bookmark from './components/Bookmark';
import Test from './components/Test';
import Home from './components/Home';
let router = createBrowserRouter([
  {
    path: "/",
    Component: Template,
    children:[
      {
        path:"/",
        Component:Home
      },
      {
        path:"bookmark",
        Component:Bookmark
      },
      {
        path:"test",
        Component:Test
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
