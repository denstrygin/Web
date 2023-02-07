import classes from './select.module.css';
import { IOptions } from '../../../interface/interface';

function Select({ options }: IOptions) {
    return (
        <select className={ classes.select }>
            { options.map(option => 
                <option> { option } </option>
            ) }
        </select>
    )
}

export default Select;