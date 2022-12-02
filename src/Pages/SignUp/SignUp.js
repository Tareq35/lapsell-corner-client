import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';
import bgImg2 from '../../assets/bg-img/unsplash-DoGVHBMlbSw-unsplash.jpg'
import logo from '../../assets/logo/logo.png'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { providerLogin, createUser, updateUser } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully.');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.accountType, "POST");
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.displayName, user.email, "buyer", "PUT");
                toast('User Created Successfully.');
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
                setCreatedUserEmail(email);
            })
    }



    return (
        <div className='h-[80vh] flex justify-center items-center' style={{
            backgroundImage: `url(${bgImg2})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} >
            <div className='w-96 p-9'>
                <div className='mb-10 flex justify-center items-center bg-gray-600 rounded-md'>
                    <img className='w-24 rounded-full' src={logo} alt="" />
                    <h1 className='text-white text-4xl'><span className='text-yellow-500'>LapSell</span>Corner</h1>
                </div>
                <h2 className='text-2xl text-center text-yellow-500 font-semibold'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-white">Name <span className='text-red-500'>*</span></span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs " {...register("name", {
                            required: "Name is Required"
                        })} placeholder="Enter Your Name" />
                        {errors.name && <p className='text-error'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-white">Email <span className='text-red-500'>*</span></span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email", {
                            required: true
                        })} placeholder="Enter Your Email" required />
                        {errors.email && <p className='text-error'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-white ">Password <span className='text-red-500'>*</span></span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must have uppercase number and special character" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong' }
                        })} placeholder="Enter Your Password" />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    </div>

                    <div className='mb-7'>
                        <label className="label"><span className="label-text text-white font-semibold text-base">Select Account Type <span className='text-red-500'>*</span></span></label>

                        <select {...register("accountType")} className='rounded-lg w-full outline-none px-3 py-3'>
                            <option value="buyer">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                    </div>

                    <input className='btn btn-outline btn-secondary w-full mt-6' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-error'>{signUpError}</p>}
                </form>
                <p className='text-white'>Already have an Account ? <Link className='text-secondary' to="/login">Login</Link></p>
                <div className="divider text-white">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary w-full font-bold'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;