import classes from './Select.module.css';  
import Card from '../Card/Card';
import {useState} from 'react';


const Select = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.main_container}>
            <div className={classes.header_content}>
                <select className={classes.select_container}>
                    <option selected className={classes.select_value}>Choose lang</option>
                    <option className={classes.select_value}>Ukraine</option>
                    <option className={classes.select_value}>England</option>
                    <option className={classes.select_value}>Poland</option>
                </select>
                <Card open={open} setOpen={setOpen}/>    
                <div onClick={() => setOpen(true)} className={classes.shopping_cart}>
                    <span class="material-icons">shopping_cart</span>
                    <span className={classes.value_cart}>0</span>
                </div>
            </div> 
        </div>    
    );
}
 
export default Select;