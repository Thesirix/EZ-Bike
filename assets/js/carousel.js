let array = ["./image/icon-windows.svg", "./image/icon-documents.svg", "./image/icon-idea.svg"];

const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let left = document.querySelector('.left');
let right = document.querySelector('.right');

if (currentIndex === 0) {
    left.classList.add('gray');
}

document.querySelector('.left').addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + array.length) % array.length;
        document.querySelector(".grimg").src = array[currentIndex];
        dots.forEach(dot => dot.style.backgroundColor = "");
        dots[currentIndex].style.backgroundColor = "green";
        left.classList.add('active');
        setTimeout(function () {
            left.classList.remove('active');
        }, 150);
    }

    if (currentIndex === 0) {
        left.classList.add('inactive');
        left.classList.add('gray');
    } else {
        left.classList.remove('inactive');
        left.classList.remove('gray');
    }

    if (currentIndex === array.length - 1) {
        right.classList.add('inactive');
        right.classList.add('gray');
    } else {
        right.classList.remove('inactive');
        right.classList.remove('gray');
    }
});

document.querySelector('.right').addEventListener("click", function () {
    if (currentIndex < array.length - 1) {
        currentIndex = (currentIndex + 1) % array.length;
        document.querySelector(".grimg").src = array[currentIndex];
        dots.forEach(dot => dot.style.backgroundColor = "");
        dots[currentIndex].style.backgroundColor = "green";
        right.classList.add('active');
        setTimeout(function () {
            right.classList.remove('active');
        }, 150);
    }

    if (currentIndex === 0) {
        left.classList.add('inactive');
        left.classList.add('gray');
    } else {
        left.classList.remove('inactive');
        left.classList.remove('gray');
    }

    if (currentIndex === array.length - 1) {
        right.classList.add('inactive');
        right.classList.add('gray');
    } else {
        right.classList.remove('inactive');
        right.classList.remove('gray');
    }
});

dots[currentIndex].style.backgroundColor = "green";
