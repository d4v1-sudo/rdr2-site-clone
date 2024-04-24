document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("site-nav");
    var header = document.getElementById("site-header");
    var router = document.getElementById("router");
    var title = document.getElementById("title");
    var footer = document.getElementById("site-footer");

    if (navbar && header && router && title && footer) {
        console.log("Elements selected successfully!");

        title.addEventListener("click", function() {
            console.log("Clicked on navbar title!");
            toggleNavbar();
        });

        document.addEventListener("click", function(event) {
            var target = event.target;
            if (!navbar.contains(target) && !title.contains(target)) {
                console.log("Clicked outside navbar!");
                closeNavbar();
            }
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                console.log("Escape key pressed!");
                if (navbar.classList.contains("nav-active")) {
                    closeNavbar();
                } else {
                    openNavbar();
                }
            }
        });

        navbar.addEventListener("mouseout", function(event) {
            var relatedTarget = event.relatedTarget;
            if (!navbar.contains(relatedTarget)) {
                restoreActiveClass();
            }
        });

        // Save the original element with the active class
        var originalActiveLink = document.querySelector('.links a.active');

        var links = document.querySelectorAll('.links a');
        links.forEach(function(link) {
            link.addEventListener('mouseover', function() {
                if (!link.classList.contains('active')) {
                    removeActiveClassFromLinks();
                    link.classList.add('active');
                }
            });
        });
    } else {
        console.log("Error: One or more elements were not found!");
    }

    function toggleNavbar() {
        console.log("Toggling navbar state...");
        if (navbar.classList.contains("nav-active")) {
            closeNavbar();
        } else {
            openNavbar();
        }
    }

    function openNavbar() {
        console.log("Opening navbar...");
        header.classList.add("nav-active");
        navbar.classList.add("nav-active");
        router.classList.add("nav-active", "dimmable-active");
        footer.classList.add("nav-active", "dimmable-active");
    }

    function closeNavbar() {
        console.log("Closing navbar...");
        header.classList.remove("nav-active");
        navbar.classList.remove("nav-active");
        router.classList.remove("nav-active", "dimmable-active");
        footer.classList.remove("nav-active", "dimmable-active");
    }

    function removeActiveClassFromLinks() {
        var links = document.querySelectorAll('.links a');
        links.forEach(function(link) {
            link.classList.remove('active');
        });
    }

    function restoreActiveClass() {
        removeActiveClassFromLinks();
        if (originalActiveLink) {
            originalActiveLink.classList.add('active');
        }
    }
});

function toggleLanguageSelect() {
    var languageSelect = document.querySelector('.language-select');
    var changeLang = document.querySelector('.change-lang');
    var changeLang2 = document.querySelector('.change-lang2');

    if (languageSelect && changeLang && changeLang2) {
        languageSelect.classList.toggle('active');
        changeLang.classList.toggle('active');
        changeLang2.classList.toggle('active');
    }
}

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    updateLanguageSelectorText(lang);
}

function updateLanguageSelectorText(lang) {
    var languageSelector = document.getElementById('languageSelector');
    switch (lang) {
        case 'en_us':
            languageSelector.textContent = 'English';
            break;
        case 'de_de':
            languageSelector.textContent = 'Deutsch';
            break;
        case 'fr_fr':
            languageSelector.textContent = 'Français';
            break;
        case 'it_it':
            languageSelector.textContent = 'Italiano';
            break;
        case 'ja_jp':
            languageSelector.textContent = '日本語';
            break;
        case 'ru_ru':
            languageSelector.textContent = 'Русский';
            break;
        case 'es_es':
            languageSelector.textContent = 'Español (España)';
            break;
        case 'es_mx':
            languageSelector.textContent = 'Español (México)';
            break;
        case 'pt_br':
            languageSelector.textContent = 'Português';
            break;
        case 'ko_kr':
            languageSelector.textContent = '한국어';
            break;
        case 'zh_hans':
            languageSelector.textContent = '中文（简体)';
            break;
        case 'zh_tw':
            languageSelector.textContent = '中文（繁體)';
            break;
        case 'pl_pl':
            languageSelector.textContent = 'Polski';
            break;
        default:
            languageSelector.textContent = 'Language';
    }
}
