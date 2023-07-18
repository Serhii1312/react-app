import classes from './Product.module.css';
import React from 'react';
//import { useState, useEffect } from 'react';
//import axios from 'axios';

    {/*const src = "https://content.guardianapis.com/search?page=2&q=debate&api-key=test";

    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        axios
            .get(src)
            .then(data => {
                setArticles(data.data.response.results);
            })
    }, []);*/}  

    const Product = (props) => {
    
    
    return (  
        <div className={classes.product} >
            <div className={classes.product_banner} >
                <div className={classes.product_img}>
                    <img src='https://progameguides.com/wp-content/uploads/2020/06/fortnite-outfit-jules.jpg?w=875'/>
                </div>
                 <div className={classes.product_info}>
                    <div className={classes.product_description}>
                        <h2 className={classes.product_title}>{props.title}</h2>
                        <p className={classes.product_text}>{props.text}</p>                       
                    </div>
                    <div className={classes.product_value}>
                        <div className={classes.product_price}>
                        {props.price}
                        <span class="material-icons">
                                attach_money
                        </span>
                        </div>
                        <button className={classes.product_button}>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
