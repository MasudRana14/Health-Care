import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(
                swal("Good job!", "SignOut Successfully", "success")
            )
            .catch()
    }


    const navList = <>


        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
            }
        >
            Home
        </NavLink>




        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
            }
        >
            About Us
        </NavLink>


        {
            user &&

            <NavLink
                to="/team"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                }
            >
                Our Team
            </NavLink>


        }

        {
            user &&
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                }
            >
                Blog
            </NavLink>


        }



        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-500 underline" : ""
            }
        >
            Contact
        </NavLink>

            {
                user ? "" :  <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-500 underline" : ""
                }
            >
               Register
            </NavLink>
    
            }



    </>

    return (
        <div className="navbar bg-blue-100 mt-4 max-h-2 rounded-t-lg px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu gap-3 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>

                <div className="flex items-center gap-2">
                    <img className="w-14" src="https://i.ibb.co/NY2DBcw/pngegg.png" alt="" />
                    <h3 className="text-3xl font-bold text-indigo-600">Health <span className="text-lime-600">Care</span></h3>
                </div>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-semibold text-lg gap-6 menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end gap-2">

                {
                    user && <div className="flex items-center gap-2">

                        <div>
                        <h2 className="font-medium text-center">{user?.displayName
                        }</h2>
                        <h2 className="font-normal">
                            {user.email}
                        </h2>
                        </div>
                        
                        <div className="avatar">
                            <div className="w-9 rounded-full">
                            
                                <img src={user?.photoURL} />
                                
                            </div>

                        </div>

                    </div>
                }





                <div>
                    {/* <h2>{user.displayName}</h2> */}
                    {
                        user ? <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }
                </div>


            </div>
        </div>
    );
};

export default NavBar;
