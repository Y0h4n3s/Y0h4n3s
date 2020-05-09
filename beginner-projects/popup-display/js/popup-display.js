(function() {

    const buttons = document.querySelectorAll('.buttons');
    const items = document.querySelectorAll('.store-item');
    const searched = document.getElementById('search-item');
    const popup = document.getElementById('popup');
    const images = document.getElementsByClassName('.image-item');
    const leftBtn = document.querySelector('.left-arrow');
    const rightBtn = document.querySelector('.right-arrow');
    let right = 0;
    let left = 0;

    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            const filter = e.target.dataset.filter;
            items.forEach((item) => {
                if (filter === 'all') {
                    console.log(filter)
                    item.style.display = 'block';

                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });

    searched.addEventListener('keyup', function(e) {
        items.forEach(item => {
            if (item.getAttribute('data-item').includes(e.target.value.toLowerCase().trim())) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })

    let imagelist = [];
    items.forEach(item => {
        imagelist.push(item.childNodes[1].childNodes[1].src);
    })


    items.forEach((item) => {
        item.addEventListener('click', function(e) {
            let image = e.target.src;

            console.log(image)
            if (e.target.tagName === 'IMG') {
                document.querySelector('#myImage').src = image
                popup.style.display = 'block';
                left = imagelist.indexOf(image) - 1;
                right = imagelist.indexOf(image) + 1;
            }
        })
    })

    document.querySelector('.close').addEventListener('click', function(e) {
        popup.style.display = 'none';
    });

    rightBtn.addEventListener('click', function(e) {
        if (right === imagelist.length) {
            right = 0;
        }
        if (right === 2) {
            left = 0;
        }
        document.querySelector('#myImage').src = imagelist[right];
        right++;
        left++;

    });
    leftBtn.addEventListener('click', function(e) {
        if (left === -1) {
            left = imagelist.length - 1;
        }
        if (left === imagelist.length - 3) {
            right = imagelist.length - 1;
        }

        document.querySelector('#myImage').src = imagelist[left];
        right--;
        left--;
    })

})();