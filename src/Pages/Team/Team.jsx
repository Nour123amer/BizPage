import React, { useState } from 'react'
import Masonry from "react-responsive-masonry";
import image from '../../assets/images/facts-img.png'
import Carseoul from '../../components/Carseoul/Carseoul';
import Carseoul2 from '../../components/Carseoul2/Carseoul2';
export default function Team() {
 const [activeCateory, setActiveCateory] = useState('all');
  const items = {
    "all":[
      {image:'https://i.ibb.co/12DP7WN/2.jpg',
        title:'app2 para',
        text:'app1'
      },
      {image:'https://i.ibb.co/bPkPDnW/3.jpg',
        title:'app2 para',
        text:'app2'
      },
      {image:'https://i.ibb.co/Y0SVX9d/1.jpg',
        title:'app2 para',
        text:'app3'
      },
      {image:'https://i.ibb.co/12DP7WN/2.jpg',
        title:'app2 para',
        text:'app4'
      },
      {image:'https://i.ibb.co/bPkPDnW/3.jpg',
        title:'app2 para',
        text:'app5'
      },
      {image:'https://i.ibb.co/C9RXPCN/4.jpg',
        title:'app2 para',
        text:'app6'
      },
      {image:'https://i.ibb.co/3kj61XN/1pexels-photo-1820563.jpg',
        title:'app2 para',
        text:'app7'
      },
    ],
    "app":[
      {image:'https://i.ibb.co/Y0SVX9d/1.jpg',
      title:'app2 para',
      text:'app3'
    },
    {image:'https://i.ibb.co/12DP7WN/2.jpg',
      title:'app2 para',
      text:'app4'
    },
    {image:'https://i.ibb.co/bPkPDnW/3.jpg',
      title:'app2 para',
      text:'app5'
    },
    {image:'https://i.ibb.co/C9RXPCN/4.jpg',
      title:'app2 para',
      text:'app6'
    },
    ],
    "web":[
      {image:'https://i.ibb.co/12DP7WN/2.jpg',
      title:'app2 para',
      text:'app1'
    },
     {image:'https://i.ibb.co/3kj61XN/1pexels-photo-1820563.jpg',
      title:'app2 para',
      text:'app7'
    },
    ],
    "card":[
      {image:'https://i.ibb.co/bPkPDnW/3.jpg',
      title:'app2 para',
      text:'app2'
    },
    ],
    "web":[
      {image:'https://i.ibb.co/3kj61XN/1pexels-photo-1820563.jpg',
        title:'app2 para',
        text:'app7'
      },
      {image:'https://i.ibb.co/C9RXPCN/4.jpg',
        title:'app2 para',
        text:'app6'
      }

    ]
    
  };

  // Breakpoint configuration for responsive layout
  const breakpointColumnsObj = {
    default: 3, // Default columns
    1100: 2, // 2 columns for screens smaller than 1100px
    700: 1,  // 1 column for screens smaller than 700px
  };
  return (
    <>
     <div className="team-2 z-10 position-relative  mb-4 py-4 text-center bg-[url('https://i.ibb.co/3kj61XN/1pexels-photo-1820563.jpg')] ">
                <h1 className='text-center text-xl mb-4 font-bold text-white'>Team</h1>
                <p className='text-center mb-6 w-3/4 mx-auto text-secondary'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus earum nam recusandae
                    mollitia minima necessitatibus laudantium alias quas beatae ab praesentium, cupiditate
                    officia libero, obcaecati est non cumque! Ex, corporis? Tempore quisquam nam nostrum error
                    veritatis vitae consectetur! Sequi,
                    eius aperiam? Reiciendis minus laborum quasi! Obcaecati porro ratione quisquam deleniti.
                </p>

                <div className="clients d-flex justify-between w-3/4 mx-auto mb-4">
                    <div><p className='text-green-600 text-xl font-bold'>2000</p><p>client</p> </div>
                    <div><p className='text-green-600 text-xl font-bold'>200</p> <p>client</p></div>
                    <div><p className='text-green-600 text-xl font-bold'>400</p> <p>client</p></div>
                    <div><p className='text-green-600 text-xl font-bold'>20</p> <p>client</p></div>
                </div>
                <div className='w-3/4 mx-auto'>
                <img src={image} alt="" />
                </div>

                </div>
                <div className='overlay'></div>


         
    <Carseoul />
    <Carseoul2 />



<div className="links d-flex justify-center gap-2 mt-4">
  <a type='button' onClick={() => setActiveCateory('all')} className='btn btn-primary' id='all' href="">all</a>
  <a type='button' onClick={() => setActiveCateory('app')} className='btn btn-info' id='app' href="">app</a>
  <a type='button' onClick={() => setActiveCateory('card')} className='btn btn-warning' id='card' href="">card</a>
  <a type='button' onClick={() => setActiveCateory('web')} className='btn btn-danger' id='web' href="">web</a>
</div>
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid w-75 mx-auto my-8 gap-4"
      columnClassName="my-masonry-grid_column"
    >
     {items[activeCateory].map((item,index)=>(
     <div key={index}  className=" border border-sky-500 rounded-md">
     <img src={item.image} alt={`Masonry item ${index + 1}`} />
     <h3>{item.title}</h3>
     <p>{item.text}</p>
     </div>
    ))}
    </Masonry>
    
   
    </>
  )
}
