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
