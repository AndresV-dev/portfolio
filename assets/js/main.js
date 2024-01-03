function scrollToElement(elementSelector, instance = 0){
    //select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector)
    // check if there are elements match in the selector and if the requested instanse existe
    if(elements.length >instance){
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth'})
    }
}

const proyects = document.getElementById("proyects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const home = document.getElementById("home");

home.addEventListener('click', () => {
    console.log(home)
    scrollToElement('.navbar');
})

proyects.addEventListener('click', () => {
    scrollToElement('.header');
})

about.addEventListener('click', () => {
    // Scrolls to the second element with "header" class
    scrollToElement('.header', 1);
}) 

contact.addEventListener('click', () => {
    scrollToElement('.header', 2);
}) 

contact.addEventListener('click', () => {
    scrollToElement('.navbar');
}) 