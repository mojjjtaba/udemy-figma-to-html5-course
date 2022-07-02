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



const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'), {
    itemSelector: '.item'
});

const filterButtons = document.querySelectorAll('#my_work .filters button')

filterButtons.forEach((item) => {
    item.addEventListener('click', workFilter)
})


function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#my_work .filters button.active');

    activeButton.classList.remove('active');
    clickedButton.classList.add("active");

    shuffleInstance.filter(clickedButtonGroup)
}

var workModal = new bootstrap.Modal(document.getElementById('workModal'))
const workElements = document.querySelectorAll("#my_work .work-items .wrap");

workElements.forEach((item) => {
    item.addEventListener('click', function () {
        document.querySelector('#workModal .modal-body img').setAttribute('src', item.getAttribute('data-image'))
        document.querySelector('#workModal .modal-body .title').innerText = item.getAttribute('data-title')
        document.querySelector('#workModal .modal-body .description').innerText = item.getAttribute('data-description')
        document.querySelector('#workModal .modal-body .client .value').innerText = item.getAttribute('data-client')
        document.querySelector('#workModal .modal-body .completed .value').innerText = item.getAttribute('data-completed')
        document.querySelector('#workModal .modal-body .skills .value').innerText = item.getAttribute('data-skills')
        document.querySelector('#workModal .modal-body .project-link a').setAttribute('href', item.getAttribute('data-project-link'))

        workModal.show();
    })
})

var workModalElement = document.getElementById('workModal')
workModalElement.addEventListener('show.bs.modal', function (event) {
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
})

workModalElement.addEventListener('hide.bs.modal', function (event) {
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
})





let testimonialImagesList = document.querySelectorAll('#testimonial .images img');

testimonialImagesList.forEach((item, index) => {
    let position = index + 1;
    item.addEventListener('click', function () {
        document.querySelector('#testimonial .images img.active').classList.remove('active')
        document.querySelector(`#testimonial .images img:nth-child(${position})`).classList.add('active')

        document.querySelector('#testimonial .comments .item.active').classList.remove('active')
        document.querySelector(`#testimonial .comments .item:nth-child(${position})`).classList.add('active')
    })
})


let testimonialImagesHeight = document.querySelector('#testimonial .images').clientHeight;
document.querySelector('#testimonial .images').style.minHeight = `${testimonialImagesHeight}px`;






let contactFormInputs = document.querySelectorAll('#contact_me form input, #contact_me form textarea');
contactFormInputs.forEach((item) => {
    item.addEventListener('focus', function () {
        item.parentElement.classList.add('focus-or-fill');
    })

    item.addEventListener('blur', function () {
        if (!item.value.trim()) {
            item.parentElement.classList.remove('focus-or-fill');
        }
    })
})


function sendContactMessage(form) {
    event.preventDefault();

    let formInfo = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    }

    let formData = new FormData();
    formData.append('name', form.name.value);
    formData.append('email', form.email.value);
    formData.append('subject', form.subject.value);
    formData.append('message', form.message.value);

    fetch('./php/contact.php', {
        method : 'post',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
