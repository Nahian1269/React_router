import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import News from "./Component/News/News";
import Post from "./Component/Post/Post";
import Post_Details from "./Component/Posts_Details/Post_Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/About",
        element: <About></About>,
      }, 
      {
        path: "/header",
        element:<Header></Header>,
      },
      {
        path: "/news",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <News></News>
      }, 
      {
        path: "/Post" , 
        loader : () => fetch (`https://jsonplaceholder.typicode.com/posts`),
        element: <Post></Post>
      }, 
      {
        path:"/Posts/:userId" , 
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`)  ,
        element: 
        <Post_Details></Post_Details>
      }
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
