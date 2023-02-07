import React from "react"

export function btnClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault()
    console.log('click')
}