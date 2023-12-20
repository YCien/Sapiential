document.addEventListener('DOMContentLoaded', function () {
    const clickMe = document.getElementById('click-me');
    const result = document.getElementById('result');

    clickMe.addEventListener('click', function () {
        result.textContent = 'You clicked me!';
    });
});
