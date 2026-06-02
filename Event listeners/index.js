const mybox = document.getElementById("mybox");
const mybtn = document.getElementById("mybtn");



mybtn.addEventListener("click", event => {
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "Ouch!";
});

mybtn.addEventListener("mouseover", event => {
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "Don't do it!";
});

mybtn.addEventListener("mouseout", event => {
    mybox.style.backgroundColor = "hsl(120, 73%, 75%)";
    mybox.textContent = "Click me";
});