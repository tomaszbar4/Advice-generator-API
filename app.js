const adviceText = document.querySelector('.advice-text');
const btn = document.querySelector('.btn');
const adviceId = document.querySelector('#advice-id');

window.addEventListener('DOMContentLoaded', getAdvice);
btn.addEventListener('click', getAdvice);

async function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(res => {
            adviceText.textContent = res.slip.advice;
            adviceId.textContent = '#' + res.slip.id;
        })

}