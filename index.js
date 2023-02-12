let flag = 0
let box1El = document.getElementById("box1")
let box2El = document.getElementById("box2")
let box3El = document.getElementById("box3")
let box4El = document.getElementById("box4")
let box5El = document.getElementById("box5")
let box6El = document.getElementById("box6")
let box7El = document.getElementById("box7")
let box8El = document.getElementById("box8")
let box9El = document.getElementById("box9")
let resultText = document.getElementById("resultText")
function func1() {
    if (box1El.innerText === "") {
        if (flag % 2 === 0) {
            box1El.innerText = "X"
        } else {
            box1El.innerText = "O"
        }
        flag += 1
    }
    if(box1El.innerText === "X"){
        box1El.style.backgroundColor = "lightblue"
    }else if(box1El.innerText === "O"){
        box1El.style.backgroundColor = "lightpink"
    }
}
function func2() {
    if (box2El.innerText === "") {
        if (flag % 2 === 0) {
            box2El.innerText = "X"
        } else {
            box2El.innerText = "O"
        }
        flag += 1
    }
    if(box2El.innerText === "X"){
        box2El.style.backgroundColor = "lightblue"
    }else if(box2El.innerText === "O"){
        box2El.style.backgroundColor = "lightpink"
    }
    

}
function func3() {
    if (box3El.innerText === "") {
        box3El.innerText = flag % 2 === 0 ? "X" : "O"
        flag += 1
    }
    if(box3El.innerText === "X"){
        box3El.style.backgroundColor = "lightblue"
    }else if(box3El.innerText === "O"){
        box3El.style.backgroundColor = "lightpink"
    }
}
function func4() {
    if (box4El.innerText === "") {
        box4El.innerText = flag % 2 === 0 ? "X" : "O"
        flag += 1
    }
    if(box4El.innerText === "X"){
        box4El.style.backgroundColor = "lightblue"
    }else if(box4El.innerText === "O"){
        box4El.style.backgroundColor = "lightpink"
    }
}
function func5() {
    if (box5El.innerText === "") {
        box5El.innerText = flag % 2 === 0 ? "X" : "O"
        flag += 1
    }
    if(box5El.innerText === "X"){
        box5El.style.backgroundColor = "lightblue"
    }else if(box5El.innerText === "O"){
        box5El.style.backgroundColor = "lightpink"
    }
}
function func6() {
    if (box6El.innerText === "") {
        box6El.innerText = flag % 2 === 0 ? "X" : "O"
        flag += 1
    }
    if(box6El.innerText === "X"){
        box6El.style.backgroundColor = "lightblue"
    }else if(box6El.innerText === "O"){
        box6El.style.backgroundColor = "lightpink"
    }
}
function func7() {
    if (box7El.innerText === "") {
        box7El.innerText = flag % 2 === 0 ? "X" : "O"
        flag += 1
    }
    if(box7El.innerText === "X"){
        box7El.style.backgroundColor = "lightblue"
    }else if(box7El.innerText === "O"){
        box7El.style.backgroundColor = "lightpink"
    }
}
function func8() {
    if (box8El.innerText === "") {
        box8El.innerText = flag % 2 === 0 ? "X" : "O"
        flag += 1
    }
    if(box8El.innerText === "X"){
        box8El.style.backgroundColor = "lightblue"
    }else if(box8El.innerText === "O"){
        box8El.style.backgroundColor = "lightpink"
    }
}
function func9() {
    if (box9El.innerText === "") {
        box9El.innerText = flag % 2 === 0 ? "X" : "O"
        flag += 1
    }
    if(box9El.innerText === "X"){
        box9El.style.backgroundColor = "lightblue"
    }else if(box9El.innerText === "O"){
        box9El.style.backgroundColor = "lightpink"
    }
}

function CheckFunc() {
    resultText.innerText = ""
    console.log("Check Function called")
    let box1 = document.getElementById("box1").innerText
    let box3 = document.getElementById("box3").innerText
    let box2 = document.getElementById("box2").innerText
    let box4 = document.getElementById("box4").innerText
    let box5 = document.getElementById("box5").innerText
    let box6 = document.getElementById("box6").innerText
    let box7 = document.getElementById("box7").innerText
    let box8 = document.getElementById("box8").innerText
    let box9 = document.getElementById("box9").innerText
    if(box1 === "X" && box2 === "X" && box3 === "X" || box1 === "X" && box4 === "X" && box7 === "X" ||
    box1 === "X" && box5 === "X" && box9 === "X" || box2 === "X" && box5 === "X" && box8 === "X" ||
    box3 === "X" && box6 === "X" && box9 === "X" || box3 === "X" && box5 === "X" && box7 === "X" ||
    box4 === "X" && box5 === "X" && box6 === "X" || box7 === "X" && box8 === "X" && box9 === "X"){
        resultText.innerText = "Player One Won"
    }else if(box1 === "O" && box2 === "O" && box3 === "O" || box1 === "O" && box4 === "O" && box7 === "O" ||
    box1 === "O" && box5 === "O" && box9 === "O" || box2 === "O" && box5 === "O" && box8 === "O" ||
    box3 === "O" && box6 === "O" && box9 === "O" || box3 === "O" && box5 === "O" && box7 === "O" ||
    box4 === "O" && box5 === "O" && box6 === "O" || box7 === "O" && box8 === "O" && box9 === "O"){
        resultText.innerText = "Player Two Won"
    }else if(box1 && box2 && box3 && box4 && box5 && box6 && box7 && box8 && box9){
        resultText.innerText = "Tie"
    }

    
    
}

let resetBtn = document.getElementById("resetBtn")
resetBtn.onclick = function () {
    resultText.innerText = ""

    box1El.innerText = ""
    box1El.style.backgroundColor = ""
    box2El.innerText = ""
    box2El.style.backgroundColor = ""
    box3El.innerText = ""
    box3El.style.backgroundColor = ""
    box4El.innerText = ""
    box4El.style.backgroundColor = ""
    box5El.innerText = ""
    box5El.style.backgroundColor = ""
    box6El.innerText = ""
    box6El.style.backgroundColor = ""
    box7El.innerText = ""
    box7El.style.backgroundColor = ""
    box8El.innerText = ""
    box8El.style.backgroundColor = ""
    box9El.innerText = ""
    box9El.style.backgroundColor = ""
    flag = 0
}