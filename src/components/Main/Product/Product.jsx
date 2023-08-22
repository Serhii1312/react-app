import classes from './Product.module.css';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


    const Product = ({product}) => {
        
    const settings = {
        dots: true,
        autoplay: true,
        arrows: true
    }   
    
    return (  
        <div className={classes.product} >
            <div className={classes.product_banner} >
                <div className={classes.product_img}>
                {
				product.displayAssets.length === 1 ?
				<img src={product.displayAssets[0].full_background} alt=""  width='100%' />	:
				<Slider {...settings}>
					{
						product.displayAssets.map(img=>{
							return <img src={img.full_background} key={img.displayAsset} width='100%' />
						})
					}
				</Slider>
				}
                </div>
                
                 <div className={classes.product_info}>
                    <div className={classes.product_description}>
                        <h2 className={classes.product_title}>{product.displayName}</h2>
                        <p className={classes.product_text}>{product.displayDescription}</p>                       
                    </div>
                    <div className={classes.product_value}>
                        <div className={classes.product_price}>
                        {product.price.regularPrice}
                        <span class="material-icons">
                                attach_money
                        </span>
                        </div>
                        <button className={classes.product_button}><i class="material-icons">add_shopping_cart</i>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
