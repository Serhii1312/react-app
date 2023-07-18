import {useState} from 'react';
import classes from './Card.module.css'

const Card = ({open, setOpen}) => {
    
    const [count, setCount] = useState(0);

    let onClickUp = () => {
        setCount(count + 1);
    }

    let onClickDown = () => {
        setCount(count - 1);
    }


    console.log(classes)
    return ( 
    <> 
    {open && (
        <div className={classes.card_open}>
            <div className={classes.order_wrapper}>
                <h2 className={classes.order_title}>Your order</h2>
                <div className={classes.close_wrapper}>
                    <span onClick={() => setOpen(false)} className="material-icons order_close">
                        highlight_off
                    </span>
                </div>    
                <div className={classes.order_content}>
                    <img src='https://www.vhv.rs/dpng/d/7-77892_transparent-fortnite-images-png-png-download.png' className={classes.order_img}/>
                    <span className={classes.content_name}>Firebrand</span>
                    <span className={classes.content_price}>
                        1800
                        <span class="material-icons">attach_money</span>
                    </span>
                    <span className={classes.content_count}>
                        <i  onClick={onClickUp} className={`material-icons ${classes.up}`} >arrow_drop_up</i>  
                        <span className={classes.count_value}>{count}</span>
                        <i onClick={onClickDown} className="material-icons down">arrow_drop_down</i>
                    </span>
                    <span className={classes.content_price}>
                        1800
                        <span class="material-icons">attach_money</span>
                    </span>
                    <button onClick={() => setOpen(false)} className={classes.remove_btn}>
                    <span class="material-icons">delete</span>
                    </button>
                </div>
                <div className={classes.order_info}>
                    <span className={classes.price_title}>Total price:</span>
                    <span className={classes.price}>
                        1800
                        <span class="material-icons">attach_money</span>
                    </span>
                </div>
            </div>
        </div>    
    )}
    </>       
    );
}
 
export default Card ;