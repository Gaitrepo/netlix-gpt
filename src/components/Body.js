import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import { useDispatch } from 'react-redux'


const Body = () => {

  const dispatch=useDispatch();
  // const navigate=useNavigate();

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);

   //we use this eventListener for once that's why using useEffect hooke here
    


  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
