import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Register = () => {

const { createUser, setUser, updateUserProfile } = useContext(AuthContext) 
const [passwordError, setPasswordError] = useState("")

const [showPassword, setShowPassword] = useState(false) 
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {fullName, photoURL, email, password} = data 
        

        if(!/^(?=.*[A-Z])/.test(password)){
          setPasswordError("Password must have an uppercase letter")
          return 
        }

        if(!/^(?=.*[a-z])/.test(password)){
          setPasswordError("Password must have a lowercase letter")
          return
        }

        if(!/^.{6,}$/.test(password)){
          setPasswordError("Password length must be at least 6 characters")
          return; 
        }
     


        createUser(email, password)
        .then(result => {
          updateUserProfile(fullName, photoURL)
          .then(() => {
            data.reset() 
            setUser((prevUser) => {
              return {...prevUser, displayName: fullName,  photoURL: photoURL}

            })
          })
          
        toast.success("Account Signed Up Successfully")
        })
        .catch(error => {
          toast.error("This email has already been used")
          data.reset()
        }) 
        setPasswordError("")
        
      }



    return (
        <div className="hero min-h-screen bg-base-200">
          <Helmet>
           <title>Havenly | Sign Up</title>
           </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">

            <form onSubmit={handleSubmit(onSubmit)} className="">


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered" 
                {...register("fullName", { required: true })} />
                {errors.fullName && <span className= "text-red-500">This field is required</span>}

              </div>

              <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" 
          {...register("photoURL", { required: true })} />
          {errors.photoURL && <span className= "text-red-500">This field is required</span>}
        </div> 


              <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className= "text-red-500">This field is required</span>}
        </div>




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex relative form-control">
                <input type={showPassword ? "text":"password"} placeholder="password" className="input  input-bordered" 
                {...register("password", { required: true })} />
                <span className="absolute right-2 top-1/3" onClick={() => setShowPassword(!showPassword)}>{ showPassword? <IoEyeOff /> : <FaEye />

}</span>
                </div>
                {passwordError && <span className= "text-red-500">{passwordError}</span> }
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="mt-4">Already have an account?<Link to="/login" className="text-blue-500 font-bold ml-2">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;