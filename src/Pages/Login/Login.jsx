// import React from 'react'
// import * as Yup from 'yup'
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import toast from 'react-hot-toast';

// export default function Login() {
//   let navigate = useNavigate();
//     let validationSchema = Yup.object({
//         email:Yup.string().required('email is required').email('email is not valid'),
//         password:Yup.string().required('password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'password is not valid'),
//        });
     
//      const formik = useFormik({
//        initialValues:{
//          email:'',
//          password:'',
       
//        },
//        validationSchema
//      })

//      toast.success("user logged in successfully...");
//   return (
//     <div>
//        <div className="container pt-10">
//         <form  className='w-1/2 mx-auto flex flex-col items-center justify-center mt-20'>


//         <input
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
            
//         <input
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
//             <button onClick={()=>{navigate('/')}}  className='bg-green-600 text-white rounded-lg px-2 py-1 font-semibold w-1/4 '>Login</button>
//         </form>
//     </div>
//     </div>
//   )
// }



import React, { useRef, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, replace, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Authcontext';
import { Alert } from 'react-bootstrap';

export default function Login() {
  const navigate = useNavigate();
   const {login} = useAuth();
   const location = useLocation();
   const redirectPath = location.state?.path || '/';
   console.log(redirectPath);
   
   const [error ,setError] = useState('');
   const emailRef = useRef();
   const passwordRef = useRef();
   const handleSubmit =async(e) => {
       e.preventDefault();
       navigate(redirectPath)
      try{
         setError('');
         await login(emailRef.current.value,passwordRef.current.value);
      }catch{
         setError('failed to login');
      }
   }
  return (
    <>

    <h2 className='text-blue-950 pt-8'>Login</h2>
       {error && <Alert variant ='danger'>{error}</Alert>}
    <Form className='mt-18 pt-14 w-75 mx-auto' onSubmit={handleSubmit}> 


      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className='text-blue-900 font-semibold italic'>
          Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="email@example.com" ref={emailRef} />
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
      <button type='submit' className=' hover:text-blue-950 bg-blue-950 px-4 py-2 text-white font-bold rounded-full  border-2 border-blue-950  hover:bg-transparent hover:border-blue-950 hover:shadow-lg italic transition-colors duration-300'>Login</button>
    </Form>
    <div className='mt-3 text-center text-blue-950 italic '><Link className='text-decoration-none hover:text-blue-950 bg-blue-950 px-4 py-2 text-white font-bold rounded-full  border-2 border-blue-950  hover:bg-transparent hover:border-blue-950 hover:shadow-lg transition-colors duration-300' to='/forgotpassword'>Forgot Password</Link></div>
    <div className='text-center text-blue-950 italic font-semibold mt-6'>Don't have an account <Link className='text-decoration-none hover:text-blue-950 bg-blue-950 px-4 py-2 text-white font-bold rounded-full  border-2 border-blue-950  hover:bg-transparent hover:border-blue-950 hover:shadow-lg transition-colors duration-300' to='/register'>Sign up</Link> </div>
  
    </>
  )
}
