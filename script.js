const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    // Add more questions here
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
    }
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}

document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('next').addEventListener('click', nextQuestion);

// Initial display
displayQuestion();
