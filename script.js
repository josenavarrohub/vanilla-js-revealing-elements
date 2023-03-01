'use strict';

/* Revealing Elements */

// Elements
const targetElements = document.querySelectorAll('.c-section:not(:first-child)');

// Callback
const revealTargetElement = (entries, observer) => {
    // Objects that represent the intersection changes that occurred.
    const entry = entries.at(0);

    // When the target element is intersecting, we remove the hidden class.
    if (!entry.isIntersecting) return; // Guard clause
    entry.target.classList.remove('c-section--hidden');

    // Stop observing the revealed target element (better performance)
    observer.unobserve(entry.target);

    // Debug
    console.clear();
    console.log('Target element:', entry.target.id);
    console.log('Intersection ratio:', entry.intersectionRatio.toFixed(2));
    console.log('Is intersecting?', entry.isIntersecting);
};

// Intersection observer object
const observer = new IntersectionObserver(revealTargetElement, { threshold: 0.6 });

// Target elements to be watched
targetElements.forEach(targetElement => {
    targetElement.classList.add('c-section--hidden');
    observer.observe(targetElement);
});
