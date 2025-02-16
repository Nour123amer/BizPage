import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Categories from "./../../Pages/Categories/Categories";


export default function BestSellerCard({ productInfo }) {
  let { id, title, description, price, images } = productInfo;

  console.log(images);

  let image = images[0];
  console.log(image);

  return (
    <>
      <Link
        to={`/products/${id}`}
        className="border-2 border-blue-600 p-2 w-[200px]"
      >
       
            <img src={image} className="w-full" alt="productImage" />
            <h2 className="text-blue-900 font-semibold">{title}</h2>
            <p>price: ${price}</p>
            <p className="line-clamp-2">{description}</p>
            <div className="flex justify-between items-center">
              <button className=" bg-blue-900 rounded-md px-2 py-1 my-2 text-white font-bold">
                Add to cart
              </button>

              <i className="fa-regular fa-heart text-xl text-blue-900"></i>
            </div>
    
      </Link>
    </>
  );
}
