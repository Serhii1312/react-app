import React , {useEffect, useState} from 'react';
import Card from './Card/Card';
import classes from './Main.module.css';
import Product from './Product/Product';
import Select from './Select/Select';
import {API_KEY} from '../config'

const Main = (props) => {
    
    const[data, setData] = useState([])
  
  useEffect(() => {
    fetch(' https://fortniteapi.io/v2/shop?lang=en', {
      headers:{
        'Authorization':API_KEY
        },
    })
      .then(response => response.json())
      .then(json => setData(json.shop))
      
  }, [])


    return ( 
        <main className={classes.main_container}>
                <Select/>   
                <div className={classes.card_list}>
                    { data.map( product => <Product product={product}/> )}
                </div>
                <Card/>
        </main>
     );
}
 
export default Main;