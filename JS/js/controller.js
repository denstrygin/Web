const abortBtn = document.querySelector('.abortBtn')
const controller = new AbortController() 

let longProcess = new Promise((resolve, reject) => {
    // ...... (код процесса)
    controller.signal.addEventListener('abort', reject)
})

abortBtn.addEventListener('click', () => {
    controller.abort()
})

let result = await Promise.all([longProcess])