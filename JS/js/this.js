//Bind
const obj = {
    user: 'Denis',
    mul(a, b) {
        return a * b
    },
    print(phrase = ' go next!') {
        console.log(this.user + phrase)
    },
} 

context = obj.print.bind(obj)

setTimeout(context, 500)

//Patical constext
function mul(a, b) {
    return a * b
}

const double = mul.bind(null, 2)

console.log(double(3))