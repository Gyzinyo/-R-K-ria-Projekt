// JavaScript Document
 document.addEventListener("DOMContentLoaded", function () {
        var animatedSections = document.querySelectorAll('.animate-on-scroll');
        var fadingHeaders = document.querySelectorAll('.fade-in-on-scroll');
        var fadeSlideUps = document.querySelectorAll('.fade-slide-up'); // New

        function isInViewport(el) {
            var rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }

        function checkAnimations() {
            // For sliding sections
            for (var i = 0; i < animatedSections.length; i++) {
                if (isInViewport(animatedSections[i])) {
                    var items = animatedSections[i].querySelectorAll('.slide-from-left, .slide-from-right, .fade-in-on-scroll');
                    for (var j = 0; j < items.length; j++) {
                        items[j].classList.add('in-view');
                    }
                }
            }

            // For standalone fade-in headers
            for (var k = 0; k < fadingHeaders.length; k++) {
                if (isInViewport(fadingHeaders[k])) {
                    fadingHeaders[k].classList.add('in-view');
                }
            }

            // For fade + slide up sections
            for (var l = 0; l < fadeSlideUps.length; l++) {
                if (isInViewport(fadeSlideUps[l])) {
                    fadeSlideUps[l].classList.add('in-view');
                }
            }
        }

        window.addEventListener('scroll', checkAnimations);
        window.addEventListener('load', checkAnimations);
    });
