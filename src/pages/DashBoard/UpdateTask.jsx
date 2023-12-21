import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";



const UpdateTask = () => {
    const{title, description, deadline, _id} = useLoaderData()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const axiosPublic = useAxiosPublic()
    // const axiosSecure = useAxiosSecure()

    const onSubmit = async(data) => {
        console.log(data);

        if (data) {
            const taskItem = {
                title: data.title,
                deadline: data.deadline,
                description: data.description,
              
            }
            const taskRes = await axiosPublic.patch(`/toDo/${_id}`, taskItem)
            console.log(taskRes.data);
            if (taskRes.data.modifiedCount>0) {
                reset()
                // show success popup
                Swal.fire("Task updated successfully!");
            }
        }

    }
    return (
        <div>
            <h1 className="text-5xl text-center font-bold my-32 ">Update Task - {title}</h1>
            <div className="card  w-full max-w-6xl mx-auto  shadow-2xl bg-base-100 mb-32">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input defaultValue={title} type="text" {...register("title", { required: true })} name="title" placeholder="Enter Title" className="input input-bordered" required />
                        {errors.title && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input defaultValue={deadline} type="date" {...register("deadline", { required: true })} name="deadline" placeholder="Enter task Deadline" className="input input-bordered" required />
                        {errors.deadline && <span>This field is required</span>}

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input defaultValue={description} type="text" {...register("description", { required: true })} name="description" placeholder="Enter task Description" className="input input-bordered" required />
                        {errors.description && <span>This field is required</span>}
                    </div>

                    <div className="form-control">
                        {/* <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <input type="text" name="priority" placeholder="Enter task priority" className="input input-bordered" required /> */}

                        <select className="py-4 border rounded-xl px-3">
                            <option value="female" defaultChecked>Choose Priority</option>
                            <option value="female">High</option>
                            <option value="male">Moderate</option>
                            <option value="other">Low</option>
                        </select>

                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Create Task" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;