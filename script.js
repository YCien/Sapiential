document.addEventListener('DOMContentLoaded', function () {
    const clickMe = document.getElementById('click-me');
    const result = document.getElementById('result');

    // Initialize Howler.js with background music
    const backgroundMusic = new Howl({
        src: ['background-music.mp3'], // Add other formats like .ogg if needed
        loop: true,
        volume: 0.5,
        preload: true,
        autoplay: false
    });

    clickMe.addEventListener('click', function () {
        result.textContent = 'You clicked me!';
        backgroundMusic.play();
    });
});
