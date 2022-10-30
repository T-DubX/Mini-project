const images = document.querySelectorAll('.min');
let count = 0;

const next = document.querySelector('.next');
next.onclick = nextFunction;
next.addEventListener('touchstart', nextFunction);

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;
prev.addEventListener('touchstart', prevFunction)

const reset = document.querySelector('.reset');
reset.onclick = resetFunction;
reset.addEventListener('touchstart', resetFunction);

function nextFunction() {
    if (count == images.length - 1) {
        images[count].classList.remove('active-img');
        count = 0;

        images[count].classList.add('active-img');

    } else {
        images[count].classList.remove('active-img');
        count++;

        images[count].classList.add('active-img');
    }

    maxImg();
}

function prevFunction() {
    if (count == 0) {
        images[count].classList.remove('active-img')
        count = images.length - 1;

        images[count].classList.add('active-img')
    } else {
        images[count].classList.remove('active-img')
        count--;

        images[count].classList.add('active-img')
    }

    maxImg();
}

function resetFunction() {
    images[count].classList.remove('active-img')
    count = 0;

    images[count].classList.add('active-img');

    maxImg();
}

function maxImg() {
    document.querySelector('.max').src = `${images[count].src}`
}

// let arr = [1, 2, 3, 3,4,5,6];

// const arrCount = 1;


// console.log(arr[arrCount])