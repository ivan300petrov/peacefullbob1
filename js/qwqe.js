var galleryItemsArray = [];
var galleryItems = document.querySelectorAll(".gallery-item");

for (var i = 0; i < galleryItems.length; i++) {
	galleryItemsArray[i] = galleryItems[i].innerHTML;
	galleryItems[i].addEventListener("click", function showPhoto(e) {
		e.preventDefault();
		$(".variable").slick({
			dots: false
			//infinite: true,
			//	slidesToShow: 1,
			//slidesToScroll: 1
		});
		//  galleryPopup.style.display = 'flex';
		//galleryPopupImage.src = this.href;
	});
}

$(".single-item").slick();
