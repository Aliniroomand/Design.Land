import { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./components/Home";
import Balloon_Design from "./components/Balloon_design/Balloon_Design";
import Fruit_Design from "./components/Fruit_design/Fruit_Design";
import Flower_Design from "./components/Flower_design/Flower_Design";
import Contact_comments from "./components/Contact_Comments/Contact_comments";
import Learning from "./components/learning/Learning";





const routes:RouteObject[]=[{
    path: "/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
        {index:true, element:<Home/>},
        {path:'/balloon', element:<Balloon_Design/>},
        {path:'/fruit', element:<Fruit_Design/>},
        {path:'/flower', element:<Flower_Design/>},
        {path:'/learning', element:<Learning/>},
        {path:'/commentsAndContact', element:<Contact_comments/>},

    ]

}]
{/* <App/> */}


export default routes;