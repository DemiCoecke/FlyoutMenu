const navSlide = () => {

    const burger = document.querySelector('.burger'); 
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //click event
    burger.addEventListener('click', () => {
        
        //Toggle Nav
        nav.classList.toggle('nav-active') 

        //Animate Links
        navLinks.forEach((link, index) => { //foreach for all items
            if(link.style.animation) //if we have an animation
            {
                link.style.animation = ''; //no animation
            }
            else
            {
                //add animation 
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`; // :7 to get delay, +0.5 to get start delay
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();