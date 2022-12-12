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

console.log(answerArray)