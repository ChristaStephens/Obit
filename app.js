function splitScroll() {
    //creates different scenes that we want to control and animate,
    //we can hook it up to the controller.
    //Handles all the scrolls on the page.
    const controller = new ScrollMagic.Controller();

    //duration is in pixels and trigger is what will trigger our scrolling
    //we want the about title to trigger our scroll
    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        //sets the start of the scroll effect to start in the middle
        triggerHook: 0
    })
    //as soon as we hit the about title the title will pop up
    .setPin('.about-title')
    //adds triggers to page and show's where it will start scrolling effect

        //starts every thing
        .addTo(controller);

}
splitScroll();
