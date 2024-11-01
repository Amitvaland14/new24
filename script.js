const audio = document.getElementById('background-music');
document.addEventListener('DOMContentLoaded', () => {
    audio.play().catch(() => {
        document.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });
});

