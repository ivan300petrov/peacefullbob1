"use strict";
var slideIndex = 1;
var rightArrow = document.querySelector(".arrow-right");
var leftArrow = document.querySelector(".arrow-left");
var slidesVideo = document.querySelectorAll(".slide");
var width = screen.width; // ширина
var height = screen.height; // высота
console.log(width, height);
var eventTouchStart = width >= 1366 ? "mousedown" : "touchstart";
var eventTouchEnd = width >= 1366 ? "mouseup" : "touchend";
var eventTouchMove = width >= 1366 ? "mousemove" : "touchmove";


var galleryItems = document.querySelectorAll(".gallery-link");
var galleryItemsArray = [];
var galleryPopup = document.querySelector(".gallery-popup");
var gallerySlider = document.querySelector(".gallery-slider");

var galleryPopupImageCenter = galleryPopup.querySelector(".image_center");
var galleryPopupImageLeft = galleryPopup.querySelector(".image_left");
var galleryPopupImageRight = galleryPopup.querySelector(".image_right");
var closeGalleryPopup = galleryPopup.querySelector(".close-button");
var rightArrowGallery = document.querySelector("#arrow-left-gallery");
var leftArrowGallery = document.querySelector("#arrow-right-gallery");
var startX = 0;
var moveX = 0;
var mouseMoves = false;
var indexLeft = 0;
var indexRight = 0;
/*
function showSlidesPhoto(n, slidesArray, galleryPopupPhoto) {
   var slideIndexLeft = (n === 0 ? galleryItems.length - 1 : n===-1 ? galleryItems.length - 2:n-1);
   var slideIndexCenter = (n === -1 ? galleryItems.length -1 : n===galleryItems.length ? 0 : n);
   var slideIndexRight = (n === galleryItems.length -1 ? 0 : n===galleryItems.length ? 1: n +1);

slideIndex = slideIndexCenter;
  console.log('n=', n,"slideIndexLeft=", slideIndexLeft, 'slideIndexCenter=', slideIndexCenter, 'slideIndexRight=', slideIndexRight);

    if (n > slidesArray.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesArray.length-1;
    }
var slideIndexReft =0;

   // for (i = 0; i < slidesArray.length; i++) {
   //     galleryPopupPhoto.src = slidesArray[i].href;
   // }
   console.log("slidesArray=", slidesArray, 'n=', n, 'slideIndex=', slideIndex);
    
    galleryPopupImageLeft.src = slidesArray[slideIndexLeft].href;
    galleryPopupImageCenter.src = slidesArray[slideIndexCenter].href;

    galleryPopupImageRight.src = slidesArray[slideIndexRight].href;
}

function showSlides(n, slidesArray) {
    
}

for (var i = 0; i < galleryItems.length; i++) {
galleryItemsArray[i] = galleryItems[i].innerHTML;
	}
*/


for (var i = 0; i < galleryItems.length; i++) {
	//console.log( 'i=', i);
	indexLeft = i === 0 ? galleryItems.length - 1 : i-1;
	indexRight = i === galleryItems.length ? 0 : i;

	//console.log( 'indexLeft=', indexLeft,  'indexRight=', indexRight);
    galleryItemsArray[i] = galleryItems[i].innerHTML;
    galleryItems[i].addEventListener("click", function showPhoto(e) {
        e.preventDefault();

        galleryPopup.style.display = "flex";

       // console.log("galleryItemsArray=", galleryItemsArray, 'i=', i, 'galleryItemsArray[i]=', galleryItemsArray[i]);
        /*
        galleryPopupImageCenter.src = this.href;
        galleryPopupImageLeft.src = galleryItemsArray[indexLeft].href;
        galleryPopupImageRight.src = galleryItemsArray[indexRight].href;
    
        //слик--------------------------------
        
         galleryPopupImageCenter.addEventListener(eventTouchMove, function(e) {
            e.preventDefault();
            moveX = width >= 1366 ? e.clientX : e.changedTouches[0].clientX;
if (mouseMoves) {
	galleryPopupImageLeft.style.transform = `translateX(${(moveX - startX)/2 + 'px'})`;
galleryPopupImageLeft.style.animation = '';

	galleryPopupImageCenter.style.transform = `translateX(${(moveX - startX)/2 + 'px'})`;
galleryPopupImageCenter.style.animation = '';

	galleryPopupImageRight.style.transform = `translateX(${(moveX - startX)/2 + 'px'})`;
galleryPopupImageRight.style.animation = '';
}
            console.log("moveX=", moveX, startX);
        });
         galleryPopupImageCenter
*/


         gallerySlider.addEventListener(eventTouchStart, function(e) {

            e.preventDefault();
mouseMoves = true;
            startX = width >= 1366 ? e.clientX : e.changedTouches[0].clientX;
        });

gallerySlider.addEventListener(eventTouchMove, function(e) {
e.preventDefault();
mouseMoves = true;
            moveX = width >= 1366 ? e.clientX : e.changedTouches[0].clientX;
if(startX !== 0){


    gallerySlider.scrollBy({top :   (moveX>startX? -(moveX-startX)  :(startX - moveX))  , left : 0, behavior: 'smooth'});
console.log("move mouse=", (moveX>startX? -(moveX-startX)  :(startX - moveX)));

            console.log("startX=", startX);
        }
        });

        gallerySlider.addEventListener(eventTouchEnd, function(e) {
            e.preventDefault();
            mouseMoves = false;
            var endX = width >= 1366 ? e.clientX : e.changedTouches[0].clientX,
                deltaX = endX - startX;

            console.log("moveXdeltaX=", deltaX);
            if (deltaX > 50) {
                
    gallerySlider.scrollBy({top :  (moveX>startX? -800  :800), left : 0, behavior: 'smooth'});
            
            console.log("moveto right=", (moveX>startX? -800  :800));
            } else if (deltaX < -50) {
                
    gallerySlider.scrollBy({top :  (moveX>startX? -800  :800)  , left : 0, behavior: 'smooth'});
              console.log("moveto left=", (moveX>startX? -800  :800));
            }else {

            console.log("moveback=", deltaX);
                   
                    console.log("move back=", (moveX>startX? -(moveX-startX)  :-(startX - moveX)) );
    gallerySlider.scrollBy({top :  (moveX>startX? -(moveX-startX)  :-(startX - moveX))  , left : 0, behavior: 'smooth'});
                }

startX = 0;

            console.log("New startX=", startX);
            //console.log("style=",  galleryPopupImageCenter.style.animation);
            //console.log("style=",  galleryPopupImageCenter.style.transform);
        });
        
        // -------------------------------------
    

i = i > galleryItems? galleryItems: i;


});
}
function closeWindow(obj, window) {
    obj.addEventListener("click", function close(e) {
        e.preventDefault();
        window.style.display = "none";
        body.classList.remove("no-scroll");
        menuBG.style.display = "none";
    });
}

document.addEventListener("keydown", function(e) {
    e.preventDefault();
    if (e.keyCode === 27) {
        galleryPopup.style.display = "none";
    }
});

closeWindow(closeGalleryPopup, galleryPopup);

rightArrowGallery.addEventListener("click", function plusSlide() {
    //showSlidesPhoto((slideIndex += 1), galleryItems, galleryPopupImageRight);
    gallerySlider.scrollBy({top : -800, left : 0, behavior: 'smooth'});

            console.log("window.pageYOffset=", window.pageYOffset);
});
leftArrowGallery.addEventListener("click", function minusSlide() {
    gallerySlider.scrollBy({top :800, left : 0, behavior: 'smooth'});

            console.log("window.pageXOffset=", window.pageXOffset);
    //showSlidesPhoto((slideIndex -= 1), galleryItems, galleryPopupImageLeft);
});
function currentSlide(n) {
    showSlidesPhoto((slideIndex = n), galleryItems, galleryPopupImage);
}