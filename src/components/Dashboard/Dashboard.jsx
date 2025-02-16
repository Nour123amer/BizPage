import React, { useState } from 'react'
import { Alert, Card } from 'react-bootstrap'
import { useAuth } from '../../context/Authcontext'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const {currentUser} = useAuth();
    const [error ,setError] = useState();
    const {logOut} = useAuth();
    const navigate = useNavigate();

    const handleLogOut =async () =>{
       try{
         await logOut();
         navigate('/login')
       }catch{
         setError('Failed to log')
       }
    }
  return (
    <>
    
    <Card>
        <Card.Body>
            <h2>Profile</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <strong>Email :</strong> {currentUser && currentUser.email}
            <br />
            <Link to='/updateprofile'>Update Profile</Link>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
      <button 
      onClick={handleLogOut}
      className='hover:text-blue-950 bg-blue-950 px-4 py-2 text-white font-bold rounded-full  border-2 border-blue-950  hover:bg-transparent hover:border-blue-950 hover:shadow-lg transition-colors duration-300'>Log out</button>
    </div>
     
    </>
  )
}
