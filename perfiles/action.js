const boton = document.getElementById ('photos-btn')
const text = document.getElementById ('paragraph')

function changeText (){
 if (
    text.innerText === "Thanks for viewing this section 🐱")
        { text.innerText = "";
    } else {
        text.innerText = "Thanks for viewing this section 🐱";
        text.style.color = "purple";
    }
}

boton.addEventListener('click',changeText )


const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let current = 0;

next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
});

prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
});