document.getElementById('themeToggle').addEventListener('click', function () {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
})


// Тексты для английского и русского языков
const translations = {
    en: {
        themeToggle: 'Change theme',
        name: "Belekov Aden",
        educationHeader: "Education",
        collegeName: "Magadan Polytechnic College (MPT)",
        collegeMajor: "Information systems and programming",
        collegeCourses: "Relevant Courses: Web Technology, OOP, Algorithms, Database management, Statistic, Discrete math",
        graduationDate: "Expected graduation date: May 2026",
        courseGpa: "Course: 3<br>GPA: 4.8/5.0",
        scholarship: "Scholarship holder: 3 y.",
        skillsHeader: "Technical Skills",
        programmingLanguages: "Programming Languages: Python, C#, JavaScript",
        frameworks: "Frameworks & Tool‑Kits: Django, DRF, FastAPI, PyPy",
        libraries: "Packages & Libraries & SDK: OpenCV, Pillow, Jupyter, NumPy, Matplotlib, Pandas, Selenium",
        databases: "Data Bases: MySQL, PostgreSQL",
        knowledge: "Knowledge: OOP, SOLID, Data Structures & Algorithms, TCP, HTTP",
        tools: "Tools: Git, GitHub, GitLab, PythonAnywhere, Heroku",
        os: "Operating Systems: Windows 10/11, Linux Ubuntu",
        otherSkills: "Other Skills: Adobe Illustrator/Photoshop, bash, Microsoft Office tools, JetBrains tools, VS Code",
        awardsHeader: "Awards & Courses",
        yandexCertificate: "2024 Certificate Yandex Python Advanced Course - Data Visualization and Analysis",
        professionalsAward: "2024 1st place in the 2nd Regional Stage of the Professional Skill Championship 'Professionals' 2024 in the Magadan region - Web - Technology",
        professionalsAward25: "2025 1st place in the 3nd Regional Stage of the Professional Skill Championship 'Professionals' 2025 in the Magadan region - Web - Technology",
        collegeAppreciation: "2024 Letter of Appreciation for the progress in study Magadan Polytechnic College (MPT)",
        dockerCertificate: "2023 Docker Certificate from Scratch - Karpov.Courses",
        fastapiCertificate: "2023 Certificate of completion with honors 'Quick start in FastAPI Python' - Sergey Vasiliev & Stepik",
        sqlCertificate: "2023 Certificate of Completion of the Course with Honors 'Interactive Simulator on SQL' - Far Eastern Federal University & Stepik",
        pythonBeginners: "2022 Python for Beginners Sololearn, Python",
        graphicDesignCertificate: "2022 Certificate of Graphic Design 'The Academy of Creative Professions'",
        personalHeader: "Personal Qualities & Information",
        personalSkills: "Skills: Leadership, Management, Problem‑Solving, Interpersonal, Documenting",
        languages: "Kyrgyz‑Native, Russian‑Native, English‑Advanced",
        hobbies: "Hobbies: Chess, Drawing",
        lastUpdate: "Last update: March 2025",
        languageToggle: "Переключить на русский"
    },
    ru: {
        themeToggle: 'Переключить тему',
        name: "Белеков Аден",
        educationHeader: "Образование",
        collegeName: "Магаданский политехнический колледж (МПК)",
        collegeMajor: "Информационные системы и программирование",
        collegeCourses: "Основные курсы: Веб-технологии, ООП, Алгоритмы, Управление базами данных, Статистика, Дискретная математика",
        graduationDate: "Ожидаемая дата выпуска: май 2026",
        courseGpa: "Курс: 3<br>Средний балл: 4.8/5.0",
        scholarship: "Стипендиат: 3 года",
        skillsHeader: "Технические навыки",
        programmingLanguages: "Языки программирования: Python, C#, JavaScript",
        frameworks: "Фреймворки и инструменты: Django, DRF, FastAPI, PyPy",
        libraries: "Библиотеки и SDK: OpenCV, Pillow, Jupyter, NumPy, Matplotlib, Pandas, Selenium",
        databases: "Базы данных: MySQL, PostgreSQL",
        knowledge: "Знания: ООП, SOLID, Структуры данных и алгоритмы, TCP, HTTP",
        tools: "Инструменты: Git, GitHub, GitLab, PythonAnywhere, Heroku",
        os: "Операционные системы: Windows 10/11, Linux Ubuntu",
        otherSkills: "Другие навыки: Adobe Illustrator/Photoshop, bash, Microsoft Office, JetBrains tools, VS Code",
        awardsHeader: "Награды и курсы",
        yandexCertificate: "2024 Сертификат Яндекс.Продвинутый курс Python - Визуализация и анализ данных",
        professionalsAward: "2024 1 место на 2-м региональном этапе чемпионата профессионального мастерства 'Профессионалы' 2024 в Магаданской области - Веб-технологии",
        professionalsAward25: "2025 1 место на 3-м региональном этапе чемпионата профессионального мастерства 'Профессионалы' 2025 в Магаданской области - Веб-технологии",
        collegeAppreciation: "2024 Благодарственное письмо за успехи в учебе от Магаданского политехнического колледжа (МПК)",
        dockerCertificate: "2023 Сертификат Docker с нуля - Karpov.Courses",
        fastapiCertificate: "2023 Сертификат с отличием 'Быстрый старт в FastAPI Python' - Сергей Васильев & Stepik",
        sqlCertificate: "2023 Сертификат с отличием 'Интерактивный тренажер по SQL' - Дальневосточный федеральный университет & Stepik",
        pythonBeginners: "2022 Python для начинающих Sololearn, Python",
        graphicDesignCertificate: "2022 Сертификат по графическому дизайну 'Академия творческих профессий'",
        personalHeader: "Личные качества и информация",
        personalSkills: "Навыки: Лидерство, Управление, Решение проблем, Коммуникабельность, Документирование",
        languages: "Языки: Кыргызский - родной, Русский - родной, Английский - продвинутый",
        hobbies: "Хобби: Шахматы, Рисование",
        lastUpdate: "Последнее обновление: Март 2025",
        languageToggle: "Switch to English"
    }
};

// Текущий язык (по умолчанию английский)
let currentLang = 'en';

// Функция для обновления текста на странице
function updateContent() {
    for (const [key, value] of Object.entries(translations[currentLang])) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = value; // Используем innerHTML для поддержки тегов <br>
        }
    }
}

// Переключение языка
document.getElementById('languageToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en'; // Меняем язык
    updateContent(); // Обновляем текст
    document.getElementById('languageToggle').textContent = translations[currentLang].languageToggle; // Обновляем текст кнопки
});

// Инициализация текста при загрузке страницы
updateContent();