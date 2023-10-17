function performSearch() {
    var searchQuery = document.getElementById('book-search').value.toLowerCase();

    var bookItems = document.querySelectorAll('.book-item');

    bookItems.forEach(function(bookItem) {
        var bookTitle = bookItem.querySelector('.book-title').textContent.toLowerCase();

        if (bookTitle.includes(searchQuery)) {
            bookItem.style.display = 'block'; 
        } else {
            bookItem.style.display = 'none'; 
        }
    });
}

document.getElementById('search-button').addEventListener('click', performSearch);

document.getElementById('book-search').addEventListener('input', performSearch);
