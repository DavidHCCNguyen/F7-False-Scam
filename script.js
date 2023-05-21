const progressElement = document.querySelector('.progress');
const messageElement = document.getElementById('message');

function simulateProgress() {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressElement.style.width = `${progress}%`;

    if (progress === 100) {
      clearInterval(interval);
      showScamPopUps();
    } else if (progress % 10 === 0) {
      showPopUpMessage();
    }
  }, 1000);
}

function showPopUpMessage() {
  const randomMessage = getRandomMessage();
  messageElement.innerText = randomMessage;
}

function getRandomMessage() {
  const messages = [
    'Warning! Your computer is infected!',
    'Congratulations! You have won a prize!',
    'Your device is at risk. Download our software now!',
    'Act now and get a special discount!',
    'Your account has been compromised. Please provide your information.',
    'Download our lastest program!'
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function showScamPopUps() {
  const numberOfPopUps = 6;
  for (let i = 0; i < numberOfPopUps; i++) {
    setTimeout(() => {
      const popUp = window.open('', '', 'width=300,height=200');
      popUp.document.write('<h1>Scam Pop-up</h1><p>This is a simulated scam pop-up. Do not provide any personal or financial information.</p>');
    }, i * 2000);
  }
}

simulateProgress();
