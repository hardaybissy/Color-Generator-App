const numbersAndLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")

let firstColorBox = document.getElementById("first-color-box")

let firstHexCode = document.getElementById("first-hex-code")

let secondColorBox = document.getElementById("second-color-box")

let secondHexCode = document.getElementById("second-hex-code")

let thirdColorBox = document.getElementById("third-color-box")

let thirdHexCode = document.getElementById("third-hex-code")
function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 16)
    return randomNumber
}

button.addEventListener("click", function(){
    let HexCodeFirstBox = "#"
    for(let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
        let randomHex = numbersAndLetters[generateRandomNumber()]
        HexCodeFirstBox += randomHex
    }

    firstColorBox.style.backgroundColor = HexCodeFirstBox
    firstHexCode.innerText = HexCodeFirstBox

    let hexCodeForSecondBox = "#"
    for(let mySecondLoop = 0; mySecondLoop<6; mySecondLoop++){
        let secondRamdomHex = numbersAndLetters[generateRandomNumber()]
        hexCodeForSecondBox += secondRamdomHex
    }

    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.innerText = hexCodeForSecondBox

    let hexCodeForThirdBox = "#"
    for(myThirdLoop = 0; myThirdLoop<6; myThirdLoop++){
        let thirdRandomHex = numbersAndLetters[generateRandomNumber()]
        hexCodeForThirdBox += thirdRandomHex
    }

    thirdColorBox.style.backgroundColor = hexCodeForThirdBox

    thirdHexCode.innerText = hexCodeForThirdBox

})