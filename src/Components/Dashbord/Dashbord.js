import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../JS/actions/user';

const Dashbord = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return <div>
    <button onClick={()=>{dispatch(logout());
    navigate("/")
    }}>Logout</button>
    
    </div>;
};

export default Dashbord;
