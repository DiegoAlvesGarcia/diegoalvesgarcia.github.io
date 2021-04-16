const userDetail = [
    {
        nome: "Fabricio Cazzaniga",
        profissao: "Software Development Specialist",
        mensagem: `Diego é um excelente profissional. Sempre pró ativo para
        buscar soluções e ajudar a equipe.`,
        imagem: 'fabricio.jfif'
    },
    {
        nome: "Alana Lima Garcia",
        profissao: "Product Owner",
        mensagem: `O Diego é um profissional muito dedicado, que conhece o
        produto em que está trabalhando e muito prestativo com os seus colegas
        de equipe.`,
        imagem: 'alana.jfif'
    },
    {
        nome: "Igor Silva de Moura",
        profissao: "tech Lead Software Engineer",
        mensagem: `Profissional disciplinar e prudente. Destaco o 
        posicionamento em querer aplicar as melhores práticas de mercado.`,
        imagem: 'igor.jfif'
    },
    {
        nome: "Thiago Dias",
        profissao: "Tech Lead",
        mensagem: `Tive o prazer de trabalhar com o Diego. Um bom profissional, dedicado e amigo de todos.`,
        imagem: 'thiago.jfif'
    },
    {
        nome: "Su Specie",
        profissao: "Front-end Developer Analyst",
        mensagem: `Diego é uma pessoa espetacular! É muito comunicativo, sabe trabalhar e lidar muito bem com pessoas.`,
        imagem: 'suellyn.jfif'
    },
    {
        nome: "Fu Chien Hsu",
        profissao: "Software Engineer",
        mensagem: `Excelente profissional. Fiquei admirado com sua maturidade de como reage com as pessoas.`,
        imagem: 'chien.jfif'
    },
    {
        nome: "Diego Lopes",
        profissao: "Software Engineer",
        mensagem: `Diego é um profissional extremamente dedicado em seu trabalho, tem um grande compromisso com suas responsabilidades.`,
        imagem: 'lopes.jfif'
    },
]

document.getElementById('swiper-wrapper').innerHTML = userDetail.map(user =>
    `<div class="swiper-slide">
        <div class="testimonialBox">
            <img src="assets/right-quote.png" class="quote">
            <div class="content">
                <p class="mesage-testimonialBox">${user.mensagem}</p>
                <div class="details">
                    <div class="imgBx">
                        <img src="assets/${user.imagem}">
                    </div>
                    <span class="title-testimonialBox">
                        ${user.nome}<br>
                        <span>
                            ${user.profissao}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>`
).join('')

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