import { FaGoogle } from "react-icons/fa";


import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const axiosPublic = useAxiosPublic()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div>
            <div className="block mb-5">
                <button onClick={handleGoogleSignIn} className="btn flex  block m-auto">
                    <FaGoogle className=""></FaGoogle>
                    <h1> Google</h1>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;