import React from 'react'
// import cardImage from '../../assets/images/1.jpeg'
export default function About() {
  return (
    <>
      <div className="container h-screen my-4">
        <h1 className='text-center text-xl mb-2'>About</h1>
        <p className='text-center sm:w-100 mb-4 xl:w-3/4 mx-auto text-secondary'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus earum nam recusandae
          mollitia minima necessitatibus laudantium alias quas beatae ab praesentium, cupiditate
          officia libero, obcaecati est non cumque! Ex, corporis? Tempore quisquam nam nostrum error
          veritatis vitae consectetur! Sequi,
          eius aperiam? Reiciendis minus laborum quasi! Obcaecati porro ratione quisquam deleniti.
        </p>

        <div className="container mx-auto d-flex flex-wrap sm:flex-col  md:flex-row lg:justify-center lg:gap-4">

          <div className='  shadow-lg rounded-md  sm:w-100 md:w-1/2 justify-between lg:w-1/4 '>
            <img src="https://i.ibb.co/RNk5CZ7/2.jpg" className="w-full rounded-t-md" alt="..." />
            <div className="card-body p-2 text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>


          <div className=' shadow-lg rounded-md   sm:w-100 md:w-1/2 lg:w-1/4'>
            <img src="https://i.ibb.co/RNk5CZ7/2.jpg" className="w-full rounded-t-md" alt="..." />
            <div className="card-body p-2 text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>

          <div className=' shadow-lg rounded-md  sm:w-100 md:w-1/2 lg:w-1/4'>
            <img src="https://i.ibb.co/RNk5CZ7/2.jpg" className="w-full rounded-t-md" alt="..." />
            <div className="card-body p-2 text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
