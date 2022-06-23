let firstNumber = Number(prompt("First Number"))
let secondNumber = Number(prompt("Second Number"))
let arithmetric = prompt("Choose from + - / * % to do your action")
if (arithmetric === "+") {
    let sum = firstNumber + secondNumber
    alert(sum)
} else if (arithmetric === "-") {
    let difference = firstNumber - secondNumber
    alert(difference)
} else if (arithmetric === "/") {
    let division = firstNumber / secondNumber
    alert(division)
} else if (arithmetric === "*") {
    let multiply = firstNumber * secondNumber
    alert(multiply)
} else if (arithmetric === "%") {
    let modulus = firstNumber % secondNumber
    alert(modulus)
} else {
    alert("wrong input. try again")
}