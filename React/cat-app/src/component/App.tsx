import React, {useState} from 'react';
import { ICatFood } from '../interface';

interface IProduct {
  catFood: ICatFood
}

let flagFirstLeave: boolean = false

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
  const [selectState, setSelectState] = useState(false)
  const [hoverState, setHoverState] = useState(false)
  const [disableState] = useState(catFood.disabled)
  
  function changeHoverState(): void {
    if (selectState && flagFirstLeave) {
      setHoverState(prev => !prev)
    } else if (selectState) {
      flagFirstLeave = !flagFirstLeave
    }
  }
  
  function changeState(): void {
    setSelectState(prev => !prev)
    if (!selectState) {
      flagFirstLeave = false
    } else {
      setHoverState(() => false)
    }
  }

  const circleClassName: string = selectState ? 'selectStateCircle' : 'normStateCircle'
  const borderClassName: string = selectState ? 'selectStateBorder' : 'normStateBorder'
  const presentationClassName: string = selectState ? 'selectStatePresentation' : 'normStatePresentation'
  const titleClassName: string = hoverState ? 'selectTitle' : 'normTitle'
  
  const circleClasses: string[] = ['circle', circleClassName]
  const borderClasses: string[] = ['topLeftBorder', borderClassName]
  const presentationClasses: string[] = ['presentation', presentationClassName]
  const titleClasses: string[] = ['title', titleClassName]

  return (
    <div className="catComponent">
      <div className={borderClasses.join(' ')} onClick={ changeState } onMouseEnter={ changeHoverState } onMouseLeave={ changeHoverState }></div>
      <div className={presentationClasses.join(' ')} onClick={ changeState } onMouseEnter={ changeHoverState } onMouseLeave={ changeHoverState }>
        <div className="container">
          <div className={titleClasses.join(' ')}>
            { hoverState && 'Котэ не одобряет?' }
            { !hoverState && catFood.title }
          </div>
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
      { !selectState && 
        <div className="footer"> 
          {catFood.footer}
          <span className='buy' onClick={ changeState }> { catFood.a } </span>
        </div>
      }
      { selectState &&
        <div className="footer">
          {catFood.altfooter}
        </div>
      }
    </div>
  );
}

export default App;