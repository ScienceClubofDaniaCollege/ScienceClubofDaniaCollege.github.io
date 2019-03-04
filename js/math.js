// Start of NHA's JavaScript
var gsliderName = document.getElementById('slider-name');
var gsectionName = document.getElementById('section-name');
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
var sectionName = "Math";
var sliderName = "Mathematicians and Their Inventions";
var slideNames = [
                "Srinivasa Ramanujan",
                "Albert Einstein",
                "Pythagoras",
                "Carl Friedrich Gauss"
            ];

var slideImages = [
    "../img/math/srinivasa.png",
    "../img/math/einstein.png",
    "../img/math/pythagoras.png",
    "../img/math/gauss.png",
    ];
var slideURLs = [
    "https://en.wikipedia.org/wiki/Srinivasa_Ramanujan",
    "https://en.wikipedia.org/wiki/Albert_Einstein",
    "https://en.wikipedia.org/wiki/Pythagoras",
    "https://en.wikipedia.org/wiki/Carl_Friedrich_Gauss",
    ];
var slideDetails = ["Srinivasa Ramanujan FRS was an Indian mathematician who lived during the British Rule in India. Though he had almost no formal training in pure mathematics, he made substantial contributions to mathematical.",
                    "Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science.",
                    "Pythagoras of Samos was an ancient Ionian Greek philosopher and the eponymous founder of Pythagoreanism. His political and religious teachings were well known in Magna Graecia and influenced the philosophies of Plato.",
                    "Johann Carl Friedrich Gauss was a German mathematician and physicist who made significant contributions to many fields in mathematics and sciences.",
    ];

createSlide();

// function for displaying descriptionv
var desCollum = document.getElementById("description");
function showDes (){
//  desCollum.classList.add = "makevisible";
alert("It is not yet implemented.")
};
// End of NHA's JavaScript

// start of zahins javascript


// end of zahins javascript
