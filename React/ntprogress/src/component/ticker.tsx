import React from 'react';
import '../style/ticker.css';
import Input from './UI/input/input';
import Select from './UI/select/select';
import PriButCell from './priButCell';
import { ITrickerComponent } from '../interface/interface';

function Ticker({trickerObject}: ITrickerComponent) {
  return (
    <div className="ticker">
      <form className='tickerForm' action="">
        <Select options={ trickerObject.select }></Select>
        <Input></Input>
        <div className="tickerPriButCell">
          <PriButCell priButCellProp={ trickerObject.priButCell[0] }/>
          <PriButCell priButCellProp={ trickerObject.priButCell[1] }/>
        </div>
      </form>
    </div>
  );
}

export default Ticker;