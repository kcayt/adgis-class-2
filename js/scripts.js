$('.book-cover').on('click', function(window.location = https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565180308l/45754985.jpg" style="width: 55vw; min-width: 330px) {
	// pull out the album cover url from the element's attributes
	var bookCoverUrl = $(this).attr('book-cover')
  // log the album cover url to the console
  console.log(bookCoverUrl)

  $('#Book-Covers-wp').empty()

  $('#Book-Covers-wp').css('background-image', `url(${bookCoverUrl})`)
})
