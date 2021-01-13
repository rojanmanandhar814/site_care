const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav ul li');
    


    burger.addEventListener('click', () => {
            //tOGGLE NAV
        nav.classList.toggle('nav');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                 link.style.animation = '';
            } else {
                 link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s'

            }
         });
         //burger animation
         burger.classList.toggle('toggle');
    });
    
} 
 
navSlide(); 
