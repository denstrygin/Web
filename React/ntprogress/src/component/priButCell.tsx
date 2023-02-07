import Price from "./UI/price/price";
import Button from "./UI/button/button";
import {FC} from "react";
import '../style/priButCell.css';
import {IPriButCell} from "../type/interface";

const PriButCell: FC<IPriButCell> = ({ price, btn }) => {
    return (
        <div className="priButCell">
            <Price> { price } </Price>
            <Button  
                btnClass={ btn.btnClass } 
                btnOnClick={ btn.btnOnClick }
                btnName={ btn.btnName }
            />  
        </div>
    )
}

export default PriButCell;