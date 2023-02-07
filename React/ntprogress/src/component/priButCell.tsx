import Price from "./UI/price/price";
import Button from "./UI/button/button";
import '../style/priButCell.css';
import {IPriButCellProp} from "../interface/interface";

function PriButCell({ priButCellProp }: IPriButCellProp) {
    return (
        <div className="priButCell">
            <Price> { priButCellProp.price } </Price>
            <Button  
                btnClass={ priButCellProp.btn.btnClass } 
                btnOnClick={ priButCellProp.btn.btnOnClick }
            > 
                { priButCellProp.btn.btnName } 
            </Button>
        </div>
    )
}

export default PriButCell;