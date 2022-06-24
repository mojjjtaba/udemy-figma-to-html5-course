let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item) => {
    item.addEventListener('click', function(){
        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
    })
})



document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('open')
})



var options = {
  strings: ['Front-End web developer', 'Back-End web developer', 'Web designer'],
  typeSpeed: 70,
  backSpeed: 10,
  loop: true
};

var typed = new Typed('.field h2', options);



for(let i = 1; i <= 15; i++) {
    let meteor = document.createElement('span');
    meteor.className = 'meteor';
    document.querySelector('#home .meteor-shower').append(meteor)
}

