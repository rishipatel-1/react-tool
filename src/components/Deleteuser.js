import React from 'react';

import { useDispatch } from 'react-redux';
import { clearAllUser } from '../store/actions';


const Deleteuser = () => {
    const dispatch = useDispatch();
    const deleteUser = () =>{
        dispatch(clearAllUser())

    } 

  return (
    <div>
        <div className='conatiner d-flex justify-content-center'>
           <button className='btn btn-primary' onClick={()=>deleteUser()}> clear users </button>
       </div>
    </div>
  )
}

export default Deleteuser;