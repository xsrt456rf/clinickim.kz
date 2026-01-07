// Функция переключения на русский язык
function ru() {
    document.getElementById('ru').classList.remove('hidden');
    document.getElementById('cn').classList.add('hidden');
}

// Функция переключения на китайский язык
function cn() {
    document.getElementById('cn').classList.remove('hidden');
    document.getElementById('ru').classList.add('hidden');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем кнопки переключения языка
    const ruBtn = document.getElementById('ru-btn');
    const cnBtn = document.getElementById('cn-btn');
    
    // Добавляем обработчики событий
    if (ruBtn) {
        ruBtn.addEventListener('click', ru);
    }
    
    if (cnBtn) {
        cnBtn.addEventListener('click', cn);
    }
    
    // Плавная прокрутка для ссылок в навигации
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // По умолчанию показываем русскую версию
    ru();
});