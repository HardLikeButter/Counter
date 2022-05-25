
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


let count = 0;

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let styles = e.target.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        if (styles.contains('reset')) {
            count = 0;
        }
        if (styles.contains('increase')) {
            count++;
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#FFF';
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        value.textContent = count;
    });
});

