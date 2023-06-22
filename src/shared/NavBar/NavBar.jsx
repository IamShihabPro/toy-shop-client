import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Disney.png'
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogout =()=>{
    logOut()
    .then(()=>{})
    .catch(err => {
      console.log(err);
    })
  }

    return (
        <div className="navbar bg-base-200 mt-2 font-serif">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-4 shadow bg-base-00 rounded-box w-52 items-center justify-center ">
      <li><Link to='/'>Home</Link></li>


      <li>
         {
            user ? <> <Link to='/alltoys'>All Toys</Link>  </>  : 
            <Link
            to='/login'>
            
          </Link>
          }
      </li>

      <li>
         {
            user ? <> <Link to='/addtoys'>Add Toys</Link> </>  : 
            <Link
            to='/login'>
            
          </Link>
          }
      </li>
    
      <li>
         {
            user ? <> <Link to='/mytoys'>My Toys</Link> </>  : 
            <span></span>
          }
      </li>


      <li><Link to='/blog'>Blog</Link></li>
      {/* <li><Link to='/login'>Login</Link></li> */}

      <li>
         {
            user ? <> <span> <img className='w-10 rounded-full' src={user.photoURL} alt="" /> </span>   <button type="button" className="btn text-white">Sign out</button> </>  : 
            <Link
            to='/login'>
            Login
          </Link>
          }
      </li>

      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl ms-3">
        <img className='w-20' src={Logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center text-blue-900 font-bold hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/' className='hover:text-sky-400' >Home</Link></li>


      {/* <li><Link to='/alltoys'>All Toys</Link></li>
      <li><Link to='/addtoys'>Add Toys</Link></li>
      <li><Link to='/mytoys'>My Toys</Link></li> */}

      <li>
         {
            user ? <> <Link to='/alltoys'>All Toys</Link>  </>  : 
            <Link
            to='/login'>
            
          </Link>
          }
      </li>

      <li>
         {
            user ? <> <Link to='/addtoys'>Add Toys</Link> </>  : 
            <Link
            to='/login'>
            
          </Link>
          }
      </li>
    
      <li>
         {
            user ? <> <Link to='/mytoys'>My Toys</Link> </>  : 
            <span></span>
          }
      </li>
    

      <li><Link to='/blog'>Blog</Link></li>
      {/* <li><Link to='/login'>Login</Link></li> */}

      <li>
         {
            user ? <> <span> <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" /> </span>   <button onClick={handleLogout} type="button" className="btn text-white">Sign out</button> </>  : 
            <Link
            to='/login'>
            Login
          </Link>
          }
      </li>
      
    </ul>
  </div>
 
</div>
    );
};

export default Navbar;