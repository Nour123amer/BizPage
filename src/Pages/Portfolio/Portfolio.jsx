import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './Portfolio.module.css'

export default function Portfolio() {
    return (
        <>
            <div className="container h-screen my-4 pt-12">
                <h1 className='text-center text-xl mb-4'>Services</h1>
                <p className='text-center text-secondary mb-6 w-3/4 mx-auto'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus earum nam recusandae
                    mollitia minima necessitatibus laudantium alias quas beatae ab praesentium, cupiditate
                    officia libero, obcaecati est non cumque! Ex, corporis? Tempore quisquam nam nostrum error
                    veritatis vitae consectetur! Sequi,
                    eius aperiam? Reiciendis minus laborum quasi! Obcaecati porro ratione quisquam deleniti.
                </p>


    <div className="content sm:w-100 md:w-75 lg:w-1/2 mx-auto mt-8">
      <ProgressBar className={`mb-2 ${styles.customProgressBar}`} variant="success" label='HTML' now={40} />
      <ProgressBar className={`mb-2 ${styles.customProgressBar}`}  variant="info" label='CSS' now={20} />
      <ProgressBar className={`mb-2 ${styles.customProgressBar}`}  variant="warning" label='Javascript' now={60} />
      <ProgressBar className={`mb-2 ${styles.customProgressBar}`}  variant="danger" label='React' now={80} />
    </div>


            </div>
        </>
    )
}
