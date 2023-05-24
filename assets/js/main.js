/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    // const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader  = () => {
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >=50 ? header.classList.add('blur-header')
                                : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
          contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailJs.sendForm('service_bt728nu', 'template_remssbv', '#contact-form', 'jhAkagW968K5yU9mz')
        .then(() =>{
            contactMessage.textContent = 'Message sent successfully'
        }, () =>{
            contactMessage.textContent = 'Message not sent successfully'            
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{  //When the viewport height is more than or equal to 350, the scroll up reaches the screen
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId +']')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    orgin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {orgin:'bottom'})
sr.reveal(`.about__data, .skills__data`, {orgin:'left'})
sr.reveal(`.about__image, .skills__content`, {orgin:'right'})
sr.reveal(`.services__card, .projects__card`, {interval:100})