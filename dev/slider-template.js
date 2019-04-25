const name_slideContainer = document.getElementById('slide-container')

// function for creating slider
function createSlide() {
    sliderNameContainer.innerText = sliderName;
    let i, status;
    for (i = 0; slideNames.length > i; i++) {
        if (i == 0) status = ' active';
        else status = '';
        let slide = `
			<!-- start of slide-${i + 1} -->
            <div class="carousel-item${status}">
                <div class="h4">
                    <h4 id="slide-1-name0">${slideNames[i]}</h4>
                    <br>
                    <h6>Click on the image to get details</h6>
                </div>
                <a id="slide-1-url" href="${slideURLs[i]}"><img id="slide-1-img" class="slider-photo w-40" src="${slideImages[i]}"></a>
                <div class="contant">
                    <h6 id="slide-1-name1">${slideNames[i]}</h6>
                    <br>
                    <p id="slide-1-dtls">${slideDetails[i]}</p>
                </div>
            </div>
			<!-- end of slide-${i + 1} -->
            `
        slideContainer.innerHTML += slide;
    }
};

// input the information of your slider
var slideNames = [
    "name1",
    "name2",
    "name3",
    "name4"
];

var slideImages = [
    "../img/uc.png",
    "../img/uc.png",
    "../img/uc.png",
    "../img/uc.png",

];
var wiki = "https://en.wikipedia.org/wiki/"
var slideURLs = [
    wiki + "link",
    wiki + "link",
    wiki + "link",
    wiki + "link",
];
var slideDetails = ["slide_description",
    "slide_description",
    "slide_description",
    "slide_description",
];

createSlide();