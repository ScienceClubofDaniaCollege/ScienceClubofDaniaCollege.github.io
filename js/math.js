// Start of NHA's JavaScript
const sliderNameContainer = document.getElementById('slider-name');
const slideContainer = document.getElementById('slide-container')

// function for creating slider
function createSlide(){
    sliderNameContainer.innerText = sliderName;
    let i, status;
    for (i = 0; slideNames.length > i; i++) {
        if (i == 0) status = ' active';
        else status='';
        let slide = `
			<!-- start of slide-${i+1} -->
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
			<!-- end of slide-${i+1} -->
            `         
            slideContainer.innerHTML += slide;
        }
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
    "../img/math/srinivasa.jpg",
    "../img/math/einstein.jpg",
    "../img/math/pythagoras.jpg",
    "../img/math/gauss.jpg",
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

// End of NHA's JavaScript

// start of zahins javascript
function showdes(){
var btn = document.getElementById('showbtn');
var forthcol = document.getElementsByClassName('des');
var table = document.getElementById('constant-table')

if(btn.innerText == 'Show Descriptions'){
    btn.innerText = 'Hide Descriptions';
    for (var i = 0; i < forthcol.length; i++){
      forthcol[i].classList.add('hide');
    }
    table.classList.add('table-responsive');
}

else{
    btn.innerText = 'Show Descriptions';
    for (var i = 0; i < forthcol.length; i++){
      forthcol[i].classList.remove('hide');
    }
    table.classList.remove('table-responsive');
}
}

// end of zahins javascript
