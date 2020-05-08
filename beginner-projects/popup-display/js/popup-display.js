$('#popup').modal('show')
    (function() {

        const buttons = document.querySelectorAll('.buttons');
        const items = document.querySelectorAll('.store-item');
        const searched = document.getElementById('search-item');

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


    })();