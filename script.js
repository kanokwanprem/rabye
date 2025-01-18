const video = document.getElementById('fullscreen-video');
const videoContainer = document.querySelector('.video-container');
const lightOverlay = document.querySelector('.light-overlay');

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    if (scrollPos > 4500 && !videoContainer.style.display) {
        videoContainer.style.display = "flex";
        video.play();
    }

    if (videoContainer.style.display === "flex") {
        const videoDuration = video.duration || 10;
        const scrollFraction = scrollPos / maxScroll;
        const videoTime = videoDuration * scrollFraction;
        video.currentTime = videoTime;

        if (scrollPos === 0) {
            video.pause();
            lightOverlay.style.display = "block";
            lightOverlay.style.opacity = 1;
            lightOverlay.style.width = "300%";
            lightOverlay.style.height = "300%";
        }
    }
});

document.querySelector('.doorclose').addEventListener('click', function () {
    this.style.backgroundImage = "url('door open.png')";
    setTimeout(() => {
        this.style.backgroundImage = "url('door open light.png')";
        setTimeout(() => {
            lightOverlay.style.opacity = 1;
            lightOverlay.style.width = "300%";
            lightOverlay.style.height = "300%";
            setTimeout(() => {
                lightOverlay.style.display = "none";
                videoContainer.style.display = "flex";
            }, 800);
        }, 350);
    }, 350);
});

document.body.addEventListener('click', function () {
    lightOverlay.style.opacity = 0;
    lightOverlay.style.width = "0%";
    lightOverlay.style.height = "0%";
});
