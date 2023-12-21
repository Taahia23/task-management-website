import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from "../pages/DashBoard/DashBoard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/DashBoard/Profile";
import CreateTask from "../pages/DashBoard/CreateTask";
import TodoList from "../pages/DashBoard/TodoList";
import UpdateTask from "../pages/DashBoard/UpdateTask";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signUp',
            element: <SignUp></SignUp>
        },
    
      ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <Profile></Profile>
            },
            {
                path: 'createTask',
                element: <CreateTask></CreateTask>
            },
            {
                path: 'toDo',
                element: <TodoList></TodoList>
            },
            {
                path: 'updateTask/:id',
                element: <UpdateTask></UpdateTask>,
                loader: ({params}) => fetch(`http://localhost:5000/toDo/${params.id}`)
              },
        ]
    }
  ]);

