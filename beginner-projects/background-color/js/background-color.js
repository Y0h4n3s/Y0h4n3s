const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

function clicked(button) {
    document.querySelector('#cont').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}