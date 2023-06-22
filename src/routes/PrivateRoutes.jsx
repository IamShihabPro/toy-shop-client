import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <progress className="progress w-40 mx-auto items-center"></progress>
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace ></Navigate>

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;