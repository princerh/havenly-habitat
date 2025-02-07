/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../assets/Logo-google-icon-PNG.png"
import githubIcon from "../assets/github-logo.png"
import { Helmet } from "react-helmet-async";
import 'animate.css';
import {  toast } from "react-toastify";

const Login = () => {

    const { login, loginGoogle, setUser, loginGithub } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data


        if (!/^(?=.*[A-Z])/.test(password)) {
            setPasswordError("Password must have an uppercase letter")
            return
        }

        if (!/^(?=.*[a-z])/.test(password)) {
            setPasswordError("Password must have a lowercase letter")
            return
        }

        if (!/^.{6,}$/.test(password)) {
            setPasswordError("Password length must be at least 6 characters")
            return;
        }



        login(email, password)
            .then(result => {
                console.log(result.user);
            
toast.success("User Login Succesfull")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.warning("This email has not been registered yet.")
            console.log(error.message) 
            })
        setPasswordError("")
        
    }

    const handlesignInGoogle = () => {
        loginGoogle()
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => alert(error.message))
    }


    const handlesignInGit = () => {
        loginGithub()
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className="hero   bg-base-200 animate_animated animate__fadeInLeftBig ">
            <Helmet> 
                <title>Havenly | Sign In</title>
            </Helmet>


            <div className=" my-8">

                <div className="card w-fit  lg:w-96 max-w-sm shadow-2xl bg-base-100 p-5">
<h2 className="font-bold text-2xl text-center drop-shadow-lg">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>




                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex relative form-control">
                                <input type={showPassword ? "text" : "password"} placeholder="password" className="input  input-bordered"
                                    {...register("password", { required: true })} />
                                <span className="absolute right-2 top-1/3" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeOff /> : <FaEye />

                                }</span>
                            </div>
                            {passwordError && <span className="text-red-500">{passwordError}</span>}
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>

                        <div className="space-y-4">

                            <div className="flex justify-center items-center gap-2 mt-4">

                                <div className="border-b-2 w-full"></div>
                                <div>Or</div>
                                <div className="border-b-2 w-full"></div>

                            </div>

                            <div onClick={handlesignInGoogle} className="flex items-center gap-3 btn btn-outline btn-primary w-full ">
                                <img className="w-5" src={googleIcon} alt="" />
                                <p>Sign In with Google</p>
                            </div>

                            <div onClick={handlesignInGit} className="flex  items-center gap-3 btn btn-outline btn-primary w-full ">
                                <img className="w-5" src={githubIcon} alt="" />
                                <p>Sign In with Github</p>
                            </div>

                        </div>

                    </form>
                    <p className="mt-4">Don't have an account?<Link to="/register" className="text-blue-500 font-bold ml-2">Sign Up</Link></p>
                </div>
            </div>
       
        </div>
    );
};

export default Login;