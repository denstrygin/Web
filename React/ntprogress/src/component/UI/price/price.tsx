import classes from './price.module.css';

function Price({children}: any) {
    return (
        <div className={ classes.price }> { children } </div>
    )
}

export default Price;