document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("site-nav");
    var header = document.getElementById("site-header");
    var router = document.getElementById("router");
    var title = document.getElementById("title");
    var footer = document.getElementById("site-footer");

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