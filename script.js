document.addEventListener('DOMContentLoaded', function () {
    const clickMe = document.getElementById('click-me');
    const result = document.getElementById('result');
    const backgroundMusic = new Howl({
        src: ['background-music.mp3'],
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
