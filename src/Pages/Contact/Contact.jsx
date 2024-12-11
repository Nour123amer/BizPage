import React from 'react'
// import { Link, Outlet } from 'react-router-dom';


export default function Contact() {
  return (
   <>
       <div className="w-full h-screen py-4 bg-gray-100">
        <h2 className='text-center font-bold text-2xl mb-4'>contact us</h2>
        <p className='text-center mb-2'>Loremcia libeius aperiam? Reiciendis minus laborum quasi! Obcaecati porro ratione quisquam deleniti.</p>
        <div className="contact-info sm:w-100 md:w-3/4 px-2 mx-auto d-flex justify-between text-center mb-4 ">

            <div>
                <i className=" text-green-500 fa-solid fa-phone-flip"></i>
                <h3>address</h3>
                <p>t 122 nasr city cairo egypt</p>
            </div>

            <div>
                <i className="  text-green-500 fa-solid fa-phone-flip"></i>
                <h3>phone number</h3>
                <p>01112293983</p>
            </div>

            <div>
                <i className="  text-green-500 fa-solid fa-phone-flip"></i>
                <h3>email</h3>
                <p>nouramer295@gmail.com</p>
            </div>

        </div>


        <form className='flex sm:w-100 md:w-3/4 px-2  mx-auto justify-center items-center flex-col '  >
           <div className="name  w-100 gap-4 flex mb-2">
           <div className='w-50'>
                <input type="text" placeholder='first name'
                name='firstname'
                 className='px-2 py-1 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>
            <div className='w-50'>
                
                <input type="text" placeholder='last name'
                name='lastName'
                 className='px-2 py-1 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full '/>
            </div>
           </div>

            <div className='w-full'>
                <input type="email" placeholder='email'
                name='email'
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>

            <div className='w-full'>
                <input type="tel" placeholder='phone'
                name='phone'
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>

            <div className='w-full'>
                <input type="password" placeholder='password'
                name='password'
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>


            <div className='w-full'>
                <input type="password" placeholder='repassword'
                name='rePassword'
                 className=' px-2 py-1 mb-2 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full'/>
            </div>

             <textarea className='mb-2 px-2 py-1 border-2 border-gray-500 opacity-50 outline-none rounded-md w-full' rows={7} name="message" id=""> 

            </textarea>
            <button type='submit' className="btn btn-success w-1/6 text-white">Send message</button>
          
        </form>
    </div>

    <div className="info bg-black text-secondary-content py-4">
        <div className="d-flex sm:w-100 sm:flex-col sm:gap-4 md:w-3/4 md:gap-0 mx-auto md:flex-row md:flex-wrap  sm:px-4 sm:py-2 ">
            <div className=' sm:w-100 md:w-1/2 lg:w-1/4 '>
                <h2 className='mb-4 text-white text-xl font-bold'>PizPage</h2>
                <p>Lorem ipsum dolor sit amet conconsectetur adipisicing elit. Placeat qui iste, blanditiis doloribus tempore ut sed ea. 
                    Voluptatibus alias rem magnam unde. Natus. ectetur adipisicing elit. 
                    Dolores voluptate velit, voluptas aut hic ipsa doloribus delectus fugit laborum veniam fugiat non ratione.</p>
            </div>

            <div className='sm:w-100 md:w-1/2 px-4 lg:w-1/4'>
                <h2 className='mb-4 text-white text-xl font-bold'>useful link</h2>
                <ul >
                    <li className='position-relative mb-2 contact d-flex items-center gap-1 cursor-pointer'>
                    <i className="fa-solid fa-chevron-right"></i>
                    <a>home</a>
                    </li>
                    <li className='position-relative mb-2 contact d-flex items-center gap-1 cursor-pointer'>
                    <i className="fa-solid fa-chevron-right"></i>
                    <a>about us</a>
                    </li>
                    <li className='position-relative mb-2 contact d-flex items-center gap-1 cursor-pointer'>
                    <i className="fa-solid fa-chevron-right"></i>
                    <a>services</a>
                    </li>
                    <li className='position-relative mb-2 contact d-flex items-center gap-1 cursor-pointer'>
                         <i className="fa-solid fa-chevron-right"></i>
                       <p>term of services</p>
                    </li>
                    <li className='position-relative mb-2 contact d-flex items-center gap-1 cursor-pointer'>
                    <i className="fa-solid fa-chevron-right"></i>
                      <p> privacy policy</p>
                    </li>
                </ul>
            </div>

            <div className='sm:w-100 md:w-1/2 lg:w-1/4 px-4'>
                <h2 className='mb-4 text-white text-xl font-bold'>contact us</h2>
                <ul>
                    
                    <li className='mb-2'>address street</li>
                    <li className='mb-2'>egypt assuit</li>
                    <li className='mb-2'>phone: 01112293983</li>
                    <li className='mb-4'>Email: 01112293983</li>
                </ul>
                <div className="icons d-flex sm:w-1/2 lg:justify-between px-2  sm:gap-2">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google-plus-g"></i>
                <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>

            <div className='sm:w-100 md:w-1/2 lg:w-1/4'>
            <h2 className='mb-4 text-white text-xl font-bold'>contact us</h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto vitae dolores ipsum sunt 
            aut repudiandae obcaecati ipsam,
             reiciendis perspiciatis quam vero aliquam id dolorum possimus fugit quibusdam corrupti similique.
            </p>

            <div className='position-relative my-2 '>
            <input type="text" className='p-1 sm:w-1/2 md:w-100' />
            <span className='bg-green-400 sm:right-1/2 text-white p-1 position-absolute right-0 top-0'>Subscribe</span>
            </div>
            </div>

        </div>
    </div>
    {/* <Outlet /> */}
   </>
  )
}
