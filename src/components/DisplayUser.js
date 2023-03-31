import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slice/Userslice';

const DisplayUser = () => {

const data =  useSelector((state)=>{
    return state.users
})
console.log(data);

const dispatch = useDispatch();

const deleteUser = (id)=>{
dispatch(removeUser(id))

}
  return (
    <div className='container m-2'>
        {
            data.map((user,id)=>{
                return(
                    <div className='d-flex justify-content-between m-4'>
                 <li key={id}>
                    {user}
                </li>
                <button className='btn btn-danger' style={{width:"5rem"}} onClick={()=>deleteUser(id)}>
                   delete
                </button>
                </div>
                )

            })
        }
    </div>
  )
}

export default DisplayUser;