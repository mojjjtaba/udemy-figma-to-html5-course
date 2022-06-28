let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item) => {
    item.addEventListener('click', function () {
        console.log(item)
        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
    })
})



document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('open')
})



var options = {
    strings: ['Front-End web developer', 'Back-End web developer', 'Web designer'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 10
};

new Typed('.field h2', options);



for (let i = 1; i <= 15; i++) {
    let meteor = document.createElement('span');
    meteor.classList = 'meteor'
    document.querySelector('#home .meteor-shower').append(meteor);
}




let shuffleInstance = new Shuffle(document.querySelector('#my_work .work-list'), {
    itemSelector: '.item'
});

let filterItems = document.querySelectorAll('#my_work .filters button');
filterItems.forEach((item) => {
    item.addEventListener('click', workFilter);
})


function workFilter() {
    let btn = event.currentTarget;
    let activeButton = document.querySelector('#my_work .filters button.active');
    let btnGroup = btn.getAttribute('data-group');

    activeButton.classList.remove('active');
    btn.classList.add('active');

    shuffleInstance.filter(btnGroup);
}



let workModal = new bootstrap.Modal(document.getElementById('workModal'));
let workElements = document.querySelectorAll('#my_work .work-list .item .wrap');

workElements.forEach((item) => {
    item.addEventListener('click', function () {
        document.querySelector("#workModal img").setAttribute('src', item.getAttribute('data-image'));
        document.querySelector("#workModal .left .title").innerText = item.getAttribute('data-title');
        document.querySelector("#workModal .left p").innerText = item.getAttribute('data-description');
        document.querySelector("#workModal .right .client .value").innerText = item.getAttribute('data-client');
        document.querySelector("#workModal .right .completed .value").innerText = item.getAttribute('data-completed');
        document.querySelector("#workModal .right .skills .value").innerText = item.getAttribute('data-skills');
        document.querySelector("#workModal .right .project-link a").setAttribute('href', item.getAttribute('data-project-link'));

        workModal.show()
    })
})
