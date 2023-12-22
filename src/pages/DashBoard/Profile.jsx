import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {


    const { user } = useContext(AuthContext);

    return (
        <div>
            <div className="">

                <div className="avatar block mb-10">
                    <div className="w-24 block mx-auto  rounded-full text-center">
                        <img className="" src={user?.photoURL} />
                    </div>
                </div>
            </div>
            <h2 className="text-3xl text-center">
                <span className="text-blue-800">Hi, welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }

            </h2>
            <div className="text-center ">
                <h1 className="text-2xl"> <span className="text-blue-800"> Your Role: </span>User</h1>
            </div>
        </div>
    );
};

export default Profile;