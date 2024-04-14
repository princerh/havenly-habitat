import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../assets/user.png" 
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Nav = () => {

    const {user, logout} = useContext(AuthContext)


    const NavLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/update">Update Profile</NavLink></li>
   </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {NavLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Havenly Habitat</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
  

      {
      user ? 
      <div className="flex items-center gap-2"> <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={`${user? user.photoURL : userDefaultPic}`} />
      </div>
    </div> 
    <button onClick={logout} className="btn ">Sign Out</button>  </div> :  <Link to="/login">
   <button className="btn ">Sign In</button>
   </Link> } 
  
  </div>
</div>
    );
};

export default Nav;