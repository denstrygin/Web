export interface ICatFood {
    title: string
    alttitle: string
    name: string
    contain: string
    count: number
    gift: number
    weight: string
    footer: string
    altfooter: string
    a: string
    disabled: boolean
}

export interface ICatComponent {
    catFood: ICatFood
}