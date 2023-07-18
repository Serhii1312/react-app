import React from 'react';
import Card from './Card/Card';
import classes from './Main.module.css';
import Product from './Product/Product';
import Select from './Select/Select';

const Main = (props) => {
    const {productsData} = props

    return ( 
        <main className={classes.main_container}>
                <Select/>   
                <div className={classes.card_list}>
                    { productsData.map( product => <Product title={product.title} text={product.text} price={product.price}/> )}
                </div>
                <Card/>
        </main>
     );
}
 
export default Main;