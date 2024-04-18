import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/HomePage/Home";
import About from "./pages/About/About";
import Error from "./pages/Error";
import ContactPage from "./pages/ContactPage/ContactPage";
import Login from "./Shared/Auth/Login";
import SignUp from "./Shared/Auth/SignUp";
import Update from "./pages/Update/Update";
import AdminRouter from "./providers/AdminRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/update',
                element: <AdminRouter><Update></Update></AdminRouter> 
            }
        ]
    }
])

export default router;