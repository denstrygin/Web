import { IBtn } from '../../../type/interface';
import {FC} from 'react';
import './button.css';

const Button: FC<IBtn> = ({btnClass, btnOnClick, btnName}) => {
    return (
        <button className={ btnClass } onClick = { btnOnClick }>{ btnName }</button>
    )
}

export default Button;