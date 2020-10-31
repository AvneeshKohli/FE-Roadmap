//const wrappers = document.querySelector('.wrapper-odd');
const wrappers = document.querySelectorAll('.wrapper-odd')
const wrappersEven = document.querySelectorAll('.wrapper-even')
const options = {
    root: null,
    threshold: 0.25,
    rootMargin: "-150px 0px -150px 0px"
};

const observer = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        console.log(entry.target);
        entry.target.classList.add("bring-into-view")
        observer.unobserve(entry.target)
    })
}, options);
wrappersEven.forEach(wrapper => {
    observer.observe(wrapper)
})
wrappers.forEach(wrapper => {
    observer.observe(wrapper);
})



window.onload = function settingView() {
    window.scrollTo(0,0)
}