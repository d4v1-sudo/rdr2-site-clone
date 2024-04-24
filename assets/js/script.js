document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("site-nav");
    var header = document.getElementById("site-header");
    var router = document.getElementById("router");
    var title = document.getElementById("title");
    var footer = document.getElementById("site-footer");
    const video1 = document.getElementById('video1');
    const video2 = document.getElementById('video2');
    const video3 = document.getElementById('video3');
    const video4 = document.getElementById('video4');

    if (navbar && header && router && title && footer) {
        console.log("Elementos selecionados com sucesso!");

        title.addEventListener("click", function() {
            console.log("Clicado no título do navbar!");
            toggleNavbar();
        });

        document.addEventListener("click", function(event) {
            var target = event.target;
            if (!navbar.contains(target) && !title.contains(target)) {
                console.log("Clicado fora do navbar!");
                closeNavbar();
            }
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                console.log("Tecla Esc pressionada!");
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

        // Salva o elemento original com a classe active
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
        console.log("Erro: Um ou mais elementos não foram encontrados!");
    }

    function toggleNavbar() {
        console.log("Alternando estado do navbar...");
        if (navbar.classList.contains("nav-active")) {
            closeNavbar();
        } else {
            openNavbar();
        }
    }

    function openNavbar() {
        console.log("Abrindo navbar...");
        header.classList.add("nav-active");
        navbar.classList.add("nav-active");
        router.classList.add("nav-active", "dimmable-active");
        footer.classList.add("nav-active", "dimmable-active");
    }

    function closeNavbar() {
        console.log("Fechando navbar...");
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

  function audio1() {
    video1.classList.toggle('active');
  }

  function audio2() {
    video2.classList.toggle('active');
  }

  function audio3() {
    video3.classList.toggle('active');
  }

  function audio4() {
    video4.classList.toggle('active');
  }

function toggleAudio(event) {
  const video = event.currentTarget.querySelector("video");
  video.muted = !video.muted;
}

const videoContainers = document.querySelectorAll('.video-button-container');
videoContainers.forEach(function(container) {
  container.addEventListener('click', toggleAudio);
});