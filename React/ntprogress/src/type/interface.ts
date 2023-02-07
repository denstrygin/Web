import React from "react"

export interface ITrickerObject {
    select: string[]
    priButCell: IPriButCell[]
}

export interface IOptions {
    options: string[]
}

export interface IPriButCell {
    price: string
    btn: IBtn
}

export interface IBtn {
    btnName: string
    btnClass: string
    btnOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}