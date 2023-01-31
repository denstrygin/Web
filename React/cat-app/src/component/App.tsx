import React, {useState} from 'react';
import { ICatFood } from '../interface';

interface IProduct {
  catFood: ICatFood
}

function edit(num: number, flag: number): string {
  let str: string = "";
  if (flag === 0) {
    if (num <= 1) {
      str = `${num} порция`
    }
    if (num > 1 && num <= 4) {
      str = `${num} порции`
    }
    if (num > 4) {
      str = `${num} порций`
    }
  } else {
    if (num <= 1) {
      str = 'мышь в подарок'
    }
    if (num > 1 && num <= 4) {
      str = `${num} мыши в подарок`
    }
    if (num > 4) {
      str = `${num} мышей в подарок`
    }
  }
  return str;
}

function addEdit(contain: string): string {
  return `Печалька, с ${contain} закончился` 
}

function App({ catFood }: IProduct) {
  const [selectState, setSelectState] = useState(true)
  const [useabilityState, _] = useState(true)
  
  const circleClassName: string = selectState ? 'normStateCircle' : 'selectStateCircle'
  const borderClassName: string = selectState ? 'normStateBorder' : 'selectStateBorder'
  const presentationClassName: string = selectState ? 'normStatePresentation' : 'selectStatePresentation'
  
  const circleClasses: string[] = ['circle', circleClassName]
  const borderClasses: string[] = ['topLeftBorder', borderClassName]
  const presentationClass: string[] = ['presentation', presentationClassName]

  return (
    <div className="catComponent">
      <div className={borderClasses.join(' ')}></div>
      <div className={presentationClass.join(' ')} onClick={() => {
        setSelectState(prev => !prev)
      }}>
        <div className="container">
          <div className="title"> { catFood.title } </div>
          <div className="name"> { catFood.name } </div>
          <div className="contain"> { catFood.contain } </div>
          <div className="count"> { edit(catFood.count, 0) } </div>
          <div className="gift"> { edit(catFood.gift, 1) } </div>
        </div>
        <div className={circleClasses.join(' ')}>
          <div className="weight"> { catFood.weight } </div>
          <div className="number">кг</div>
        </div>
      </div>
      {selectState && 
        <div className="footer"> 
          {catFood.footer}
          <span className='buy' onClick={() => {
            setSelectState(prev => !prev)
          }}> { catFood.a } </span>
        </div>
      }
      {!selectState &&
        <div className="footer">
          {catFood.altfooter}
        </div>
      }
    </div>
  );
}

export default App;