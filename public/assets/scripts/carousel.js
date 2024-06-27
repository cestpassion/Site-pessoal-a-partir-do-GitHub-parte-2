function carregarCarousel() {
    fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(data => {
            const centroCarousel = document.getElementById('centro_carousel');

            const carouselInner = document.createElement('div');
            carouselInner.className = 'carousel-inner';

            const carouselIndicators = document.createElement('div');
            carouselIndicators.className = 'carousel-indicators';

            data.items.forEach((item, index) => {
                console.log('test');
                const indicator = document.createElement('button');
                indicator.type = 'button';
                indicator.dataset.bsTarget = '#carouselExampleCaptions';
                indicator.dataset.bsSlideTo = index;
                indicator.className = index === 0 ? 'active' : '';
                indicator.ariaLabel = `Slide ${index + 1}`;
                if (index === 0) {
                    indicator.ariaCurrent = 'true';
                }
                carouselIndicators.appendChild(indicator);

                const carouselItem = document.createElement('div');
                carouselItem.className = index === 0 ? 'carousel-item active' : 'carousel-item';

                const link = document.createElement('a');
                link.href = item.url;
                link.target = '_blank';

                const img = document.createElement('img');
                img.src = item.imgSrc;
                img.className = 'carousel_imagem';
                img.alt = item.altText;
                img.width = 560;
                img.height = 560;

                link.appendChild(img);
                carouselItem.appendChild(link);
                carouselInner.appendChild(carouselItem);
            });

            const carousel = document.createElement('div');
            carousel.id = 'carouselExampleCaptions';
            carousel.className = 'carousel slide';
            carousel.dataset.bsRide = 'carousel';
            carousel.appendChild(carouselIndicators);
            carousel.appendChild(carouselInner);

            const prevButton = document.createElement('button');
            prevButton.className = 'carousel-control-prev';
            prevButton.type = 'button';
            prevButton.dataset.bsTarget = '#carouselExampleCaptions';
            prevButton.dataset.bsSlide = 'prev';
            prevButton.innerHTML = `
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            `;
            carousel.appendChild(prevButton);

            const nextButton = document.createElement('button');
            nextButton.className = 'carousel-control-next';
            nextButton.type = 'button';
            nextButton.dataset.bsTarget = '#carouselExampleCaptions';
            nextButton.dataset.bsSlide = 'next';
            nextButton.innerHTML = `
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            `;
            carousel.appendChild(nextButton);

            centroCarousel.appendChild(carousel);
        })
        .catch(error => {
        });
}

carregarCarousel();
