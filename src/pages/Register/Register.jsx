import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';

const Register = () => {

    const {user, createUser} = useContext(AuthContext)
    console.log(createUser);

    const [accept, setAccept] = useState(false)

    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoURL = form.photoURL.value

        console.log(name, email, password, photoURL);

        createUser(email, password)
        .then(res =>{
            const loggedUser = res.user
            console.log(loggedUser);

            const auth = getAuth();
            updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
            }).then(() => {
            // Profile updated!
            // ...
            console.log("user updated")
            }).catch((error) => {
            // An error occurred
            // ...
            });

            form.reset()
        })
        .catch(err =>{
            console.log(err);
        })

    }

    const handleAccept = event =>{
        setAccept(event.target.checked)
    }


    return (
        <div className='py-10 '>        
        
        <div className='w-96 bg-white mx-auto rounded-xl drop-shadow-xl overflow-hidden font-serif'>

            <div className=' grid'>
                <h1 className='text-center mt-6 font-bold text-3xl'>Register Account</h1>
                    <form onSubmit={handleRegister} className='w-full px-10 py-5 mx-auto' >

                            <div className=''>
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" name='name' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='enter name' required />
                            </div>

                            <div className='mt-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Email Address</span>
                                </label>
                                <input type="text" name='email' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='example@gmail.com' required />
                            </div>

                            <div className='mt-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name='password' className='input w-full border border-blue-700  py-3 px-3' placeholder='type password' required />
                            </div>

                            <div className='mt-2'>
                                <label className="label">
                                    <span className="label-text font-bold">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' className='input w-full border border-blue-700 rounded-lg py-3 px-3' placeholder='photo url' required />
                            </div>

                           <div className='mt-4 ml-1 flex items-center'>
                                <input onClick={handleAccept} type="checkbox" name='check'  className="checkbox w-4 h-4" />
                                <p className='ml-4 text-red-500'>Accept Terms and Conditions</p>
                           </div>
                                                            
                            <div className='mt-4 mb-4'>
                                 <button className="btn clr  w-full" disabled={!accept} >Sign up</button>
                            </div>
                            <div className='mb-4' >
                                <h1 className='ms-4'>Already have an account? <span className='text-red-500'> <Link to='/login'>Login Now</Link> </span> </h1>
                            </div>

                    </form>
            </div>
        </div>

    </div>
    );
};

export default Register;