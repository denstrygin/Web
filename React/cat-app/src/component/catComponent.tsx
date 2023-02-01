import React, {useState} from 'react';
import { ICatComponent } from '../interface/interface';
import { edit, addEdit } from '../helper/stringFunction';

function App({ catFood }: ICatComponent) {
  const [selectState, setSelectState] = useState(false)
  const [hoverState, setHoverState] = useState(false)
  
  function trueHoverState(): void {
    if (selectState) {
      setHoverState(() => true)
    }
  }

  function falseHoverState(): void {
    if (selectState) {
      setHoverState(() => false)
    }
  }
  
  function changeState(): void {
    if (!catFood.disabled) {
      setSelectState(prev => !prev)
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

  if (catFood.disabled) {
    borderClasses.push('disabled')
    presentationClasses.push('disabled')
  } else {
    borderClasses.push('pointer')
    presentationClasses.push('pointer')
  }

  return (
    <div className="catComponent">
      <div className={borderClasses.join(' ')} onClick={ changeState } onMouseEnter={ trueHoverState } onMouseLeave={ falseHoverState }></div>
      <div className={presentationClasses.join(' ')} onClick={ changeState } onMouseEnter={ trueHoverState } onMouseLeave={ falseHoverState }>
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
      { !selectState && !catFood.disabled &&
        <div className="footer normFooter"> 
          { catFood.footer }
          <span className='buy' onClick={ changeState }> { catFood.a } </span>
        </div>
      }

      { !selectState && catFood.disabled &&
        <div className="footer disabledFooter"> 
          { addEdit(catFood.contain) }
        </div>
      }

      { selectState &&
        <div className="footer normFooter">
          { catFood.altfooter }
        </div>
      }
    </div>
  );
}

export default App;