let playBtn = document.querySelector("#discount-container .play-video");
let youtubeVideo = document.querySelector("#youtube-video");
let videoCloaseBtn = document.querySelector("#youtube-video .cloase-video");
let videoIframe = document.querySelector("#youtube-video iframe");

playBtn.addEventListener("click", ()=> {
    youtubeVideo.style.display = 'block';
    youtubeVideo.style.display = 'flex';
})

videoCloaseBtn.addEventListener("click", ()=> {
    youtubeVideo.style.display = 'none'
    videoIframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    videoIframe.src = videoIframe.src;
});


let submitBtn = document.querySelector("#submit");
let loader = document.querySelector("#submit .loader");
let success = document.querySelector(".success");
let form = document.querySelector("footer form");

let isFormSubmitted = false;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Check if form has already been submitted
    if (isFormSubmitted) {
        return;
    }

    // Set flag to indicate form submission
    isFormSubmitted = true;

    // Disable submit button
    submitBtn.disabled = true;

    // Display loader
    loader.style.display = 'block';

    // Simulate asynchronous form submission
    setTimeout(function() {
        // Hide loader after 2 seconds
        loader.style.display = 'none';

        // Display success message after loader is hidden
        success.style.display = 'block';

        // Reset form after 2 seconds
        setTimeout(function() {
            success.style.display = 'none';

            // Reset form and submission flag
            form.reset();
            isFormSubmitted = false;

            // Enable submit button
            submitBtn.disabled = false;
        }, 3000);
    }, 6000);
});





let menuBtn = document.querySelector("nav .menu");
let navList = document.querySelector("header .mob-nav");

menuBtn.addEventListener("click", function() {
    navList.classList.toggle("openmenu");
});
