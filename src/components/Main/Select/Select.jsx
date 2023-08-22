import React, {useEffect} from 'react';
import classes from './Select.module.css';  
import Card from '../Card/Card';
import {useState} from 'react';


const Select = () => {
    const [open, setOpen] = useState(false);
    const [langs,setLangs] = useState({});


    const flagCodesUrl = 'https://flagcdn.com/en/codes.json';
    useEffect(() => {
        fetch(flagCodesUrl)
          .then(response => response.json())
          .then(json => setLangs(json))
          
      }, [])    
      console.log('Object.Keys(langs)', Object.keys(langs))
    return (
        <div className={classes.main_container}>
            <div className={classes.header_content}>
                <select className={classes.select_container}>
                    <option selected className={classes.select_value}>Choose lang</option>
                    {Object.keys(langs).length > 0 ? Object.keys(langs).map((key, i) => 
                        i <= 5 ? <option className={classes.select_value}>{langs[key] }</option> : null
                    ) : null}
                </select>
                <Card open={open} setOpen={setOpen}/>    
                <div onClick={() => setOpen(true)} className={classes.shopping_cart}>
                    <span className="material-icons">shopping_cart</span>
                    <span className={classes.value_cart}>0</span>
                </div>
            </div> 
        </div>    
    );
}
 
export default Select;