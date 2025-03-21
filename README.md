** QUIZ APPLICATION **

# Description :

This is a fun and interactive quiz game where users can test their knowledge on various topics. Users are presented with a series of questions and multiple-choice answers. After selecting an answer, users are told whether they are correct or not. At the end of the quiz, the total score is displayed, and users can restart the quiz. Additionally, users can add their own custom questions to the quiz.

# Features :

Display multiple-choice questions with four options.
Users can select answers and get immediate feedback (correct/incorrect).
Display the user's score at the end of the quiz.
Option to restart the quiz.
Option for users to add their own questions dynamically.

# How to Use :
Open the index.html file in your browser.
Start the quiz and answer the questions presented.
After completing the quiz, view your score.
You can restart the quiz or add your own custom questions using the provided form.

Files :
-> index.html: The structure and content of the quiz app, including the HTML for the game and the form for adding new questions.
-> style.css: The styles that give the app a modern and user-friendly interface, including the background gradient, button styles, and form inputs.
-> script.js: The JavaScript that powers the quiz logic, including handling question navigation, checking answers, displaying the score, and adding new questions.

# Code Explanation :

--> HTML (index.html)
The HTML file sets up the structure of the quiz. It includes:

A header for the quiz title.
A container for displaying questions and answer options.
A section for showing the score after the quiz is completed.
A form that allows users to add custom questions.

--> CSS (style.css)
The CSS file styles the app with a clean and vibrant design:

A background gradient is used to give the app a warm and inviting look.
The quiz container has a black background with rounded corners and a subtle drop shadow.
Buttons and form inputs are styled to match the quiz's design, with hover effects for buttons.

--> JavaScript (script.js)
The JavaScript file contains the functionality of the quiz:

loadQuestion(): Displays the current question and options.
checkAnswer(): Validates the user's answer and provides feedback.
nextQuestion(): Moves to the next question or displays the score if the quiz is complete.
restartQuiz(): Restarts the quiz, resetting the score and questions.
addQuestion(): Allows users to add custom questions dynamically.


# Technologies Used :
.HTML
.CSS
.JavaScript
