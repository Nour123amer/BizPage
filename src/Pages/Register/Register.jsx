import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup'

export default function Register() {
 async function handleSubmit(values){
        console.log(values);
        let {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
        console.log(data);
        console.log(data.message);
        if(data.message =='success'){
            
        }
    }

    const x = Yup.object({
        name: Yup.string().required("name is required").min(3,"name must be at least 3 characters").max(8,"name must be at most 8 characters"),
        email:Yup.string().required("email is required").email("email is not valid"),
        phone:Yup.string().required("phone is required").matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,"phone is not valid"),
        password:Yup.string().required("password is required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"password is not valid"),
        repassword:Yup.string().required("repassword is required").oneOf([Yup.ref("password")],"password and repassword must be the same"),
    })


   let formik = useFormik({
    initialValues:{
 name:"",
        email:"",
        phone:"",
        password:"",
        rePassword:"",
    },
    validationSchema:x,
    onSubmit:handleSubmit,
   })


   
  return (
    <>
    <div className="container w-75">
        <form className='flex justify-center items-center flex-col' onSubmit={formik.handleSubmit } >
           <div className="name  w-100 gap-4 flex mb-2">
           <div className='w-50'>
                <input type="text" placeholder='first name'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className='px-2 py-1 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>
            {/* <div className='w-50'>
                
                <input type="text" placeholder='last name'
                name='lastName'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className='px-2 py-1 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full '/>
            </div> */}
           </div>

            <div className='w-full'>
                <input type="email" placeholder='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>

            <div className='w-full'>
                <input type="tel" placeholder='phone'
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>

            <div className='w-full'>
                <input type="password" placeholder='password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>


            <div className='w-full'>
                <input type="password" placeholder='repassword'
                name='rePassword'
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>

             {/* <textarea className='mb-2 px-2 py-1 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full' name="message" id=""> 

            </textarea> */}
            <button type='submit' className="btn btn-success w-1/6 text-white">Send message</button>
          
        </form>
    </div>
    </>
  )
}
