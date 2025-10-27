// Global data storage
let currentService = null;
let currentGalleryPosition = 0;
let modalImages = [];
let currentModalIndex = 0;

// Gallery config
const galleryConfig = {
    autoplayInterval: 3000,
    visibleImages: 4,
    transitionDuration: 500
};

// Content data (embedded for standalone HTML usage)
const contentData = {
    "site": {
        "title": "Модульные решения",
        "phone": "+7 (XXX) XXX-XX-XX",
        "email": "s.mosgovoy@yandex.ru",
        "copyright": "© 2025 Модульные решения. Все права защищены."
    },
    "hero": {
        "slides": [
            {
                "title": "Модульные решения",
                "subtitle": "Профессиональное производство металлоконструкций и модульных объектов",
                "image": "hero-1"
            },
            {
                "title": "Качество и надёжность",
                "subtitle": "Более 10 лет опыта в строительстве модульных объектов",
                "image": "hero-2"
            }
        ],
        "interval": 5000
    },
    "about": {
        "title": "О компании",
        "content": "Компания «Модульные решения» — это современное производственное предприятие, специализирующееся на изготовлении металлоконструкций и модульных объектов различного назначения. Мы предлагаем широкий спектр решений для бизнеса и частных клиентов: от компактных бытовок до масштабных многосоставных комплексов.\n\nНаша миссия — обеспечить заказчиков качественными, функциональными и экономичными модульными объектами, которые отвечают самым высоким требованиям безопасности и комфорта. Мы используем только сертифицированные материалы и современное оборудование, что позволяет нам гарантировать долговечность и надёжность каждого изделия.\n\nКоманда профессионалов с многолетним опытом готова взять на себя весь цикл работ — от проектирования до монтажа на вашем объекте. Мы ценим доверие клиентов и стремимся к долгосрочному сотрудничеству, основанному на прозрачности, качестве и ответственности."
    },
    "services": [
        {
            "id": "bars",
            "name": "Бары",
            "slug": "bars",
            "image": "bars-main",
            "description": "Мобильные модульные бары — это современное и практичное решение для организации торговой точки или зоны обслуживания в любом месте. Наши конструкции изготавливаются из качественных материалов, обеспечивающих прочность и долговечность даже при интенсивной эксплуатации.",
            "fullDescription": "Мобильные модульные бары от компании «Модульные решения» представляют собой универсальное решение для организации торговых точек, кафе, баров и зон обслуживания на открытых площадках, в торговых центрах, на мероприятиях и фестивалях. Наши модули сочетают в себе функциональность, эстетику и мобильность.\n\nКаждый модульный бар разрабатывается с учётом потребностей заказчика. Мы предлагаем различные варианты планировок, встроенное холодильное оборудование, системы вентиляции, освещение и возможность подключения коммуникаций. Внешняя отделка может быть выполнена в любом стиле — от индустриального металла до современного дерева и стекла.\n\nПреимущества наших модульных баров: быстрая установка и запуск, возможность перемещения, низкие эксплуатационные расходы, полная готовность к работе. Мы берём на себя весь цикл — от проектирования до сдачи объекта «под ключ»."
        },
        {
            "id": "cabins",
            "name": "Бытовки",
            "slug": "cabins",
            "image": "cabins-main",
            "description": "Строительные бытовки — незаменимый элемент инфраструктуры любой строительной площадки. Мы производим бытовки различного назначения: для проживания рабочих, хранения инструмента, организации бытовых помещений и офисов на объекте.",
            "fullDescription": "Бытовки от «Модульные решения» — это надёжные, функциональные и экономичные конструкции, которые обеспечивают комфортные условия для работы и отдыха персонала на строительных площадках, производственных объектах и в полевых условиях. Мы предлагаем широкий ассортимент бытовок различного назначения и уровня комфорта.\n\nНаши бытовки изготавливаются из высококачественного металлического каркаса с утеплением и внутренней отделкой. Мы устанавливаем окна, двери, системы отопления и вентиляции, электропроводку с розетками и освещением. Возможна комплектация мебелью, сантехникой и бытовой техникой по желанию заказчика.\n\nПреимущества: быстрая доставка и монтаж, возможность использования круглый год благодаря качественному утеплению, модульная конструкция позволяет объединять несколько бытовок для создания комплексов, низкая стоимость владения и обслуживания."
        },
        {
            "id": "living",
            "name": "Жилые модули",
            "slug": "living",
            "image": "living-main",
            "description": "Жилые модули — это современное решение для временного или постоянного проживания. Модульные дома сочетают в себе комфорт традиционного жилья и преимущества быстровозводимых конструкций.",
            "fullDescription": "Жилые модули компании «Модульные решения» — это комфортные, энергоэффективные и стильные пространства для жизни. Мы создаём модульные дома, которые подходят для использования в качестве временного жилья на производственных объектах, гостевых домов, загородных резиденций или постоянного жилья.\n\nКаждый жилой модуль проектируется индивидуально с учётом пожеланий заказчика. Мы предлагаем различные планировки: студии, однокомнатные и многокомнатные варианты. Внутренняя отделка выполняется из экологичных материалов высокого качества. Устанавливаются современные окна с энергосберегающими стеклопакетами, системы отопления и кондиционирования, полный комплекс инженерных коммуникаций.\n\nПреимущества: возможность установки практически на любом участке, быстрые сроки изготовления и монтажа (от 2 недель), энергоэффективность и низкие эксплуатационные расходы, возможность расширения путём добавления дополнительных модулей."
        },
        {
            "id": "checkpoint",
            "name": "КПП",
            "slug": "checkpoint",
            "image": "checkpoint-main",
            "description": "Контрольно-пропускные пункты — важный элемент системы безопасности любого объекта. Мы производим КПП различных размеров и уровней оснащения для организации пропускного режима на предприятиях, строительных площадках, парковках.",
            "fullDescription": "КПП (контрольно-пропускные пункты) от компании «Модульные решения» — это надёжные конструкции, обеспечивающие контроль доступа и безопасность на охраняемых территориях. Мы изготавливаем модульные КПП для предприятий, складских комплексов, жилых комплексов, парковок и других объектов, требующих организации пропускного режима.\n\nНаши КПП оборудованы всем необходимым для комфортной работы охранников: отоплением, кондиционированием, остеклением с хорошим обзором, рабочим местом с освещением и розетками. Возможна установка систем видеонаблюдения, домофонов, турникетов и шлагбаумов. Конструкция КПП может быть усилена дополнительной защитой в зависимости от требований безопасности объекта.\n\nПреимущества: быстрая установка в любом месте, мобильность (при необходимости КПП можно переместить), круглогодичная эксплуатация благодаря утеплению и климат-контролю, различные варианты остекления для обеспечения необходимого обзора."
        },
        {
            "id": "warehouse",
            "name": "Склады",
            "slug": "warehouse",
            "image": "warehouse-main",
            "description": "Модульные склады — эффективное решение для организации складских помещений любого масштаба. Наши конструкции подходят для хранения товаров, оборудования, материалов и обеспечивают необходимые условия безопасности.",
            "fullDescription": "Модульные складские помещения от «Модульные решения» — это практичное и экономически выгодное решение для организации складских площадей любого назначения. Мы создаём модульные склады для промышленных предприятий, торговых компаний, логистических центров, сельского хозяйства и других сфер деятельности.\n\nНаши складские модули изготавливаются из прочного металлического каркаса с обшивкой профлистом или сэндвич-панелями. Мы предлагаем различные варианты утепления в зависимости от условий хранения товаров. Возможна установка систем вентиляции, отопления, противопожарного оборудования, освещения и систем безопасности.\n\nПреимущества: быстрое строительство (в 3-5 раз быстрее капитального), возможность расширения путём добавления модулей, мобильность (склад можно разобрать и переместить), низкая стоимость по сравнению с традиционными складскими помещениями, возможность эксплуатации в любых климатических условиях."
        },
        {
            "id": "toilets",
            "name": "Туалеты",
            "slug": "toilets",
            "image": "toilets-main",
            "description": "Модульные санитарные блоки — необходимая часть инфраструктуры строительных площадок, мероприятий, парков и других общественных мест. Мы производим туалетные модули с различными уровнями комфорта и вместимости.",
            "fullDescription": "Модульные санитарные блоки компании «Модульные решения» обеспечивают комфортные гигиенические условия на строительных площадках, при проведении массовых мероприятий, в парках, на автостоянках и других общественных местах. Мы предлагаем широкий выбор решений: от компактных одноместных кабин до многоместных санитарных комплексов.\n\nНаши модульные туалеты оснащены всем необходимым оборудованием: унитазами, умывальниками, системами водоснабжения и канализации, вентиляцией, освещением и отоплением. Возможна комплектация душевыми кабинами, электросушилками для рук, зеркалами и другими элементами. Внутренняя отделка выполняется из влагостойких материалов, легко поддающихся уборке.\n\nПреимущества: быстрая установка и подключение коммуникаций, возможность автономной работы, соответствие санитарным нормам и требованиям гигиены, круглогодичное использование, мобильность и возможность перемещения при необходимости."
        },
        {
            "id": "complex",
            "name": "Многосоставные модули",
            "slug": "complex",
            "image": "complex-main",
            "description": "Многосоставные модульные комплексы — это масштабные проекты, объединяющие несколько функциональных зон в единое целое. Мы проектируем и строим модульные здания для офисов, учебных заведений, медицинских учреждений и других целей.",
            "fullDescription": "Многосоставные модульные комплексы от компании «Модульные решения» — это современное архитектурное решение для создания полноценных зданий и сооружений различного назначения. Мы реализуем проекты модульных офисных центров, школ, детских садов, медицинских учреждений, гостиниц, торговых павильонов и производственных помещений.\n\nКаждый многосоставной комплекс проектируется индивидуально с учётом функционального назначения, количества помещений, требований к инженерным системам и эстетики. Модули изготавливаются на заводе с полной внутренней отделкой, инженерными коммуникациями и оборудованием, после чего доставляются на объект и быстро собираются в единую конструкцию.\n\nПреимущества: сокращение сроков строительства в 5-10 раз по сравнению с традиционными методами, возможность поэтапного ввода в эксплуатацию, гибкость планировки и возможность модернизации, высокое качество исполнения благодаря заводскому изготовлению, возможность демонтажа и повторного использования модулей на другом объекте."
        }
    ]
};

// Service image mapping
const serviceImages = {
    'bars-main': 'src/assets/bars-main.jpg',
    'cabins-main': 'src/assets/cabins-main.jpg',
    'living-main': 'src/assets/living-main.jpg',
    'checkpoint-main': 'src/assets/checkpoint-main.jpg',
    'warehouse-main': 'src/assets/warehouse-main.jpg',
    'toilets-main': 'src/assets/toilets-main.jpg',
    'complex-main': 'src/assets/complex-main.jpg'
};

// Initialize on page load
function loadContent() {
    initializePage();
}

// Initialize page
function initializePage() {
    setupNavigation();
    setupHeroSlider();
    setupServices();
    setupForms();
    initPhoneMasks(); // Initialize phone masks
    setupFooter();
    handleHashNavigation();
}

// Navigation
function setupNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
}

function handleHashNavigation() {
    const hash = window.location.hash.slice(1);
    
    if (!hash || hash === 'home') {
        showSection('home');
    } else if (hash === 'about') {
        showSection('about');
    } else if (hash === 'contacts') {
        showSection('contacts');
    } else if (hash === 'projects') {
        showSection('projects');
    } else if (hash === 'contact') {
        showSection('home');
        setTimeout(() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        // Service detail
        showServiceDetail(hash);
    }
}

function showSection(sectionId, skipHash = false) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show requested section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        window.scrollTo(0, 0);
    }
    
    // Update URL (optional)
    if (!skipHash) {
        if (sectionId === 'home') {
            window.location.hash = '';
        } else {
            window.location.hash = sectionId;
        }
    }
}

// Hero Slider
function setupHeroSlider() {
    if (!contentData) return;
    
    const slidesContainer = document.querySelector('.hero-slides');
    const dotsContainer = document.querySelector('.hero-dots');
    const slides = contentData.hero.slides;
    
    // Create slides
    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'hero-slide';
        slideDiv.innerHTML = `
            <img src="src/assets/${slide.image}.jpg" alt="${slide.title}">
            <div class="hero-content">
                <h1>${slide.title}</h1>
                <p>${slide.subtitle}</p>
            </div>
        `;
        slidesContainer.appendChild(slideDiv);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `hero-dot${index === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Setup navigation
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function goToSlide(index) {
        currentSlide = index;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        document.querySelectorAll('.hero-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(currentSlide);
    }
    
    document.querySelector('.hero-next').addEventListener('click', nextSlide);
    document.querySelector('.hero-prev').addEventListener('click', prevSlide);
    
    // Auto-play
    setInterval(nextSlide, contentData.hero.interval || 5000);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

// Services
function setupServices() {
    if (!contentData) return;
    
    const servicesGrid = document.getElementById('servicesGrid');
    const projectsGrid = document.getElementById('projectsGrid');
    
    contentData.services.forEach(service => {
        // Home page service card
        const serviceCard = createServiceCard(service);
        servicesGrid.appendChild(serviceCard);
        
        // Projects page card
        const projectCard = createProjectCard(service);
        projectsGrid.appendChild(projectCard);
    });
    
    // Setup about page
    document.getElementById('aboutTitle').textContent = contentData.about.title;
    const aboutContent = document.getElementById('aboutContent');
    contentData.about.content.split('\n\n').forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        aboutContent.appendChild(p);
    });
}

function createServiceCard(service) {
    const card = document.createElement('a');
    card.href = `#${service.slug}`;
    card.className = 'service-card';
    card.innerHTML = `
        <div class="service-card-image">
            <img src="${serviceImages[service.image]}" alt="${service.name}">
        </div>
        <div class="service-card-content">
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        </div>
    `;
    return card;
}

function createProjectCard(service) {
    const card = document.createElement('a');
    card.href = `#${service.slug}`;
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-card-image">
            <img src="${serviceImages[service.image]}" alt="${service.name}">
        </div>
        <div class="project-card-content">
            <h3>${service.name}</h3>
        </div>
    `;
    return card;
}

// Service Detail
function showServiceDetail(slug) {
    if (!contentData) return;
    
    const service = contentData.services.find(s => s.slug === slug);
    if (!service) {
        showSection('home');
        return;
    }
    
    currentService = service;
    
    document.getElementById('serviceTitle').textContent = service.name;
    document.getElementById('serviceHeroImage').src = serviceImages[service.image];
    document.getElementById('serviceHeroImage').alt = service.name;
    
    const description = document.getElementById('serviceDescription');
    description.innerHTML = '';
    service.fullDescription.split('\n\n').forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        description.appendChild(p);
    });
    
    // Set up gallery
    setupGallery(service.slug);
    
    // Set form source
    document.getElementById('serviceFormSource').value = service.name;
    
    // Show service section without changing hash (keep #slug)
    showSection('service', true);
}

// Gallery
function setupGallery(slug) {
    const track = document.getElementById('galleryTrack');
    track.innerHTML = '';
    
    modalImages = [];
    currentGalleryPosition = 0;
    
    // Load gallery images
    for (let i = 1; i <= 10; i++) {
        const imagePath = `src/assets/${slug}-${i}.jpg`;
        modalImages.push(imagePath);
        
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${imagePath}" alt="${currentService.name} - ${i}">`;
        item.addEventListener('click', () => openModal(i - 1));
        track.appendChild(item);
    }
    
    // Auto-play gallery
    const interval = galleryConfig?.autoplayInterval || 5000;
    setInterval(() => {
        moveGallery(1);
    }, interval);
}

function moveGallery(direction) {
    const track = document.getElementById('galleryTrack');
    const itemWidth = track.querySelector('.gallery-item').offsetWidth + 16; // including gap
    const visibleItems = window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 4;
    const maxPosition = Math.max(0, 10 - visibleItems);
    
    currentGalleryPosition += direction;
    
    if (currentGalleryPosition < 0) {
        currentGalleryPosition = 0;
    } else if (currentGalleryPosition > maxPosition) {
        currentGalleryPosition = maxPosition;
    }
    
    track.style.transform = `translateX(-${currentGalleryPosition * itemWidth}px)`;
}

// Modal
function openModal(index) {
    currentModalIndex = index;
    updateModalImage();
    document.getElementById('galleryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('galleryModal').classList.remove('active');
    document.body.style.overflow = '';
}

function changeModalImage(direction) {
    currentModalIndex += direction;
    if (currentModalIndex < 0) currentModalIndex = modalImages.length - 1;
    if (currentModalIndex >= modalImages.length) currentModalIndex = 0;
    updateModalImage();
}

function updateModalImage() {
    document.getElementById('modalImage').src = modalImages[currentModalIndex];
    document.getElementById('modalCounter').textContent = `${currentModalIndex + 1} из ${modalImages.length}`;
}

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('galleryModal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') changeModalImage(-1);
        if (e.key === 'ArrowRight') changeModalImage(1);
    }
});

// Close modal on background click
document.getElementById('galleryModal').addEventListener('click', (e) => {
    if (e.target.id === 'galleryModal') closeModal();
});

// Forms
function setupForms() {
    // Home contact form
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
    
    // Projects contact form
    document.getElementById('projectsContactForm').addEventListener('submit', handleFormSubmit);
    
    // Service contact form
    document.getElementById('serviceContactForm').addEventListener('submit', handleFormSubmit);
    
    // Contacts page form
    const contactsPageForm = document.getElementById('contactsPageForm');
    if (contactsPageForm) {
        contactsPageForm.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    const data = {
        source: formData.get('source'),
        name: formData.get('name'),
        phone: formData.get('phone'),
        message: formData.get('message')
    };
    
    // EmailJS integration for Yandex Mail
    // ВАЖНО: Для активации отправки выполните следующие шаги:
    // 
    // 1. Зарегистрируйтесь на https://emailjs.com (бесплатно)
    // 
    // 2. Добавьте Email Service:
    //    - Перейдите в "Email Services" → "Add New Service"
    //    - Выберите "Yandex" или "Custom SMTP"
    //    - Настройте SMTP:
    //      * SMTP Server: smtp.yandex.ru
    //      * Port: 465
    //      * Username: s.mosgovoy@yandex.ru
    //      * Password: используйте "Пароль приложения" (НЕ основной пароль!)
    //    - Получите пароль приложения на: https://id.yandex.ru/security/app-passwords
    //
    // 3. Создайте Email Template:
    //    - Перейдите в "Email Templates" → "Create New Template"
    //    - Subject: Новое сообщение с сайта из раздела {{source}}
    //    - Content (пример):
    //      ```
    //      Новое сообщение с сайта "Модульные решения"
    //      
    //      Раздел: {{source}}
    //      Имя: {{name}}
    //      Телефон: {{phone}}
    //      
    //      Сообщение:
    //      {{message}}
    //      ```
    //    - To Email: s.mosgovoy@yandex.ru
    //
    // 4. Получите credentials:
    //    - Service ID из раздела Email Services
    //    - Template ID из раздела Email Templates
    //    - Public Key из Account → General
    //
    // 5. Замените YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY ниже на ваши значения
    // 6. Раскомментируйте код отправки и закомментируйте alert
    
    // РАСКОММЕНТИРУЙТЕ КОД НИЖЕ ПОСЛЕ НАСТРОЙКИ EmailJS:
    /*
    if (typeof emailjs === 'undefined') {
        alert('EmailJS не загружен. Добавьте скрипт EmailJS в index.html перед закрывающим тегом </body>:\n<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>');
        return;
    }
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        source: data.source,
        name: data.name,
        phone: data.phone,
        message: data.message,
        to_email: 's.mosgovoy@yandex.ru'
    }, 'YOUR_PUBLIC_KEY')
    .then(() => {
        alert('Спасибо! Ваше сообщение успешно отправлено.\nМы свяжемся с вами в ближайшее время.');
        form.reset();
    })
    .catch((error) => {
        alert('Произошла ошибка при отправке сообщения.\nПопробуйте позже или свяжитесь с нами по телефону.');
        console.error('Ошибка EmailJS:', error);
    });
    */
    
    // ВРЕМЕННЫЙ КОД ДЛЯ ТЕСТИРОВАНИЯ (удалите после настройки EmailJS):
    console.log('Данные формы:', data);
    alert(`✓ Форма заполнена корректно!\n\n📍 Откуда: ${data.source}\n👤 Имя: ${data.name}\n📞 Телефон: ${data.phone}\n💬 Сообщение: ${data.message}\n\n⚠️ Для активации реальной отправки на ${contentData.site.email} настройте EmailJS согласно инструкции в script.js (строки 361-396)`);
    form.reset();
}

// Footer
function setupFooter() {
    if (!contentData) return;
    
    const phoneLink = document.getElementById('footerPhone');
    phoneLink.href = `tel:${contentData.site.phone.replace(/\D/g, '')}`;
    phoneLink.querySelector('span:last-child').textContent = contentData.site.phone;
    
    const emailLink = document.getElementById('footerEmail');
    emailLink.href = `mailto:${contentData.site.email}`;
    emailLink.querySelector('span:last-child').textContent = contentData.site.email;
    
    document.getElementById('footerCopyright').textContent = contentData.site.copyright;
    
    // Setup contacts page
    const contactsPhone = document.getElementById('contactsPhone');
    if (contactsPhone) {
        contactsPhone.href = `tel:${contentData.site.phone.replace(/\D/g, '')}`;
        contactsPhone.textContent = contentData.site.phone;
    }
    
    const contactsEmail = document.getElementById('contactsEmail');
    if (contactsEmail) {
        contactsEmail.href = `mailto:${contentData.site.email}`;
        contactsEmail.textContent = contentData.site.email;
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', loadContent);

// Phone mask function
function phoneMask(input) {
    let matrix = '+7(___) ___-____';
    
    input.addEventListener('input', function(e) {
        let val = this.value.replace(/\D/g, '');
        let i = 0;
        
        // Always start with +7
        if (val.length > 0 && val[0] !== '7') {
            val = '7' + val;
        }
        
        this.value = matrix.replace(/./g, function(char) {
            if (/[_\d]/.test(char) && i < val.length) {
                return val.charAt(i++);
            } else if (i >= val.length) {
                return '';
            } else {
                return char;
            }
        });
    });
    
    input.addEventListener('focus', function() {
        if (!this.value) {
            this.value = '+7(';
        }
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '+7(') {
            this.value = '';
        }
    });
}

// Apply phone mask to all phone inputs
function initPhoneMasks() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => phoneMask(input));
}

// Make functions global for inline event handlers
window.showSection = showSection;
window.moveGallery = moveGallery;
window.openModal = openModal;
window.closeModal = closeModal;
window.changeModalImage = changeModalImage;