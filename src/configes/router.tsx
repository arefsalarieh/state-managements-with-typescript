import { createBrowserRouter } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import MainLayout from "../pages/mainLayout/MainLayout"



const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'',
                element:<Landing/>
            },
                       
        ]
    },  
])

export default router