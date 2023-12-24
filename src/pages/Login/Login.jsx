import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate();


    const handleSubmitLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        // sign in user
        signInUser(email,password)
        .then(result=>{
            console.log(result)
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error)
        })

        

    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login Now!</h1>

                    </div>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmitLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center ">If no account? than <Link className="text-blue-700 font-semibold" to="/register">Register</Link> </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;