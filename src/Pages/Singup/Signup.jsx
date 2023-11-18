import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Signup = () => {
    const axiosPublic = useAxiosPublic()
    const navigate=useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        console.log('data', data);
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photo = data.photo
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(name, photo)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res=>{
                            if(res.data.insertedId){
                                console.log('data added succesfully');
                                reset()
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your work has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/')

                            }
                        })

                        

                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })


    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss || sign up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col md:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600 font-bold">This field is required *</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600 font-bold">This field is required *</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Signup" />

                            </div>
                        </form>
                        <p className='text-center my-7'>Already have an account? go to <span className='text-blue-500'><Link to="/login">Login</Link></span></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;