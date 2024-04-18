import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../assets/user.png" 
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Nav = () => {

    const {user, logout} = useContext(AuthContext)
    

    const NavLinks = <>
    <li><NavLink className={({isActive}) => (isActive)? `${user ? "transition duration-300 font-bold text-orange-400 border-b-2 border-orange-400" : " text-lime-500 border-b-2 border-lime-500 font-bold"} to="/"}` : ``} to="/">Home</NavLink></li>
       {user && <li><NavLink className={({isActive}) => (isActive)? `${user ? "transition duration-300 font-bold text-orange-400 border-b-2 border-orange-400" : " text-lime-500 border-b-2 border-lime-500 font-bold"} to="/"}` : ``} to="/update">Update Profile</NavLink></li>}
       <li><NavLink className={({isActive}) => (isActive)? `${user ? "transition duration-300 font-bold text-orange-400 border-b-2 border-orange-400" : " text-lime-500 border-b-2 border-lime-500 font-bold"} to="/"}` : ``} to="/service">Services</NavLink></li>
       <li><NavLink className={({isActive}) => (isActive)? `${user ? "transition duration-300 font-bold text-orange-400 border-b-2 border-orange-400" : " text-lime-500 border-b-2 border-lime-500 font-bold"} to="/"}` : ``} to="/about">About</NavLink></li>
   </> 
    return (
        <div className="navbar bg-base-100 shadow-xl sticky top-0 z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {NavLinks}
      </ul>
    </div>
    <a className=" dancing text-xl">Havenly Habitat</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
    {NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
  

      {
      user ? 
      <div className="flex items-center gap-2"> <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div title={user.displayName}  className="w-10 border rounded-full">
        < img className="" alt="User" src={`${user? user.photoURL : userDefaultPic}`} />
      </div>
    </div> 
    <button onClick={logout} className="bg-orange-300 hover:bg-orange-400 cursor-pointer active:scale-90 font-bold text-black px-3 py-2 rounded-xl">Sign Out</button>  </div> :  <Link to="/login">
   <button className="bg-lime-400 hover:bg-lime-500 font-bold cursor-pointer active:scale-90 text-black px-3 py-2 rounded-xl">Sign In</button>
   </Link> } 
  
  
  </div>
</div>
    );
};

export default Nav;
