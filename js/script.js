(() => {
    const text = ' Hi, I\'m Himanshu, Fullstack Developer';
    parsedTextToArray = [...text];
    htmlString = '';
    parsedTextToArray.map((cur, index, arr) => {
        if (cur === ' ') {
            htmlString += `<br>`;
            return;
        }

        if (cur !== ' ' && arr[--index] === ' ') {
            htmlString += `<span>${cur}</span>`;
            return;
        }

        htmlString += `<span class="m-left">${cur}</span>`;
    });
    console.log(htmlString);
    document.querySelector('.main-info-section-text').innerHTML = htmlString;
})();

const spans = document.querySelectorAll('h1 span');
spans.forEach(span => span.addEventListener('mouseover', () => {
    span.classList.add('animated', 'rubberBand');
}));
spans.forEach(span => span.addEventListener('mouseout', () => {
    span.classList.remove('animated', 'rubberBand');
}));

const htmlBar = document.querySelector('.bar-html');
const angularBar = document.querySelector('.bar-angular');
const nodeBar = document.querySelector('.bar-node');
const dotnetBar = document.querySelector('.bar-dotnet');
const dbBar = document.querySelector('.bar-db');

var t1 = new TimelineLite();
t1.fromTo(htmlBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(90% - 6px)`, ease: Power4.easeOut });

var t2 = new TimelineLite();
t2.fromTo(angularBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(98% - 6px)`, ease: Power4.easeOut });

var t3 = new TimelineLite();
t3.fromTo(nodeBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(95% - 6px)`, ease: Power4.easeOut });

var t4 = new TimelineLite();
t4.fromTo(dotnetBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)`, ease: Power4.easeOut });

var t5 = new TimelineLite();
t5.fromTo(dbBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(78% - 6px)`, ease: Power4.easeOut });

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t1).addTo(controller);

const scene1 = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t2).addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t3).addTo(controller);

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t4).addTo(controller);

const scene4 = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
}).setTween(t5).addTo(controller);

const showRequiredCategory = (event) => {
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button');
    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active');
        }
    }

    event.classList.add('active');
    const getCategory = document.querySelector(`.category-${getId}`);
    const categories = document.querySelectorAll('div[class ^= "category-"]');
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory');
            categories[i].classList.remove('hideCategory');
        }
    }

    getCategory.classList.remove('hideCategory');
    getCategory.classList.add('showCategory');
}

const spanElementsToCopy = document.querySelectorAll(".contact ul li span");
console.log(spanElementsToCopy, 'span');

spanElementsToCopy.forEach((span) => {
    span.onclick = function () {
        document.execCommand("copy");
    }

    span.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", span.textContent);

            setInterval(() => {
                document.querySelector(".contact ul p").classList.add('hidden');
            }, 2000);
            document.querySelector(".contact ul p").classList.remove('hidden');
            console.log(event.clipboardData.getData("text"))
        }
    });
});



