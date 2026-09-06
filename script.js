/* =====================================================
   ZARA ARPI PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navigation =
    document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        () => {

            navigation.classList.toggle("open");

        }
    );


    /* Tutup menu setelah memilih navigasi */

    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navigation.classList.remove(
                        "open"
                    );

                }
            );

        }
    );

}



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   AUTOMATIC YEAR
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =====================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            navigation &&
            menuButton &&
            navigation.classList.contains("open")
        ) {

            const clickedInsideMenu =
                navigation.contains(
                    event.target
                );

            const clickedButton =
                menuButton.contains(
                    event.target
                );


            if (
                !clickedInsideMenu &&
                !clickedButton
            ) {

                navigation.classList.remove(
                    "open"
                );

            }

        }

    }
);



/* =====================================================
   HEADER EFFECT WHEN SCROLLING
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 50) {

            header.style.background =
                "rgba(4,6,8,.94)";

            header.style.boxShadow =
                "0 10px 40px rgba(0,0,0,.25)";

        }

        else {

            header.style.background =
                "rgba(4,6,8,.84)";

            header.style.boxShadow =
                "none";

        }

    },
    {
        passive: true
    }
);



/* =====================================================
   SMOOTH ANCHOR NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                function(event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView(
                            {
                                behavior:
                                    "smooth",
                                block:
                                    "start"
                            }
                        );

                    }

                }
            );

        }
    );



/* =====================================================
   PAGE LOADED
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
