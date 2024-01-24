// Remove the topelementsAdded variable
window.addEventListener("load", function () {
    addTopElementClass();
});

window.addEventListener("scroll", function () {
    addTopElementClass();
});

function addTopElementClass() {
    let elements = document.querySelectorAll(".right-up");
    elements.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.9 && elementTop >= 10) {
            element.classList.add("rightelements");
        }
    });

    let elementst = document.querySelectorAll(".bottom-up");
    elementst.forEach((element, index) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            // आवर्ती दिखने में देरी लागू करने के लिए इंडेक्स के आधार पर एक देरी जोड़ें
            setTimeout(() => {
                element.classList.add("bottomelements");
            }, index * 500); // देरी की अवधि को समायोजित करें (यहां, यह 1000 मिलीसेकंड या 1 सेकंड है)
        }
    });

    let elementstf = document.querySelectorAll(".left-up-in");
    elementstf.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.9 && elementTop >= 10) {
            element.classList.add("leftelementsin");
        }
    });

    let elementstey = document.querySelectorAll(".right-up-in");
    let animationStarted = false;

    elementstey.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.9 && elementTop >= 10 && !element.classList.contains("rightelementsin")) {
            element.classList.add("rightelementsin");

            let countDisplay = document.querySelector(".count-box span");
            let reloadFlagscount = false;

            if (elementTop <= windowHeight * 0.90 && !animationStarted && !reloadFlagscount) {
                element.classList.add('rightelementsin');
                let count = 0;
                let interval = setInterval(function () {
                    if (!animationStarted) {
                        countDisplay.textContent = count.toFixed(1);
                        count += 0.1;

                        if (count > 4.7) {
                            countDisplay.textContent = '4.7';
                            clearInterval(interval);
                            animationStarted = true; // एनीमेशन पूरी होने पर फ़्लैग को रीसेट करें
                        }
                    }
                }, 50);
            }
        }
    });

    let elementstfe = document.querySelectorAll(".right-in");
    elementstfe.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            element.classList.add("rightelementsins");
        }
    });

    let elementstfex = document.querySelectorAll(".bottomup");
    elementstfex.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            element.classList.add("bottomupelementsins");
        }
    });




    let elementstey1 = document.querySelectorAll(".bottom-in-ani");
    let animationStarted1 = false;
    
    elementstey1.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        if (elementTop <= windowHeight * 0.99 && elementTop >= 10 && !element.classList.contains("elementsinbottom")) {
            element.classList.add("elementsinbottom");
    
            let countDisplay = document.querySelector(".loop14");
    
            if (elementTop <= windowHeight * 0.99 && !animationStarted1) {
                element.classList.add('elementsinbottom');
                let count = 0;
                let interval = setInterval(function () {
                    if (!animationStarted1) {
                        countDisplay.textContent = Math.round(count).toString(); // Use Math.round to round the count
                        count += 0.1; // Change this line to increase the count value
    
                        if (count > 14) {
                            countDisplay.textContent = '14';
                            clearInterval(interval);
                            animationStarted1 = true; // Reset the flag on animation completion
                        }
                    }
                }, 20);
            }
        }
    });


    
    let elementstey2 = document.querySelectorAll(".bottom-in-ani2");
    let animationStarted2 = false;
    
    elementstey2.forEach((element2) => {
        let elementTop = element2.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        if (elementTop <= windowHeight * 0.99 && elementTop >= 10 && !element2.classList.contains("elementsinbottom")) {
            element2.classList.add("elementsinbottom");
    
            let countDisplay = document.querySelector(".loop4");
    
            if (elementTop <= windowHeight * 0.99 && !animationStarted2) {
                element2.classList.add('elementsinbottom');
                let count = 0;
                let interval = setInterval(function () {
                    if (!animationStarted2) {
                        countDisplay.textContent = Math.round(count).toString(); // Use Math.round to round the count
                        count += 0.1; // Increment count by 0.1 in each interval
    
                        if (count > 4) {
                            countDisplay.textContent = '4';
                            clearInterval(interval);
                            animationStarted2 = true; // Reset the flag on animation completion
                        }
                    }
                }, 80);
            }
        }
    });
    

    let elementstey3 = document.querySelectorAll(".bottom-in-ani3");
    let animationStarted3 = false;
    
    elementstey3.forEach((element2) => {
        let elementTop = element2.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        if (elementTop <= windowHeight * 0.99 && elementTop >= 10 && !element2.classList.contains("elementsinbottom")) {
            element2.classList.add("elementsinbottom");
    
            let countDisplay = document.querySelector(".loop25");
    
            if (elementTop <= windowHeight * 0.99 && !animationStarted3) {
                element2.classList.add('elementsinbottom');
                let count = 0;
                let interval = setInterval(function () {
                    if (!animationStarted3) {
                        countDisplay.textContent = Math.round(count).toString(); // Use Math.round to round the count
                        count += 0.1; // Increment count by 0.1 in each interval
    
                        if (count > 25) {
                            countDisplay.textContent = '25';
                            clearInterval(interval);
                            animationStarted3 = true; // Reset the flag on animation completion
                        }
                    }
                }, 10);
            }
        }
    });
    
    let elementstey4 = document.querySelectorAll(".bottom-in-ani4");
    let animationStarted4 = false;
    
    elementstey4.forEach((element2) => {
        let elementTop = element2.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        if (elementTop <= windowHeight * 0.99 && elementTop >= 10 && !element2.classList.contains("elementsinbottom")) {
            element2.classList.add("elementsinbottom");
    
            let countDisplay = document.querySelector(".loop10");
    
            if (elementTop <= windowHeight * 0.99 && !animationStarted4) {
                element2.classList.add('elementsinbottom');
                let count = 0;
                let interval = setInterval(function () {
                    if (!animationStarted4) {
                        countDisplay.textContent = Math.round(count).toString(); // Use Math.round to round the count
                        count += 0.1; // Increment count by 0.1 in each interval
    
                        if (count > 10) {
                            countDisplay.textContent = '10';
                            clearInterval(interval);
                            animationStarted4 = true; // Reset the flag on animation completion
                        }
                    }
                }, 22);
            }
        }
    });
    
    
    

    let elementstxx = document.querySelectorAll(".mejor-flex");
    elementstxx.forEach((element, index) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            // आवर्ती दिखने में देरी लागू करने के लिए इंडेक्स के आधार पर एक देरी जोड़ें
            setTimeout(() => {
                element.classList.add("mejorflexmelements");
            }, index * 500); // देरी की अवधि को समायोजित करें (यहां, यह 1000 मिलीसेकंड या 1 सेकंड है)
        }
    });

    let elementstfet = document.querySelectorAll(".right-in");
    elementstfet.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            element.classList.add("rightelementsins");
        }
    });

    let elementstxxd = document.querySelectorAll(".bottomelementsd");
    elementstxxd.forEach((element, index) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            // आवर्ती दिखने में देरी लागू करने के लिए इंडेक्स के आधार पर एक देरी जोड़ें
            setTimeout(() => {
                element.classList.add("bottomelementsdelements");
            }, index * 300); // देरी की अवधि को समायोजित करें (यहां, यह 1000 मिलीसेकंड या 1 सेकंड है)
        }
    });

    let elementstfetr = document.querySelectorAll(".right-coast");
    elementstfetr.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            element.classList.add("coasrelementsins");
        }
    });
    

    let elementstfetrl = document.querySelectorAll(".left-coast");
    elementstfetrl.forEach((element) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            element.classList.add("coaslelementsins");
        }
    });
    
    
    let elementstxxs = document.querySelectorAll(".leftelementsd");
    elementstxxs.forEach((element, index) => {
        let elementTop = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        
        if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
            // आवर्ती दिखने में देरी लागू करने के लिए इंडेक्स के आधार पर एक देरी जोड़ें
            setTimeout(() => {
                element.classList.add("leftelementsdelements");
            }, index * 300); // देरी की अवधि को समायोजित करें (यहां, यह 1000 मिलीसेकंड या 1 सेकंड है)
        }
    });
    
        let elementstfetl = document.querySelectorAll(".bottomupin");
        elementstfetl.forEach((element) => {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
    
            if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
                element.classList.add("bottomupinelementsins");
            }
        });


        let elementstfeop = document.querySelectorAll(".allop");
        elementstfeop.forEach((element) => {
            let elementTop = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
    
            if (elementTop <= windowHeight * 0.99 && elementTop >= 10) {
                element.classList.add("allopelementsins");
            }
        });

    // Add this event listener to stop updating countDisplay on subsequent scrolls
    window.removeEventListener('scroll', addTopElementClass); // Remove the scroll event listener
}
