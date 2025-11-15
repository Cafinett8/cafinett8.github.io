// اطلاعات تماس
const telegramUsername = 'Cafinett8';
const whatsappNumber = '09224044842';

// تنظیم لینک‌ها
document.getElementById('telegram-link').href = `https://t.me/${telegramUsername}`;
document.getElementById('whatsapp-link').href = `https://wa.me/98${whatsappNumber.substring(1)}`;

// باز کردن در تب جدید
document.getElementById('telegram-link').setAttribute('target', '_blank');
document.getElementById('whatsapp-link').setAttribute('target', '_blank');

// تغییر رنگ پس‌زمینه به صورت بهینه
let colorIndex = 0;
const colors = [
    'linear-gradient(45deg, #000428, #004e92)',
    'linear-gradient(45deg, #0f0c29, #302b63)',
    'linear-gradient(45deg, #23074d, #cc5333)',
    'linear-gradient(45deg, #1a2a6c, #b21f1f)'
];

function changeBackgroundColor() {
    const matrixBg = document.querySelector('.matrix-background');
    colorIndex = (colorIndex + 1) % colors.length;
    matrixBg.style.background = colors[colorIndex];
}

// کاهش انیمیشن‌های سنگین
function optimizeAnimations() {
    // غیرفعال کردن برخی انیمیشن‌ها در موبایل
    if (window.innerWidth < 768) {
        document.querySelectorAll('.icon').forEach(icon => {
            icon.style.animation = 'none';
        });
    }
}

// تغییر رنگ هر 10 ثانیه (کندتر)
const colorInterval = setInterval(changeBackgroundColor, 10000);

// بهینه‌سازی هنگام لود
document.addEventListener('DOMContentLoaded', function() {
    changeBackgroundColor();
    optimizeAnimations();
});

// افکت ساده برای دکمه‌ها
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const link = this.href;
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            window.open(link, '_blank');
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        }, 150);
    });
});

// توقف انیمیشن هنگام عدم نمایش صفحه
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        clearInterval(colorInterval);
    } else {
        setInterval(changeBackgroundColor, 10000);
    }
});
