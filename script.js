const questionDisplay = document.querySelector('question')
const possibleOutcomes = document.querySelector('button')
let userPick

possibleOutcomes.forEach(possibleOutcomes => possibleOutcomes.addEventListener('click', (e) => {
    userPick = e.target.id
    questionDisplay.innerHTML = userPick
    console.log(possibleOutcomes)
}))

answerArray = ["It is certain.", "It is decidedly so.", "Yes definitely.", "Most likely.", "Good chance.", "Outlooks looks good", 
"Ask again later.", "Better not tell you now.", "Cannot predict now.", "Don't count on it.", "My sources say no.", "Very doubtful."]

answerArray[0]

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

//