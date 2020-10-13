function clicked(button) {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    document.querySelector('#cont').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('.r-value').innerHTML = r
    document.querySelector('.g-value').innerHTML = g
    document.querySelector('.b-value').innerHTML = b
    document.querySelector('.rgb-values').style.display = 'inline-block';
    document.querySelector('.rgb-values').style.color = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('.display').style.backgroundColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
}