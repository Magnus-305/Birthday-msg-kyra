for (let i = 0; i < 100; i++) {
    let confetti = document.createElement('div');
    confetti.classicList.add('confetti');
    confetti.style.left = Math.random () * 100 + 'vw';
    confetti.style.top = Math.random() * -100 + 'vh';
    confetti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(confetti);
}