document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("site-nav");
    var header = document.getElementById("site-header");
    var router = document.getElementById("router");
    var title = document.getElementById("title");
    var footer = document.getElementById("site-footer");

    if (navbar && header && router && title && footer) {
        console.log("Successfully selected elements!");

        title.addEventListener("click", function() {
            console.log("Navbar clicked!");
            toggleNavbar();
        });

        document.addEventListener("click", function(event) {
            var target = event.target;
            if (!navbar.contains(target) && !title.contains(target)) {
                console.log("Clicked outside the navbar!");
                closeNavbar();
            }
        });

        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                console.log("Esc key pressed!");
                if (navbar.classList.contains("nav-active")) {
                    closeNavbar();
                } else {
                    openNavbar();
                }
            }
        });
    } else {
        console.log("Error: One or more elements were not found!");
    }

    function toggleNavbar() {
        console.log("Switching navbar status...");
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
