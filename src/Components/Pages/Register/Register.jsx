import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";


const Register = () => {

    const { createUser, userProfile } = useContext(AuthContext)
    const [errorRegister, setErrorRegister] = useState('')
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        setErrorRegister('');
       
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photo = form.get('photo')
        
        if(password.length )

        // User Register 
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                userProfile(name,photo)  
                swal("Good job!", "Register Successfully", "success");
               
            })
            navigate("/")
            .catch(error => {
               setErrorRegister(error.message)
              
            })
    }






    return (
        <div className="max-w-7xl mx-auto">


            <div>
                <div className="hero  mt-5 mb-20 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">

                            <h1 className="text-4xl text-center font-bold mb-8">Register Now!</h1>
                            <div>
                                {
                                    errorRegister && <h1 className="text-red-600 text-center mb-2">{errorRegister}</h1>
                                }
                            </div>

                            <div className="card flex-shrink-0 lg:w-[400px] shadow-2xl bg-base-100 mx-auto">

                                <form onSubmit={handleRegister} className="card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                    </div>

                                    <p className="text-center text-lg">Already Have an Account <Link className="text-blue-600 font-medium" to="/login">Log in</Link></p>

                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Register;