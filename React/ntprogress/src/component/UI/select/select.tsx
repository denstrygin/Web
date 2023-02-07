import classes from './select.module.css';
import { IOptions } from '../../../type/interface';

function Select({ options }: IOptions) {
    return (
        <select className={ classes.select }>
            { options.map((option, index) => 
                <option key={index}>{ option }</option>
            ) }
        </select>
    )
}

export default Select;