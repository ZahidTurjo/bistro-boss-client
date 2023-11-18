
import { TiSocialGooglePlus } from "react-icons/ti";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const navigate= useNavigate()
    const { googleLogin}=useAuth()
    const axiosPublic=useAxiosPublic()
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
         const userInfo={
            email:result.user.email,
            name:result.user?.displayName
         }
         axiosPublic.post('/users',userInfo)
         .then(res=>{
            console.log(res.data);
            if(res.data){
Swal.fire('login succesfully')
                navigate('/')
            }
      
         })

        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="flex justify-center">
                <button onClick={handleGoogleLogin} className="btn">
                    <TiSocialGooglePlus className="text-3xl text-blue-600"></TiSocialGooglePlus>
                   Sign in with google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;