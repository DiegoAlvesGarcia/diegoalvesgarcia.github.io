/* ===== Change menu icon ===== */

const changeMenuIcon = () => {
    const iconMenu = document.getElementById('bx-menu');
    const iconClose = document.getElementById('bx-close');

    if (iconMenu.style.display !== 'none') {
        iconMenu.style.display = 'none';
        iconClose.style.display = 'flex';
    } else {
        iconMenu.style.display = 'flex';
        iconClose.style.display = 'none';
    }
}

/* ===== Show menu ===== */
const showMenu = () => {
    const toggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu')

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navMenu.classList.toggle('show')
            changeMenuIcon()
        })
    }
}

showMenu()

/* ===== Remove menu mobile ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show')
    changeMenuIcon()
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== Scroll selections active link ===== */
const sections = document.querySelectorAll('section[id')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});