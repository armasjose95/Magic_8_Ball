// need the array of outcomes. need those to be random when the button is clicked
//change string of outcomes to a #
//need button to have an event where outcome is shown inside of the box


const question = document.querySelector('#question')
const button = document.querySelector('button')
let userPick

button.addEventListener("click", function(e) {
    alert("clicked")
})

// function possibleOutcomes() {
//     document.getElementById("button").addEventListener("click", (e));
//     alert ("Hello World!");


// }

// possibleOutcomes.forEach(possibleOutcomes => possibleOutcomes.addEventListener('click', (e) => {
//     userPick = e.target.id
//     questionDisplay.innerHTML = userPick
//     getResult()
//     console.log(answerArray)
// }))

answerArray = ["It is certain.", "It is decidedly so.", "Yes definitely.", "Most likely.", "Good chance.", "Outlooks looks good", 
"Ask again later.", "Better not tell you now.", "Cannot predict now.", "Don't count on it.", "My sources say no.", "Very doubtful."]

function getResult() {

}

//randomly sort the array of objects
//answerArray.sort(() => 0.5 - Math.random())

function checkAnswer(button) {
    for (let i = 0; i < answerArray.length; i ++) {
        if (answer[i] === answerArray) {
            return answer[i]
        }
    }
    answerArray.sort(() => 0.5 - Math.random())
    console.log(button)
    resultDisplay.innerHTML = button
}


//checkAnswer() // call this function

//console.log(answerArray)


// const answerArray = [ //answers
//     {
//         answer: "It is certain."
//     },
//     {
//         answer: "It is decidedly so."
//     },
//     {
//         answer: "Yes definitely."
//     },
//     {
//         answer: "Most likely."
//     },
//     {
//         answer: "Good chance."
//     },
//     {
//         answer: "Outlooks looks good"
//     },
//     {
//         answer: "Ask again later."
//     },
//     {
//         answer: "Better not tell you now."
//     },
//     {
//         answer: "Cannot predict now."
//     },
//     {
//         answer: "Don't count on it."
//     },
//     {
//         answer: "My sources say no."
//     },
//     {
//         answer: "Very doubtful."
//     }
// ]
