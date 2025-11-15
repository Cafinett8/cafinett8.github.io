// اطلاعات تماس
const telegramUsername = 'Cafinett8';
const whatsappNumber = '09224044842';

// تنظیم لینک‌ها
document.getElementById('telegram-link').href = `https://t.me/${telegramUsername}`;
document.getElementById('whatsapp-link').href = `https://wa.me/98${whatsappNumber.substring(1)}`;

// باز کردن در تب جدید
document.getElementById('telegram-link').setAttribute('target', '_blank');
document.getElementById('whatsapp-link').setAttribute('target', '_blank');

// تغییر رنگ پس‌زمینه به صورت تصادفی
function changeBackgroundColor() {
    const colors = [
        'linear-gradient(45deg, #000428, #004e92, #000428)',
        'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
        'linear-gradient(45deg, #23074d, #cc5333, #23074d)',
        'linear-gradient(45deg, #1a2a6c, #b21f1f, #fdbb2d)',
        'linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b)',
        'linear-gradient(45deg, #1d2b64, #f8cdda, #1d2b64)'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.matrix-background').style.background = randomColor;
}

// تغییر رنگ هر 10 ثانیه
setInterval(changeBackgroundColor, 10000);

// تغییر رنگ اولیه
changeBackgroundColor();

// افکت کلیک روی دکمه‌ها
document.querySelectorAll('.contact-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// انیمیشن اسکرول نرم
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
