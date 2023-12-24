document.addEventListener('DOMContentLoaded', function () {
    const clickMe = document.getElementById('click-me');
    const result = document.getElementById('result');
    const backgroundMusic = document.getElementById('background-music');

    clickMe.addEventListener('click', function () {
        result.textContent = 'You clicked me!';
    });

    // Play background music when the page is loaded
    backgroundMusic.play();
});
