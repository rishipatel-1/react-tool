import React from 'react'
import { fakeuserData } from '../api/ApiData'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slice/Userslice'
import DisplayUser from './DisplayUser'

const UserDetails = () => {
  
  const dispatch = useDispatch();
  const adduserData = (username)=>{
    console.log(username);
    dispatch(addUser(username))

  }
  return (
    <div className='container mt-5'>
       <div className='col-12 d-flex justify-content-between'>
             <h2 className='m-2'>List of Users Details</h2>
             <button className='m-2 btn btn-success' style={{width:"10rem",height:"2.5rem"}} onClick={()=>adduserData(fakeuserData())}> Add User</button>
       </div>
       <hr/>
       <div className='conatiner'>
            <ul style={{fontSize:"1.5rem", fontWeight:"400",color:"#2a757d"}}>
            <DisplayUser/>
            </ul>
       </div>
    </div>
  )
}

export default UserDetails;