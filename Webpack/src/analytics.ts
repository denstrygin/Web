function createAnalitics() {
    let counter: number = 0
    let destroyed: boolean = false

    const listener = () => counter++

    document.addEventListener('click', listener)

    return {
        destroy(): void {
            document.removeEventListener('click', listener)
            destroyed = true
        },

        getClicks(): number | string {
            if (destroyed) {
                return `Analytics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}
(<any>window).analytics = createAnalitics()