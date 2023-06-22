import React, { useContext } from 'react';
import './Login.css'
import { FaGoogle, FaApple } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { getAuth, signInWithPopup } from 'firebase/auth';
const Login = () => {

    const auth = getAuth()
    const {signIn, googleProvider} = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password);

        console.log(signIn);

        signIn(email, password)
        .then(res =>{
            const loggedUser = res.user

            console.log(loggedUser);


            form.reset()
            navigate(from, {replace: true})
        })
        .catch(err =>{

            console.log(err);
        })

    }


    const  handleGoggleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(res =>{
            const user = res.user

            // console.log(user);


            navigate(from, {replace: true} )
        })
        .catch(err =>{
            console.log('error', err.message);
        })
    }
    


    return (
        <div className='p-10 '>
                
            <div className='w-96 bg-white mx-auto rounded-xl drop-shadow-xl overflow-hidden font-serif'>

                <div className=' grid'>
                    <h1 className='text-center mt-6 font-bold text-3xl'>Login</h1>
                        <form onSubmit={handleLogin} className='w-full px-10 py-5 mx-auto' >

                                <div className=''>
                                    <label className="label">
                                        <span className="label-text font-bold">Email Address</span>
                                    </label>
                                    <input type="text" name='email' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='example@gmail.com' />
                                </div>

                                <div className='mt-3'>
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' className='input w-full border border-blue-700  py-3 px-3' placeholder='type password' />
                                </div>

                               <div className='mt-3 ml-1 flex items-center'>
                                    <input type="checkbox"  className="checkbox w-4 h-4" />
                                    <p className='ml-2 text-red-500'>Remember me</p>
                                    <Link className='ml-auto text-gray-500'>Forgot password?</Link>
                               </div>
                                                                
                                <div className='mt-3'>
                                     <button className="btn clr  w-full">Login</button>
                                </div>

                                <div className='mt-4 mx-auto flex justify-center items-center gap-2'>
                                    <hr className='w-20 h-1 bg-red-500' />
                                   <h1>OR</h1>
                                   <hr className='w-20 h-1 bg-red-500' />
                                </div>

                                <div className='mt-4 grid md:grid-cols-2 gap-2 mb-8'>
                                    <button onClick={handleGoggleSignIn} className='btn clr flex justify-center items-center'> <FaGoogle className='w-10 items-center'></FaGoogle> <span className=''> google</span> </button>
                                    <button className='btn gith flex justify-center items-center'> <FaApple className='w-10 items-center'></FaApple> <span className=''>Apple</span> </button>
                                </div>

                                <div className='mb-3'>
                                    <h1 className='ms-4'>Don't have an account? <span className='text-red-500'> <Link to='/register'>Register Now</Link> </span> </h1>
                                </div>
                        </form>
                </div>
            </div>

        </div>
    );
};

export default Login;