import React from "react";
import productImage from "./Assets/images/mac.jpg";
import "./Card.css";
export const Card =()=>{
    return<>
    <div className="root">
        <div className="image_div">
            <img className="image" src={productImage} alt=""/>
        </div> 
            <div className="content_div">
                <div className="name">MacBook</div>
            <p className="Mac_des">You can see the macbook air 2020 vertion. Whitch is very powerfull laptop. It has Apple M1 selicon chip set.  </p>
        </div>
        </div>
    </>

}


