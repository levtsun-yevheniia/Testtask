let timer = 90;
const timerElement = document.getElementById('timer');

function startTimer() {
  const interval = setInterval(() => {
    timer--;
    timerElement.textContent = `${Math.floor(timer / 60)}:${timer % 60}`;
    if (timer <= 0) {
      clearInterval(interval);
      switchHeadersAndFooters();
      timer = 90;
      startTimer();
    }
  }, 1000);
}

function switchHeadersAndFooters() {
  const header1 = document.getElementById('header1');
  const footer1 = document.getElementById('footer1');
  const header2 = document.getElementById('header2');
  const footer2 = document.getElementById('footer2');

  if (header1.classList.contains('header1--hidden')) {
    header1.classList.remove('header1--hidden');
    footer1.classList.remove('footer1--hidden');
    header2.classList.add('header2--hidden');
    footer2.classList.add('footer2--hidden');
  } else {
    header1.classList.add('header1--hidden');
    footer1.classList.add('footer1--hidden');
    header2.classList.remove('header2--hidden');
    footer2.classList.remove('footer2--hidden');
  }
}

startTimer();

document.getElementById('scroll').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
