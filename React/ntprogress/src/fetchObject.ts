import {btnClick} from './helper/buttonFucntion'
import { ITrickerObject } from './type/interface'

export const trickerObject: ITrickerObject = {
    select: ['eur_usd', 'eur_rub', 'usd_rub'],
    priButCell: [
        {
            price: '5.885', 
            btn: {
                btnName: 'SELL',
                btnClass: 'sellBtn',
                btnOnClick: btnClick        
            }
        },
        {
            price: '5.886',
            btn: {
                btnName: 'BUY',
                btnClass: 'buyBtn',
                btnOnClick: btnClick
            }
        },
    ]
}