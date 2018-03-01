//Portfolio filter - MixItUp plugin code
 var containerEl = document.querySelector('.portfolio-list');
    
    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
        },
        load: {
            filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
        }
    });

    // Add a class to the container to remove 'visibility: hidden;' from targets. This
    // prevents any flickr of content before the page's JavaScript has loaded.
    containerEl.classList.add('mixitup-ready');

        // Show all targets in the container
        mixer.show()
            .then(function(){

                // Remove the stagger effect for any subsequent operations
                mixer.configure({
                    animation: {
                        effects: 'fade scale'
                    }
                });
            });

// making sticky header >> shrinking sticky header
var parallax = '.parallax-wrapper';
var header = '.header-wrapper';
var shrinking = 'top-header-shrinking';

$(parallax).on('scroll', function () {
    $(header).toggleClass(shrinking, $(parallax).scrollTop() > 0);
});

// making burger menu for mobile
var mobileMenu = '.mobile-menu';
var topNav = '.top-nav';
var burger = '.mobile-burger';

$(mobileMenu).click(function(){
    $(topNav).toggleClass('mobile-nav'); 
    $(burger).toggleClass('mobile-menu-cross');     
});