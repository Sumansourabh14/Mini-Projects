//Options - where the text will go

let aText = document.getElementById('a-text');
let bText = document.getElementById('b-text');
let cText = document.getElementById('c-text');
let dText = document.getElementById('d-text');

// Question
let qText = document.getElementById('q-text');

const submitBtn = document.getElementById('submit-btn');

//Question container
const questionBox = document.querySelector('.question-box');

//Option border
const answerbtns = document.querySelectorAll('.radio-btn');

//Quiz data
let questions = [
    {
        number: 1,
        question: "What is the full form of HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Markup Language",
        c: "Hyper Language",
        d: "Hyper Text Language",
        correct: 'a'
    }, {
        number: 2,
        question: "What is the full form of CSS?",
        a: "Hyper Text Markup Language",
        b: "Cascading Style Sheets",
        c: "JavaScript",
        d: "Awesome Style Sheets",
        correct: 'b'
    }, {
        number: 3,
        question: "When is Chainsaw Man releasing?",
        a: "Feb 2023",
        b: "Jan 2023",
        c: "Oct 2023",
        d: "Oct 2022",
        correct: 'd'
    }
];

let i = 0;
let score = 0;

//Display question no. 1 at the start
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    qText.innerHTML = `${questions[i].number}. ${questions[i].question}`;
    aText.innerHTML = questions[i].a;
    bText.innerHTML = questions[i].b;
    cText.innerHTML = questions[i].c;
    dText.innerHTML = questions[i].d;
}

// Deselect answers at the start of the quiz (for each question)
function deselectAnswers() {
    answerbtns.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerbtns.forEach((ans) => {
        if (ans.checked) {
            answer = ans.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', function questionChange() {

    const answer = getSelected();

    if (answer) {
        if (answer === questions[i].correct) {
            score++;
        }

        i++;

        if (i < questions.length) {
            loadQuiz();
        }
        else {
            questionBox.innerHTML = `You scored ${score} out of ${questions.length}!
            <br>
            <br>
            <button onclick="location.reload()">Try again</button>`;     //Reload the quiz
        }
    }
});
