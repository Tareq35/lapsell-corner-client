import React, { useContext, useState } from 'react';
import './login.css';
import bgImg2 from '../../assets/bg-img/unsplash-DoGVHBMlbSw-unsplash.jpg'
import { GoogleAuthProvider } from 'firebase/auth';
import logo from '../../assets/logo/logo.png'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { providerLogin, signIn } = useContext(AuthContext);

    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('Login Successful.');
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                setLoginError(error.message);
            });
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.displayName, user.email, "buyer", "PUT");
                toast('Login Successful.');
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    const saveUser = (name, email, accountType, method) => {
        const user = { name, email, accountType };
        fetch('https://lapsell-corner-server.vercel.app/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(email);
            })
    }

    return (
        <div className='h-[70vh] flex justify-center items-center' style={{
            backgroundImage: `url(${bgImg2})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            // minHeight: '100vh',
            backgroundRepeat: 'no-repeat'
        }} >
            <div className='w-96 p-7'>
                <div className='mb-10 flex justify-center items-center bg-gray-600 rounded-md'>
                    <img className='w-24 rounded-full' src={logo} alt="" />
                    <h1 className='text-white text-4xl'><span className='text-yellow-500'>LapSell</span>Corner</h1>
                </div>
                <h2 className='text-2xl text-center text-yellow-500 font-semibold'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label" >
                            <span className="label-text text-white">Email</span>
                        </label>

                        <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" placeholder='Enter Your Email' />
                        {errors.email && <p className='text-error' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>

                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                        })} className="input input-bordered w-full max-w-xs" placeholder='Enter Your Password' />
                        <label className="label">
                            <span className="label-text text-white">Forget Password?</span>
                        </label>
                        {errors.password && <p className='text-error' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-outline btn-secondary w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p className='text-white'>New to <span className='text-yellow-200'>LapSell</span>Corner? <Link className='text-secondary' to="/signup">Create New Account</Link></p>
                <div className="divider text-white">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary w-full font-bold'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;