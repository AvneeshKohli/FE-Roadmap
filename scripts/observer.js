//const wrappers = document.querySelector('.wrapper-odd');
const wrappers = document.querySelectorAll('.main-topic-left')
const wrappersEven = document.querySelectorAll('.main-topic-right')
const topicContent = document.querySelectorAll('.topic-name')
const img = document.querySelectorAll('.img-bg')
const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "-75px 0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        if (entry.target.tagName === "IMG") {

            entry.target.classList.add("image-in-view")
            console.log('image in view')
        } else { 
            entry.target.classList.add("bring-into-view") 
        }
        observer.unobserve(entry.target)
    })
}, options);
wrappersEven.forEach(wrapper => {
    observer.observe(wrapper)
})
wrappers.forEach(wrapper => {
    observer.observe(wrapper);
})
topicContent.forEach(wrapper => {
    observer.observe(wrapper);
})

img.forEach(wrapper => {
    observer.observe(wrapper);
})
