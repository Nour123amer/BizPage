import React, { useRef, useState } from 'react'
import { Alert, Form  ,Row ,Col} from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Authcontext';

export default function UpdateProfile() {
  const navigate = useNavigate();
  const {currentUser ,updateUserEmail ,updateUserPassword} = useAuth();
  const {login} = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || '/'
  const [error , setError] = useState ('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit =(e) => {
      e.preventDefault();
      if (passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('passwords do not match');
      }
      const promises = [];
      if(emailRef.current.value !== currentUser.email){
        promises.push(updateUserEmail(emailRef.current.value))
      }

      if(passwordRef.current.value ){
        promises.push(updateUserPassword(passwordRef.current.value));
      }


      Promise.all(promises).then(()=>{
        navigate('/dashboard')
      }).catch(()=>{
        setError('failed to update email ')
      })
      navigate(redirectPath, {replace: true})
     
  }
  return (
    <>
     <h2 className='text-center text-blue-950 font-bold pt-8 italic'>Reset password</h2>
    {error && <Alert variant='danger'>{error}</Alert>}
    {/* {message && <Alert variant='success' >{message}</Alert>} */}
    <Form className='mt-18 pt-14 w-75 mx-auto' onSubmit={handleSubmit}> 


      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='text-blue-900 font-semibold italic'>
          Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" required  ref={emailRef} defaultValue={currentUser && currentUser.email} />
        </Col>
      </Form.Group>
<button onClick={navigate('/dashboard')} className=' hover:text-blue-950 bg-blue-950 px-4 py-2 text-white font-bold rounded-full  border-2 border-blue-950  hover:bg-transparent hover:border-blue-950 hover:shadow-lg transition-colors duration-300'>Update</button>

    </Form>
    <div className='w-100 text-center mt-2'>
      <Link className=' hover:text-blue-950 bg-blue-950 px-4 py-2 text-white font-bold rounded-full  border-2 border-blue-950  hover:bg-transparent hover:border-blue-950 hover:shadow-lg transition-colors duration-300' to='/dashboard'>Cancel</Link>
    </div>
    </>
  )
}
