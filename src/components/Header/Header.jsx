import classes from './Header.module.css';


const Header = () => {
    return ( 
            <header className={classes.header}>
                <div className={classes.header_container}>
                    <h3 className={classes.title}>React Shop</h3>
                </div>
            </header>
     );
}
 
export default Header ;
