var gsliderName = document.getElementById('slider-name');
var gsectionName = document.getElementById('section-name');
var gslidetemplate = document.getElementById('slidetemplate')
// selecting slide-1
var gslide1Name0 = document.getElementById('slide-1-name0');
var gslide1Name1 = document.getElementById('slide-1-name1');
var gslide1Img = document.getElementById('slide-1-img');
var gslide1Dtls = document.getElementById('slide-1-dtls');
var gslide1Url = document.getElementById('slide-1-url');
// selecting slide-2
var gslide2Name0 = document.getElementById('slide-2-name0');
var gslide2Name1 = document.getElementById('slide-2-name1');
var gslide2Img = document.getElementById('slide-2-img');
var gslide2Dtls = document.getElementById('slide-2-dtls');
var gslide2Url = document.getElementById('slide-2-url');
// selecting slide-3
var gslide3Name0 = document.getElementById('slide-3-name0');
var gslide3Name1 = document.getElementById('slide-3-name1');
var gslide3Img = document.getElementById('slide-3-img');
var gslide3Dtls = document.getElementById('slide-3-dtls');
var gslide3Url = document.getElementById('slide-3-url');
// selecting slide-4
var gslide4Name0 = document.getElementById('slide-4-name0');
var gslide4Name1 = document.getElementById('slide-4-name1');
var gslide4Img = document.getElementById('slide-4-img');
var gslide4Dtls = document.getElementById('slide-4-dtls');
var gslide4Url = document.getElementById('slide-4-url');


function createSlide(){
    gsectionName.innerText = sectionName;
    gsliderName.innerText = sliderName;
    // creating slide-1
    gslide1Name0.innerText = slideNames[0];
    gslide1Name1.innerText = slideNames[0];
    gslide1Dtls.innerText = slideDetails[0];
    gslide1Img.src = slideImages[0];
    gslide1Url.href = slideURLs[0];
    // creating slide-2
    gslide2Name0.innerText = slideNames[1];
    gslide2Name1.innerText = slideNames[1];
    gslide2Dtls.innerText = slideDetails[1];
    gslide2Img.src = slideImages[1];
    gslide2Url.href = slideURLs[1];
    // creating slide-3
    gslide3Name0.innerText = slideNames[2];
    gslide3Name1.innerText = slideNames[2];
    gslide3Dtls.innerText = slideDetails[2];
    gslide3Img.src = slideImages[2];
    gslide3Url.href = slideURLs[2];
    // creating slide-4
    gslide4Name0.innerText = slideNames[3];
    gslide4Name1.innerText = slideNames[3];
    gslide4Dtls.innerText = slideDetails[3];
    gslide4Img.src = slideImages[3];
    gslide4Url.href = slideURLs[3];
};

// input the information of your slider
var sectionName = "subject_name";
var sliderName = "slider_name";
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
    wiki+"link",
    wiki+"link",
    wiki+"link",
    wiki+"link",
    ];
var slideDetails = ["slide_description",
                    "slide_description",
                    "slide_description",
                    "slide_description",
    ];

createSlide();