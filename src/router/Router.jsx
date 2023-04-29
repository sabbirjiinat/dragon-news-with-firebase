import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Category from "../SharedPage/Category/Category";
import NewsDetailsLayout from "../Layout/NewsDetailsLayout/NewsDetailsLayout";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../SharedPage/Login/Login";
import Register from "../SharedPage/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../components/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: 'terms',
                element:<Terms></Terms>
            }
        ]
        

    },
    {
        path: '/category',
        element: <Layout></Layout>,
        children: [
        
            {
                path: ':id',
                element: <Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
        
    },

    {
        path: '/news',
        element: <NewsDetailsLayout></NewsDetailsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
                
            }
        ]
      
        
    }

])


export default router;