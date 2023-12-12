import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/HomePage/Home";
import About from "./pages/About/About";
import Error from "./pages/Error";
import ContactPage from "./pages/ContactPage/ContactPage";

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
            }
        ]
    }
])

export default router;