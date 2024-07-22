import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Login from "../Pages/Login"
import SignUp from "../Pages/SignUp"

export const Root = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/login", element: <Login/>},
    {path: "/signup", element: <SignUp/>}

])