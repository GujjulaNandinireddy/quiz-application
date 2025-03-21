// Default quiz questions
let questions = [
    { 
        question: "What is the capital of France?", 
        options: ["Berlin", "Madrid", "Paris", "Rome"], 
        correct: 2  // Zero-based index (Paris is at index 2)
    },
    { 
        question: "Which is the largest planet?", 
        options: ["Earth", "Mars", "Jupiter", "Venus"], 
        correct: 2  // Zero-based index (Jupiter is at index 2)
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Display the first question
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const q = questions[currentQuestionIndex];
        document.getElementById("question-text").innerText = q.question;

        let optionsHTML = "";
        q.options.forEach((option, index) => {
            optionsHTML += <button onclick="checkAnswer(${index})">${option}</button>; // Passing zero-based index
        });

        document.getElementById("options-container").innerHTML = optionsHTML;
    } else {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("score-container").style.display = "block";
        document.getElementById("final-score").innerText =' ${score} / ${questions.length}';
    }
}

// Check the answer
function checkAnswer(selected) {
    if (selected === questions[currentQuestionIndex].correct) { 
        alert("✅ Correct!");
        score++;
    } else {
        alert("❌ Wrong!");
    }
    currentQuestionIndex++;
    loadQuestion();
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("score-container").style.display = "none";
    loadQuestion();
}

// Add a new question dynamically
function addQuestion() {
    const question = document.getElementById("new-question").value.trim();
    const opt1 = document.getElementById("option1").value.trim();
    const opt2 = document.getElementById("option2").value.trim();
    const opt3 = document.getElementById("option3").value.trim();
    const opt4 = document.getElementById("option4").value.trim();
    const correct = Number(document.getElementById("correct-option").value) - 1; // Convert to zero-based index

    if (question && opt1 && opt2 && opt3 && opt4 && correct >= 0 && correct <= 3) {
        questions.push({
            question,
            options: [opt1, opt2, opt3, opt4],
            correct
        });

        alert("✅ Question Added Successfully!");
        document.getElementById("new-question").value = "";
        document.getElementById("option1").value = "";
        document.getElementById("option2").value = "";
        document.getElementById("option3").value = "";
        document.getElementById("option4").value = "";
        document.getElementById("correct-option").value = "";
    } else {
        alert("❌ Please fill all fields correctly!");
    }
}

// Load first question on page load
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("quiz-container")) {
        loadQuestion();
    }
});