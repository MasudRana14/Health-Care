import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation()
    const [errorAlert, setErrorAlert] = useState()

    const changeNavigate = useNavigate('')

    const handleLogin = e => {
        e.preventDefault();
        setErrorAlert('')
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        login(email, password)

        

            .then(result => {
                swal("Good job!", "Login Successfully", "success");

                changeNavigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                setErrorAlert(error.message)
                
            })
    }





    return (

        <div className="max-w-7xl mx-auto">


            <div>
                <div className="hero  mt-5 mb-20 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">

                            <h1 className="text-4xl text-center font-bold mb-8">Login now!</h1>
                            {/* ErrorMessage  */}
                            <div>
                                {
                                    errorAlert && <h1 className="text-red-600 text-xl mb-2">{errorAlert}</h1>
                                }
                            </div>
                            <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">

                                <form onSubmit={handleLogin} className="card-body">
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
                                        <button className="btn btn-primary">Login</button>
                                    </div>

                                    <p className="text-center text-lg">Do Not Have an Account <Link className="text-green-600 font-medium" to="/register">Register</Link></p>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Login;