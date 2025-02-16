import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../../context/Authcontext';

export default function ForgotPassword() {
  
  const {resetPassword} = useAuth();
  const [error ,setError] = useState('');
  const [message , setMessage] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSubmit =async(e) => {
      e.preventDefault();
     try{
        setError('');
        await resetPassword(emailRef.current.value);
        setMessage('check your inbox to get new password')
     }catch{
        setError('failed to reset password');
     }
  }
  return (
    <>
    <h2 className='text-center text-blue-950 font-bold pt-8 italic'>Reset password</h2>
    {error && <Alert variant='danger'>{error}</Alert>}
    {message && <Alert variant='success' >{message}</Alert>}
    <Form className='mt-18 pt-14 w-75 mx-auto' onSubmit={handleSubmit}> 


      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='text-blue-900 font-semibold italic'>
          Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      
    </Form>
    <div className='mt-3 text-center text-blue-950 italic '><Link to='/updateprofile'>reset Password</Link></div>
    <div className='text-center text-blue-950 italic font-semibold mt-6'> <Link to='/login'>Login</Link> </div>
    </>
  )
}
