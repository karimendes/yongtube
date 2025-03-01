document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query');

    const searchTermElement = document.getElementById('search-term');
    if (searchTermElement) {
        searchTermElement.textContent = searchQuery;
    }

    if (searchQuery) {
        document.title = `${searchQuery} - Yongtube`;
    } else {
        document.title = "Yongtube";
    }

    const videoItems = document.querySelectorAll('.videos');
    const noResultsMessage = this.getElementById('error');
    const footer = document.querySelector('.footer-container');

    function filterVideos() {
        if (!searchQuery) {
            videoItems.forEach(video => video.style.display = 'none'); 
            noResultsMessage.style.display = 'block'; 
            footer.classList.add('fixed');
            return;
        }

        let hasResults = false;

        videoItems.forEach(function(video) {
            const title = video.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchQuery.toLowerCase())) {
                video.style.display = '';
                hasResults = true;
            } else {
                video.style.display = 'none'; 
            }
        });

        if (!hasResults) {
            noResultsMessage.style.display = 'block';
            footer.classList.add('fixed');
        } else {
            noResultsMessage.style.display = 'none'; 
            footer.classList.remove('fixed');
        }

    }

    filterVideos();

    searchTermElement.value = "";
});
