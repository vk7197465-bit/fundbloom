/* =========================================================
   FUNDBLOOM GLOBAL THEME + RTL SYSTEM
   Works across:
   Home
   Home 2
   Services
   Pricing
   Campaign
   Login
   Signup
   Dashboard
   Contact
   Blog
========================================================= */

(function () {

    const THEME_KEY = "fundbloom-theme";
    const DIRECTION_KEY = "fundbloom-direction";


    /* =====================================================
       READ SAVED SETTINGS BEFORE PAGE RENDERS
    ===================================================== */

    const savedTheme =
        localStorage.getItem(THEME_KEY) || "light";

    const savedDirection =
        localStorage.getItem(DIRECTION_KEY) || "ltr";


    /* =====================================================
       APPLY THEME
    ===================================================== */

    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );


    /* =====================================================
       APPLY RTL / LTR
    ===================================================== */

    document.documentElement.setAttribute(
        "dir",
        savedDirection
    );


    /* =====================================================
       GLOBAL THEME FUNCTION
    ===================================================== */

    window.FundBloomTheme = {

        setTheme: function (theme) {

            document.documentElement.setAttribute(
                "data-theme",
                theme
            );

            localStorage.setItem(
                THEME_KEY,
                theme
            );

            updateThemeButtons();

        },

        toggleTheme: function () {

            const current =
                document.documentElement.getAttribute(
                    "data-theme"
                ) || "light";

            this.setTheme(
                current === "dark"
                    ? "light"
                    : "dark"
            );

        },


        setDirection: function (direction) {

            document.documentElement.setAttribute(
                "dir",
                direction
            );

            localStorage.setItem(
                DIRECTION_KEY,
                direction
            );

            updateDirectionButtons();

        },

        toggleDirection: function () {

            const current =
                document.documentElement.getAttribute(
                    "dir"
                ) || "ltr";

            this.setDirection(
                current === "rtl"
                    ? "ltr"
                    : "rtl"
            );

        }

    };


    /* =====================================================
       UPDATE ALL THEME BUTTONS
    ===================================================== */

    function updateThemeButtons() {

        const theme =
            document.documentElement.getAttribute(
                "data-theme"
            );

        document
            .querySelectorAll(
                "[data-global-theme]"
            )
            .forEach(button => {

                button.innerHTML =
                    theme === "dark"

                        ? '<i data-lucide="sun"></i>'

                        : '<i data-lucide="moon"></i>';

                button.setAttribute(
                    "title",
                    theme === "dark"
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                );

            });


        if (window.lucide) {
            lucide.createIcons();
        }

    }


    /* =====================================================
       UPDATE ALL RTL BUTTONS
    ===================================================== */

    function updateDirectionButtons() {

        const direction =
            document.documentElement.getAttribute(
                "dir"
            );

        document
            .querySelectorAll(
                "[data-global-direction]"
            )
            .forEach(button => {

                button.setAttribute(
                    "title",
                    direction === "rtl"
                        ? "Switch to LTR"
                        : "Switch to RTL"
                );

            });

    }


    /* =====================================================
       BUTTON EVENTS
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const themeButton =
                event.target.closest(
                    "[data-global-theme]"
                );

            const directionButton =
                event.target.closest(
                    "[data-global-direction]"
                );


            if (themeButton) {

                FundBloomTheme.toggleTheme();

            }


            if (directionButton) {

                FundBloomTheme.toggleDirection();

            }

        }
    );


    /* =====================================================
       INITIAL UI
    ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            updateThemeButtons();
            updateDirectionButtons();

        }
    );


})();