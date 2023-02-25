// Game 

const getRandomNumInRange = (min, max) => {
    const randomValue = (Math.random() * (max - min) + min).toFixed(0)
    return randomValue
}

const gameElements = document.getElementById("my_game").children

const title = gameElements[0]
const userTack = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    tackInProccess: false,
    rightAnswer: null,
}


const getTack = () => {
    // const randomNum1 = getRandomNumInRange(0, 100)
    // const randomNum2 = getRandomNumInRange(0, 100)

    // let symbol
    // if (Math.random() > 0.5){
    //     symbol = '+'
    // } else {
    //     symbol = '-'
    // }
    const symbol = (Math.random() > 0.5) ? "+" : "-" //Унарный оператор

    const tack = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(tack)
    return tack

}

const togleGameState = () => {
    gameState.tackInProccess = !gameState.tackInProccess
}

const startGameFunc = () => {
    if (!gameState.tackInProccess) {
        title.innerText = 'Игра началась'
        userAnswer.value = null
        userTack.innerText = getTack()
        userAnswer.hidden = false
        btnGame.innerHTML = 'Проверить!'
        togleGameState()

    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTack.innerText = userTack.innerText + "=" + gameState.rightAnswer
        title.innerText = (isRight) ? 'Правильно!' : "Неправильно!"
        btnGame.innerHTML = 'Начать заново'
        togleGameState()

    }
}
btnGame.addEventListener("click", startGameFunc)

userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter"){
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    } 
})

// console.dir(document)
const choosed_El = document.querySelectorAll (".choosed_block_container > div")
const counterEl = document.querySelector (".choosed_block span")

// const choosedState = {
//     countElements : 0,
// }
// const changeCoount = (value) => {
//     choosedState.countElements += value
//     counterEl.innerText = choosedState.countElements 
// }
const choosedState = {
        countElements : 0,
        setCoountValue (value) {
                this.countElements += value
                counterEl.innerText = this.countElements 
        }
    }


const evetFunc = (e) => {
    
        if (e.target.className === "") {
            e.target.className = "choosed_element" 
            choosedState.setCoountValue(1)
        } else {
            e.target.className = "" 
            choosedState.setCoountValue(-1)
        }
    }

for (let i = 0; i < choosed_El.length; i++) {
    choosed_El[i].addEventListener("click", evetFunc)
}

// choosed_El[2].removeEventListener("click", evetFunc) //удаление обработчика


const userText = prompt("give me number!")

// пользователь отменил ввод

console.log(userText - "7")














// let a = 7 //  переменная
// const b = 8 // константа

//STRING
// const str1 = 'Greeting'
// const str2 = "Text"
// const str3 = `Reverse ${str1}`

// console.log(str1,typeof str1)
// console.log(str2,typeof str2)
// console.log(str3,typeof str3)

//Number
// + - * / **
// const num1 = 75 + 75
// const num2 = 79 * 9

// const rem = 8 * "a"
// NaN = not a number
// const rem1 = 17 / 0 = infinity

//int = [-(2 ** 53  - 1), (2 ** 53  - 1)]

// BIGINT
// ЧИсло и n - это дает понять что тип БИГИНТ
// const bigint = 103123123123123123131n
// console.log(bigint)

//Boolean
// true / false
// > < >= <= >== <== == ===
// const bool = 'a'> 'AAAA'
// console.log(bool)

//Null
// let empty = null
// console.log(typeof empty)

//Underfined
// let box = undefined
// console.log(box, typeof box)

// //SYMBOL
// const uniq = Symbol('id')
// const uniq2 = Symbol('id')
// console.log(uniq == uniq2)

//Obj
// Объект: ключ - значение
// Хоть объект и конст, его можно менять, но нельзя переопределять
// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true
// }
// // console.log(obj.name)
// // console.log(obj['name'])

// obj.job = "Google"
// console.log(obj)

// const array = ('Аня', 18, false)
// array[3] = 'facabook'
// console.log(array)


// const variant = 'option1'
// const variant2 = 'option2'

// console.log(null > 0)
// console.log(typeof Number('15'))

// console.log(typeof +('15'))
// console.log(+("abc"))
// console.log(typeof String(15))
// console.log(typeof(15 + " "))


// console.log(Boolean(-15))
// console.log(Boolean(0))
// console.log(Boolean("Str"))
// console.log(Boolean(""))
// console.log(Boolean(" "))
// console.log(!("Str"))
// console.log(!(""))
// console.log(!! "qwe")

// const userName = prompt("Who you are?", "anonim")
// if (userName === "admin" ){
//     alert("hello boss")
// } else if (userName === "anonim" || !userName){
//     alert("I don't know you")
// } else {
//     alert(`hi ${userName}`)
// }
// console.log ("abc" || 0 ) // || или возвращает первое инстинное

// const counts = prompt("до скольких счетчик?", 20)
// let  i = 10
// let  z = 0
// while (i < counts) {
//     console.log (i)
//     i++
//     z++
//     console.log(i, z)

// }


// do {
//     console.log (i)
//     i++
// } while (i < counts)

// const arr = []

// for (let i = 0; i <= 50; ++i){
//      arr.push(i)
// }

// const newArr = []

// for (item of arr) {
//     if (item % 3 === 0 ){
//         newArr.push(item)
//     }
// }
// console.log(newArr)

// const obj ={
//     name: "Sasha",
//     age: 25,
//     city: "Ufa"
// }
// for (key in obj){
//     console.log(key, obj[key])
// }


//Function

// 3 метода создания функций

// // 1Mth.  Declaration
// function scream() {
//     alert("AAAAAAAA")
// }

// // 3Mth Arrow
// const arrow = () => {
//     alert("arrrroooow")
// }

// 2Mth Expression
// const wowScreem = function(a, b) {
//     return a * b
// }

// console.log(wowScreem(5, 8))
