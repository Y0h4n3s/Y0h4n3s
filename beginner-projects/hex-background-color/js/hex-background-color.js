const hex_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clicked() {
    let hex = '#'
    while (true) {
        for (let i = 0; i < 6; i++) {
            hex += hex_array[Math.floor(Math.random() * hex_array.length)];
        }
        document.getElementById('butt').style.backgroundColor = hex;
        document.getElementById('text').textContent = hex;
        document.querySelector('body').style.backgroundColor = hex;
        await sleep(1000);
        hex = '#'
    }
}