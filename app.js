function splitScroll() {
    //creates different scenes that we want to control and animate,
    //we can hook it up to the controller.
    //Handles all the scrolls on the page.
    const controller = new ScrollMagic.Controller();

    //duration is in pixels and trigger is what will trigger our scrolling
    //we want the about title to trigger our scroll
    new ScrollMagic.Scene({
        duration: 500,
        triggerElement: '.about-title'
    })
        .addIndicators()
        .addTo(controller);

}
splitScroll();
