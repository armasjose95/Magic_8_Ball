const questionDisplay = document.querySelector('question')
const possibleOutcomes = document.querySelector('button')
const userPick

possibleOutcomes.forEach(possibleOutcomes => possibleOutcomes.addEventListener('click', (e) => {
    userPick = e.target.id
    questionDisplay.innerHTML = userPick
    
}))

const answerArray = [ //answers
    {
        answer: "It is certain."
    },
    {
        answer: "It is decidedly so."
    },
    {
        answer: "Yes definitely."
    },
    {
        answer: "Most likely."
    },
    {
        answer: "Good chance."
    },
    {
        answer: "Outlooks looks good"
    },
    {
        answer: "Ask again later."
    },
    {
        answer: "Better not tell you now."
    },
    {
        answer: "Cannot predict now."
    },
    {
        answer: "Don't count on it."
    },
    {
        answer: "My sources say no."
    },
    {
        answer: "Very doubtful."
    }
]

//randomly sort the array of objects
answerArray.sort(() => 0.5 - Math.random())

function checkAnswer() {
    for (let i = 0; i < answerArray.length; i ++) {

    }
}


checkAnswer() // call this function

console.log(answerArray)