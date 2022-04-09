let time = 60;
let clockTimer = document.querySelector('.clock-timer');
let index = 0

const questionEl = document.querySelectorAll('.question')
const answerButtons = document.querySelectorAll('.answer');
const answerResult = document.querySelector('.answer-result');

const startButton = document.querySelector('.btn');
startButton.addEventListener("click", function () {
    clockTimer.innerText = `Timer: ${time}`;
    setInterval(function () {
        time = time - 1;
        clockTimer.innerText = `Timer: ${time}`;
    }, 1000)
    const titleEl = document.querySelector('.hero')
    titleEl.style.display = 'none';
    console.log(questionEl);
    questionEl[index].style.display = 'block';
});

answerButtons.forEach(function (answerButton) {
    answerButton.addEventListener("click", function () {
        console.log(answerButton);
    const isCorrect = answerButton.classList.contains('correct');
        console.log(answerResult);
    answerResult.innerText = isCorrect ? "Correct!" : "wrong";
        if (!isCorrect) {
            time = time - 5;
        }
        questionEl[index].style.display = 'none';
        index = index + 1;
        if (index == questionEl.length) {
            const results = document.querySelector('.results');
            results.style.display = 'block';
        } else {
            questionEl[index].style.display = 'block';
        }
    });
});
