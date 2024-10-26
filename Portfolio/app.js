let darkModeIcon = document.querySelector('#darkMode-icon');

let theme = "light"
darkModeIcon.onclick = () => {
    if(theme === "light"){
    document.body.classList.add("dark");
    darkModeIcon.classList.toggle('bx-sun');
    document.body.style.backgroundColor = " #080e1e";
    document.body.style.color = "white";
    document.querySelector(".home-image1").style.backgroundColor = " #071c21";
    document.getElementById("a").style.color = "white";
    document.getElementById("ab").style.color = "white";
    document.getElementById("abcd").style.color = "white";
    document.querySelector(".about").style.backgroundColor = "#080e1e"
    document.getElementById("name").style.color = "white"
    document.getElementById("name").style.borderBottom = " 1px solid white"
    document.getElementById("email").style.color = "white"
     document.getElementById("email").style.borderBottom = " 1px solid white"
    document.getElementById("message").style.color = "white"
    document.getElementById("message").style.borderBottom = "1px solid white"
    
    theme = "dark"
    }else if(theme === "dark"){
    document.body.classList.remove("dark");
    darkModeIcon.classList.remove('bx-sun');
    document.body.style.backgroundColor = " #cdd1d2";
    document.querySelector(".home-image1").style.backgroundColor = "#080e1e";
    document.body.style.color = "black"
    document.body.classList.toggle('dark-mode');
    document.getElementById("a").style.color = "black"
    document.getElementById("ab").style.color = "black";
    document.getElementById("abcd").style.color = "black"
    document.querySelector(".about").style.backgroundColor = "#c5ccd1"
    document.getElementById("name").style.color = "black"
     document.getElementById("name").style.borderBottom = "1px solid black"
    document.getElementById("email").style.color = "black"
     document.getElementById("email").style.borderBottom = " 1px solid black"
    document.getElementById("message").style.color = "black"
      document.getElementById("message").style.borderBottom = "1px solid black"

    theme = "light"
    }
};



ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.user, ', { origin: 'top' });
ScrollReveal().reveal('.home-image', { origin: 'right' });
ScrollReveal().reveal('.about', { origin: 'left' });
ScrollReveal().reveal('#img44, .contact',  { origin: 'bottom' });


const typed = new Typed('#multiple-text', {
    strings: ['Counselor', 'Team Lead', ' Manager'], 
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true,
});



let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);



let menuIcon =  document.querySelector("#menu-icon")

menuIcon.classList.remove('bx-x');
header.classList.remove('active');



