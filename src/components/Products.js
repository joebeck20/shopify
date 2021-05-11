import React from 'react';
import formatCurrency from "../utils";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";

export default function Products(props) {
    
  
  
  return (
        <div>
           <Fade bottom cascade>
            <ul className="products">
                {props.products.map(product => (
                    <li key={product._id}>
                    <div className="product">
                      <a  href={"#" + product._id}     >
                        <img src={product.image} alt={product.title}></img>
                        <p>{product.title}</p>
                      </a>
                      <div className="product-price">
                        <div>{formatCurrency(product.price)}</div>
                        <button
                          onClick={() => props.addToCart(product)}
                          className="button primary"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
               
        </div>
    )
}

