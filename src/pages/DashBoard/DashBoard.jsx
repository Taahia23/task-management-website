
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div  className='flex'>
           <div className="w-64 min-h-screen bg-black">
                <ul className="menu">
                    <li className='text-white'><NavLink to={'/'}>Home</NavLink></li>
                    <li className='text-white'><NavLink to={'profile'}>My Profile</NavLink></li>
                    <li className='text-white'><NavLink to={'createTask'}>Create Task</NavLink></li>
                    <li className='text-white'><NavLink to={'todo'}>To-Do List</NavLink></li>
                </ul>
           </div>
           <div className='flex-1'>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;