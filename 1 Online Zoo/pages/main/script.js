import carousel from './carousel.js';
import testimonials from './testimonials.js';

carousel();
testimonials();

//BURGER-MENU

const burger = document.querySelector('.last-element');
const menuBody = document.querySelector('.header__burger-menu');
const cross = document.querySelector('.cross');
let screen = document.querySelector('.screen');
const items = document.querySelectorAll('.testimonial');
let clone;

if (window.matchMedia("(max-width: 960px)").matches) {
    burger.addEventListener('click', function (e) {

        screen.classList.toggle('_lock');
        menuBody.classList.toggle('_active');
    })
    cross.addEventListener('click', () => {
        menuBody.classList.toggle('_active');
        screen.classList.toggle('_lock');
    })

    //POPUPS

    items.forEach((item) => {
        item.addEventListener('click', function (e) {
            clone = this.cloneNode(true);
            clone.style.cursor = 'auto';
            let x = document.createElement('div');
            x.classList.add('testimonial__close');
            clone.append(x);
            document.body.append(clone);
            clone.classList.add('testimonial_popap');
            screen.classList.add('_lock');
            x.addEventListener('click', function () {
                screen.classList.remove('_lock');
                clone.remove();
            })
        })
    });

    //REMOVE SCREEN-LOCK

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('screen')) {
            screen.classList.toggle('_lock');
            if (menuBody.classList.contains('_active')) {
                menuBody.classList.toggle('_active');
            }
            if (document.body.contains(clone)) {
                clone.remove();
            }

        }
    })
}

