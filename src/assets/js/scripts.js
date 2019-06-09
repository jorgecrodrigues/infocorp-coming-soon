import anime from "animejs";

const DOM = {};
DOM.intro = document.querySelector('.shape-wrap');
DOM.shape = DOM.intro.querySelector('svg.shape');
DOM.path = DOM.shape.querySelector('path');
// Set the SVG transform origin.
DOM.shape.style.transformOrigin = '50% 0%';

anime({
    targets: DOM.path,
    duration: 5000,
    easing: 'easeOutQuad',
    d: DOM.path.getAttribute('pathdata:id')
});