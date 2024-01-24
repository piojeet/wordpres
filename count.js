let countDisplay = document.querySelector(".count-box span");
let reloadFlagscount = false;
let animationStarted = false;

// Remove the topelementsAdded variable
window.addEventListener("load", function () {
    addTopElementClass2();
  });
  
  window.addEventListener("scroll", function () {
    addTopElementClass2();
  });

// Function to add 'topelement' class to elements with top position close to window height
function addTopElementClass2() {
  if (reloadFlagscount) {
    let elements = document.querySelectorAll('.right-up-in');
    elements.forEach((element) => {
      let elementTop = element.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;

      if (elementTop <= windowHeight * 0.90) {
        element.classList.add('rightelementsin');
        if (!animationStarted) {
          let count = 0;
          let interval = setInterval(function() {
            countDisplay.textContent = count.toFixed(1);
            count += 0.1;

            if (count > 4.7) {
              countDisplay.textContent = '4.7';
              clearInterval(interval);
            }
          }, 50);

          animationStarted = true;
        }
      }
    });   
  }
}

// Listen for scroll events
window.addEventListener('scroll', function () {
  addTopElementClass2(); // Call the function to check and add the class while scrolling
});
