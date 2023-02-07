export interface ITrickerObject {
    select: string[]
    priButCell: IPriButCell[]
}

export interface ITrickerComponent {
    trickerObject: ITrickerObject
}

export interface IOptions {
    options: string[]
}

export interface IPriButCellProp {
    priButCellProp: IPriButCell
}

export interface IPriButCell {
    price: string
    btn: IBtn
}

interface IBtn {
    btnName: string
    btnClass: string
    btnOnClick: object
}