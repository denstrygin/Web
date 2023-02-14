Arr1 = [1, 2, 4, 5, 6, 9, 8, 7, 16]
Arr2 = ["a", "b", "d", "c", "call", "back"]
Arr3 = [1, "a", 4, "b", {name: 'Den', age: 20}, 14]

//Foreach
Arr1.forEach(element => {
    if (element > 15) {
        console.log(element)
    }
});

//Map
console.log(
    Arr2.map(element => element + "End")
)

//Filter
const myName = Arr3.find(element => element.name === 'Den')
console.log('Filter', myName.age)

//Reduce
console.log(
    Arr1.reduce((count, element) => {
        return count += element
    }, 10)
)

//Find
console.log(
    [...Arr1, ...Arr3].find(element => element == 4)
)

//FindIndex
console.log(
    Arr3.findIndex(element => element == "Z")
)

//Spread
console.log([...Arr2, ...Arr3])

//Join
console.log(Arr2.join(''))