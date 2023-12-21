import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useTodo from '../../hooks/useTodo';
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const TodoList = () => {

    const axiosPublic = useAxiosPublic()

    const [toDo] = useTodo();
    console.log(toDo);


    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosPublic.delete(`/toDo/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className='p-20'>
            <div className='flex justify-evenly my-4'>
                <h1 className="text-3xl">To-Do Tasks</h1>
                <h1 className="text-3xl">total: {toDo.length}</h1>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toDo.map((task, index) => <tr key={task._id}>
                                <th>{index + 1}</th>
                                <td>{task.title}</td>
                                <td>{task.deadline}</td>


                                <td>
                                    <Link to={`/dashboard/updateTask/${task._id}`}><button className="btn btn-ghost btn-lg "><FaEdit></FaEdit></button></Link>
                                </td>

                                <td> <button onClick={() => handleDeleteUser(task._id)} className="btn btn-ghost btn-lg "><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                        {/* row 1 */}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TodoList;