const video = document.getElementById('fullscreen-video');
const videoContainer = document.querySelector('.video-container');
const lightOverlay = document.querySelector('.light-overlay');

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // แสดงวิดีโอเมื่อเลื่อนถึงตำแหน่งที่กำหนด
    if (scrollPos > 4500 && !videoContainer.style.display) {
        videoContainer.style.display = "flex";
        video.play();
    }

    // เชื่อมตำแหน่งเลื่อนกับตำแหน่งวิดีโอ
    if (videoContainer.style.display === "flex") {
        const videoDuration = video.duration || 5; // ความยาววิดีโอ (default 10 วินาที)
        const scrollFraction = scrollPos / maxScroll;
        const videoTime = videoDuration * scrollFraction;
        video.currentTime = videoTime;

        // เมื่อเลื่อนกลับจนถึงจุดเริ่มต้น (scrollPos === 0)
        if (scrollPos === 0) {
            video.pause(); // หยุดวิดีโอ
            videoContainer.style.display = "none"; // ซ่อนวิดีโอ

            // แสดงแสงสีขาว
            lightOverlay.style.display = "block";
            lightOverlay.style.opacity = 1;
            lightOverlay.style.width = "300%";
            lightOverlay.style.height = "300%";

            // จางแสงสีขาวหลังเวลาที่กำหนด
            setTimeout(() => {
                lightOverlay.style.opacity = 0;
                lightOverlay.style.width = "0%";
                lightOverlay.style.height = "0%";
            }, 800);
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
window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight;

    const lightOverlay = document.querySelector('.light-overlay');

    // จางแสงสีขาวเมื่อ scroll กลับ
    if (scrollPos < maxScroll - 50) {
        lightOverlay.style.opacity = 0;
        lightOverlay.style.width = "0%";
        lightOverlay.style.height = "0%";
    }

    // จัดการเมฆและดอกไม้
    let cloudMove = Math.min(scrollPos * 0.2, 300);
    document.querySelector('.clouds').style.transform = `translateX(${cloudMove}px)`;

    const flower3 = document.querySelector('.flower3');
    const flower2 = document.querySelector('.flower2');

    if (scrollPos > 250) {
        flower3.style.transform = `translateY(${scrollPos * 0.14}px)`;
        flower3.style.opacity = 1;
    }

    if (scrollPos > 350) {
        flower2.style.transform = `translateY(${scrollPos * 0.16}px)`;
        flower2.style.opacity = 1;
    }

    document.querySelector('.flower1').style.transform = `translateY(${scrollPos * 0.12}px)`;

    const logo = document.querySelector('.logo');
    if (scrollPos > 40) {
        logo.style.opacity = 1;
    }

    // จัดการบ้านและประตู
    const house = document.querySelector('.house');
    const doorclose = document.querySelector('.doorclose');
    const doorText = document.querySelector('.door-text');

    if (scrollPos > 400) {
        house.style.bottom = '-15%';
        house.style.opacity = 1;

        doorclose.style.bottom = '-15%';
        doorclose.style.opacity = 1;

        // แสดงข้อความ
        doorText.style.bottom = '10%';
        doorText.style.opacity = 1;

        // ขยายขนาดเมื่อเลื่อนจนสุด
        if (scrollPos >= maxScroll - 50) {
            house.style.transform = 'translateX(-50%) scale(1.2)';
            doorclose.style.transform = 'translateX(-50%) scale(1.2)';
        } else {
            house.style.transform = 'translateX(-50%) scale(1)';
            doorclose.style.transform = 'translateX(-50%) scale(1)';
        }
    } else {
        house.style.bottom = '-50%';
        house.style.opacity = 0;

        doorclose.style.bottom = '-50%';
        doorclose.style.opacity = 0;

        // ซ่อนข้อความ
        doorText.style.bottom = '-60%';
        doorText.style.opacity = 0;
    }
});

// เพิ่ม Event Listener เฉพาะที่ประตู
document.querySelector('.doorclose').addEventListener('click', function () {
    const lightOverlay = document.querySelector('.light-overlay');
    const videoContainer = document.querySelector('.video-container');

    this.style.backgroundImage = "url('door open.png')";

    setTimeout(() => {
        this.style.backgroundImage = "url('door open light.png')";

        setTimeout(() => {
            lightOverlay.style.opacity = 1;
            lightOverlay.style.width = "300%";
            lightOverlay.style.height = "300%";

            setTimeout(() => {
                lightOverlay.style.display = "none";
                videoContainer.style.display = "flex"; // แสดงวิดีโอ
            }, 800);
        }, 350);
    }, 350);
});


// ป้องกันการคลิกนอกประตูทำให้แสงแสดง
document.body.addEventListener('click', function () {
const lightOverlay = document.querySelector('.light-overlay');

// ซ่อนแสงสีขาวเมื่อคลิกที่อื่น
lightOverlay.style.opacity = 0;
lightOverlay.style.width = "0%";
lightOverlay.style.height = "0%";
});

/***ซับ****/

const subtitle = document.getElementById('subtitle'); // อ้างอิง subtitle

// ข้อความต่างๆ ที่จะแสดงตามตำแหน่งการเลื่อน
const subtitles = [
    { scroll: 800, text: 'ในเมืองเล็กๆ ท่ามกลางภูเขาและแม่น้ำ มีสถานที่เงียบสงบ' },
    { scroll: 1000, text: 'บ้านหลังนี้ถูกโอบล้อมด้วยดอกไม้และธรรมชาติ' },
    { scroll: 1400, text: 'ที่นี่ไม่มีใครคาดหวังความสมบูรณ์แบบ ทุกอย่างเกี่ยวกับการเป็นตัวเองและการแสดงออกผ่านศิลปะ' }
];

// ข้อความซับไตเติลใหม่ที่จะแสดงขณะเล่นวิดีโอ
const videoSubtitles = [
    { time: 0, text: 'เมื่อมาสถานที่นี้ให้ความรู้สึกเหมือนเวลาหยุด ปัญหาหลากหลายอย่างที่คุณได้พบเจอในชีวิตประจำวัน' },
    { time: 2, text: 'ความกดดันจากงาน ความสัมพันธ์ที่ซับซ้อน หรือความเครียดที่สะสม' },
    { time: 4, text: 'เสมือนกับว่าปัญหาเริ่มจางหายไป' }
];

let hasScrolledToVideo = false; // สถานะตรวจสอบว่าเคยเลื่อนถึงวิดีโอหรือยัง

// ฟังก์ชันอัปเดตข้อความ Subtitle
function updateSubtitle(scrollPos) {
    // หากยังไม่เคยเลื่อนถึงวิดีโอ
    if (!hasScrolledToVideo) {
        for (let i = 0; i < subtitles.length; i++) {
            const current = subtitles[i];
            const next = subtitles[i + 1];

            if (scrollPos >= current.scroll && (!next || scrollPos < next.scroll)) {
                if (subtitle.textContent !== current.text) {
                    subtitle.textContent = current.text; // อัปเดตข้อความ
                    subtitle.style.opacity = 1; // แสดงข้อความ
                    subtitle.style.visibility = 'visible';
                    console.log(`แสดงข้อความ: ${current.text}`);
                }
                break;
            }
        }
    }

    // ซ่อนข้อความก่อนถึงจุดเริ่มต้น
    if (scrollPos < 200) {
        subtitle.style.opacity = 0; // ซ่อนข้อความ
        subtitle.style.visibility = 'hidden'; // ซ่อนจากสายตา
    }
}

// ฟังก์ชันอัปเดตข้อความซับไตเติลตามเวลาในวิดีโอ
function updateVideoSubtitle(videoTime) {
    for (let i = 0; i < videoSubtitles.length; i++) {
        const current = videoSubtitles[i];
        const next = videoSubtitles[i + 1];

        if (videoTime >= current.time && (!next || videoTime < next.time)) {
            if (subtitle.textContent !== current.text) {
                subtitle.textContent = current.text; // อัปเดตข้อความ
                subtitle.style.opacity = 1; // แสดงข้อความ
                subtitle.style.visibility = 'visible';
                console.log(`แสดงข้อความวิดีโอ: ${current.text}`);
            }
            break;
        }
    }
}

// Event Listener สำหรับ Scroll
window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY; // ตำแหน่งการเลื่อน
    console.log(`scrollPos: ${scrollPos}`);

    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // แสดงวิดีโอเมื่อเลื่อนถึงตำแหน่งที่กำหนด
    if (scrollPos > 4500 && !videoContainer.style.display) {
        videoContainer.style.display = "flex";
        video.play();
        hasScrolledToVideo = true; // ตั้งค่าว่าเคยเลื่อนถึงวิดีโอ
    }

    // เชื่อมตำแหน่งเลื่อนกับตำแหน่งวิดีโอ
    if (videoContainer.style.display === "flex") {
        const videoDuration = video.duration || 5; // ความยาววิดีโอ
        const scrollFraction = scrollPos / maxScroll;
        const videoTime = videoDuration * scrollFraction;
        video.currentTime = videoTime;
    } else {
        updateSubtitle(scrollPos); // อัปเดตข้อความปกติ
    }

    // ซ่อนข้อความปกติเมื่อเลื่อนย้อนกลับหลังจากถึงวิดีโอ
    if (hasScrolledToVideo && scrollPos < 4500) {
        subtitle.style.opacity = 0; // ซ่อนข้อความ
        subtitle.style.visibility = 'hidden';
    }
});

// เพิ่ม Event Listener สำหรับวิดีโอ
video.addEventListener('timeupdate', function () {
    const videoTime = video.currentTime; // เวลาในวิดีโอ
    updateVideoSubtitle(videoTime); // อัปเดตซับไตเติลตามเวลาในวิดีโอ
});

// ซ่อนซับไตเติลเมื่อวิดีโอหยุด
video.addEventListener('pause', function () {
    subtitle.style.opacity = 0; // ซ่อนข้อความ
    subtitle.style.visibility = 'hidden'; // ซ่อนจากสายตา
});

