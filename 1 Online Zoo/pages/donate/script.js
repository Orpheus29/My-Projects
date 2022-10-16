

let label = document.querySelectorAll('.dot_radio');
let frame = document.querySelector('#donation_amount');
let value;

label.forEach((elem) => {
    elem.addEventListener('change', (e) => {
        value = e.target.value;
        frame.value = value;
    })
});


frame.onfocus = (e) => {
    frame.value = "";
}

let pay_value;
frame.addEventListener('input', (e) => {
    label.forEach((el) => {
        el.removeAttribute('checked');
    })

    if (frame.value == 5000) {
        pay_value = document.querySelector('input[value="5000"]');
        pay_value.setAttribute('checked', 'checked')
    } else if (frame.value == 2000) {
        pay_value = document.querySelector('input[value="2000"]');
        pay_value.setAttribute('checked', 'checked')
    } else if (frame.value == 1000) {
        pay_value = document.querySelector('input[value="1000"]');
        pay_value.setAttribute('checked', 'checked')
    } else if (frame.value == 500) {
        pay_value = document.querySelector('input[value="500"]');
        pay_value.setAttribute('checked', 'checked')
    } else if (frame.value == 250) {
        pay_value = document.querySelector('input[value="250"]');
        pay_value.setAttribute('checked', 'checked')
    } else if (frame.value == 100) {
        pay_value = document.querySelector('input[value="100"]');
        pay_value.setAttribute('checked', 'checked')
    } else if (frame.value == 50) {
        pay_value = document.querySelector('input[value="50"]');
        pay_value.setAttribute('checked', 'checked')
    } else if (frame.value == 25) {
        pay_value = document.querySelector('input[value="25"]');
        pay_value.setAttribute('checked', 'checked')
    } else {
        label.forEach((el) => {
          el.removeAttribute('checked');
        })
      }
})

// const values = [5000, 2000, 1000, 500, 250, 100, 50, 25]

// frame.addEventListener('input', (e) => {
//     label.forEach((el) => {
//         el.removeAttribute('checked');
//     })
//     for (let val of values) {
//         if (val == frame.value) {
//             label.querySelector(`input[value="${val}"]`).setAttribute('checked', 'checked');
//         }
//     }})


const burger = document.querySelector('.last-element');
const menuBody = document.querySelector('.header__burger-menu');
const cross = document.querySelector('.cross');
const screen = document.querySelector('.screen');


if (window.matchMedia("(max-width: 960px)").matches) {
    burger.addEventListener('click', function (e) {

        screen.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
    })
    cross.addEventListener('click', () => {
        menuBody.classList.toggle('_active');
        screen.classList.toggle('_lock');
    })

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('screen')) {
            menuBody.classList.toggle('_active');
            screen.classList.toggle('_lock');
        }
    }
    )
}
