/*-----Scroll top button-------------------*/
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    const togglescrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }));
}
/*---------------------------------------------------------*/



/*--------------------Nav Bar For Smartphone---------------------- */
document.addEventListener("DOMContentLoaded", function () {
            const mobileMenu = document.getElementById("mobile-menu");
        const offcanvasMenu = document.getElementById("offcanvas");
        const closeMenu = document.getElementById("close-menu");

        // เปิดเมนู
        mobileMenu.addEventListener("click", function () {
            offcanvasMenu.classList.add("active");
            });

        // ปิดเมนู
        closeMenu.addEventListener("click", function () {
            offcanvasMenu.classList.remove("active");
            });
        });
/*---------------------------------------------------------*/


/*------Fn Sroll up------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-up");

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add("visible");
            } else {
                element.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();  // check visibility when the page loads
});
/*---------------------------------------------------------*/