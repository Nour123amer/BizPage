// import React, { useState } from 'react'
// import * as Yup from 'yup'
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import toast from 'react-hot-toast';

// export default function Register() {

//   const [errorMsg ,setErrorMsg ] = useState('');
//   const navigate = useNavigate();

//   let validationSchema = Yup.object({
//    name: Yup.string().required("name is required ").min(3,'name must be at least 3').max(8,'name must be at most 8'),
//    email:Yup.string().required('email is required').email('email is not valid'),
//    phone:Yup.string().required('phone is required').matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,'phone number is not valid'),
//    password:Yup.string().required('password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'password is not valid'),
//    repassword:Yup.string().required('repassword is required').oneOf([Yup.ref("password")],'password and repassword should be the same'),
//   });
//   toast.success("user signed up successfully...");
   

// const formik = useFormik({
//   initialValues:{
//     name:'',
//     email:'',
//     phone:'',
//     password:'',
//     repassword:'',
//   },
//   validationSchema
// })


//   return (
//     <>
//     <div className="container pt-10">
//         <form  className=' md:w-3/4 lg:w-1/2 mx-auto flex flex-col items-center justify-center mt-20' onSubmit={formik.handleSubmit}>
//             <input
            
//             className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
//              type="text"
//                placeholder='Enter your name'
//                value={formik.values.name}
//                name= 'name'
//                onChange={formik.handleChange}
//                onBlur={formik.handleBlur}
//                />
//                {formik.errors.name && formik.touched.name ? (
//                 <div className='text-red-600 mt-2'> *{formik.errors.name}</div>
//                ):

//                ('')}

//             <input
//             className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
//              type="email"
//              value={formik.values.email}
//              name='email'
//              onChange={formik.handleChange}
//              onBlur={formik.handleBlur}
//              placeholder='Enter your email' />
//             {formik.errors.email && formik.touched.email ? (
//                 <div className='text-red-600 mt-2'> *{formik.errors.email}</div>
//                ):

//                ('')}

//             <input
//             className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full '
//              type="tel"
//              value={formik.values.phone}
//              name='phone'
//              onChange={formik.handleChange}
//              onBlur={formik.handleBlur}
//              placeholder='Enter your phone' />
//             {formik.errors.phone && formik.touched.phone ? (
//                 <div className='text-red-600 mt-2'> *{formik.errors.phone}</div>
//                ):

//                ('')}

//             <input
            
//             className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
//              type="password"
//              value={formik.values.password}
//              name='password'
//              onChange={formik.handleChange}
//              onBlur={formik.handleBlur}
//              placeholder='Enter your password' />
//              {formik.errors.password && formik.touched.password ? (
//                 <div className='text-red-600 mt-2'> *{formik.errors.password}</div>
//                ):

//                ('')}


//             <input
//             className='border-2 border-gray-500 rounded-md py-1 px-2 mb-2 w-full  '
//             value={formik.values.repassword}
//             name='repassword'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             type="password" placeholder='Enter your repassword' />
//             {formik.errors.repassword && formik.touched.repassword ? (
//                 <div className='text-red-600 mt-2'> *{formik.errors.repassword}</div>
//                ):

//                ('')}
//             <button onClick={()=>{navigate('/login')}} className='bg-green-600 text-white rounded-lg px-2 py-1 font-semibold w-1/4 '>Signup</button>
//         </form>
//     </div>
//     </>
//   )
// }


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap'; 
import { useAuth } from '../../context/Authcontext';


export default function Register() {
  const navigate = useNavigate();
  const {signup} = useAuth();
  const [error ,setError] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const handleSubmit =async(e) => {
      e.preventDefault();
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('password and repassword not the same!')
    }
   
     try{
        setError('');
        await signup(emailRef.current.value,passwordRef.current.value);
     }catch{
        setError('failed to create an account');
     }
  }
  return (
    <>

    <h2 className='text-blue-950 pt-8'>Sign up</h2>
    {error && <Alert variant ='danger'>{error}</Alert>}
    <Form onSubmit={handleSubmit} className='mt-18 pt-14 w-75 mx-auto'> 
     <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
        <Form.Label column sm="2" className='text-blue-900 font-semibold italic'>
          Username :
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="enter your name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='text-blue-900 font-semibold italic'>
          Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email"placeholder="email@example.com" ref={emailRef} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className='text-blue-900 font-semibold italic'>
          Password :
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className='text-blue-900 font-semibold italic'>
         Confirm Password :
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="rePassword" ref={passwordConfirmRef} />
        </Col>
      </Form.Group>
      <button onClick={navigate('/dashboard')} className=' hover:text-blue-950 bg-blue-950 px-4 py-2 text-white font-bold rounded-full  border-2 border-blue-950  hover:bg-transparent hover:border-blue-950 hover:shadow-lg transition-colors duration-300'>Sign up</button>
    </Form>
    <div className='text-center text-blue-950 italic font-semibold mt-6'>Aleardy have an account ? <Link to='/login' className=''>Login</Link></div>
    
    </>
  )
}
