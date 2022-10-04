// mobile menu function
const menu = document.getElementById('menu-bar')
const menuContainer = document.getElementById('mobile-menu')
let ishide = false;

menu.addEventListener('click', (e) => {
    ishide = !ishide;
    if (ishide) {
        menuContainer.style.display = 'none'
    } else {
        menuContainer.style.display = 'block'
    }
})

document.getElementById('body').addEventListener('click', () => {
    ishide = false;
    menuContainer.style.display = 'none'
})

// accordion functionality
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const defaultAccordion = accordionItemHeaders[0]
defaultAccordion.classList.add("active");
defaultAccordion.nextElementSibling.style.maxHeight = '200px';


const accordion = () => {
    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.classList.remove("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        accordionItemBody.style.maxHeight = 0;
    })
}

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordion()
        accordionItemHeader.classList.add("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});
// accordion functionality