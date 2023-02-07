import React, {FC} from 'react';
import '../style/ticker.css';
import Input from './UI/input/input';
import Select from './UI/select/select';
import PriButCell from './priButCell';
import { ITrickerObject } from '../type/interface';

const Ticker: FC<ITrickerObject> = ({select, priButCell}) => {
  return (
    <div className="ticker">
      <form className='tickerForm'>
        <Select options={ select }></Select>
        <Input></Input>
        <div className="tickerPriButCell">
          { priButCell.map((cell, index) => 
            <PriButCell key={index} price={ cell.price } btn={ cell.btn }/> 
          ) }
        </div>
      </form>
    </div>
  );
}

export default Ticker;