const bio_sliderNameContainer = document.getElementById('bio-slider-name');
const bio_slideContainer = document.getElementById('bio-slide-container')

// function for creating slider
function createSlide(){
    bio_sliderNameContainer.innerText = sliderName;
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
            bio_slideContainer.innerHTML += slide;
        }
};

// input the information of your slider
var sliderName = "Biologist and Their Inventions";
var slideNames = [
                "Aristotle",
                "Antonie van Leeuwenhoek",
                "Robert Hooke",
                "Carl Linnaeus"
            ];

var slideImages = [
    "../img/biology/aristotle.jpg",
    "../img/biology/leeuwenhoek.jpg",
    "../img/biology/hooke.jpg",
    "../img/biology/linnaeus.jpg",
    
    ];
var wiki = "https://en.wikipedia.org/wiki/"
var slideURLs = [
    wiki+"Aristotle",
    wiki+"Antonie_van_Leeuwenhoek",
    wiki+"Robert_Hooke",
    wiki+"Carl_Linnaeus",
    ];
var slideDetails = ["Ancient Greek philosopher, Aristotle, is often not considered when it comes to great biological discoveries but his work on the classification of living things was revolutionary at the time. Referred to as the 'Ladder of Life', Aristotle's classification system was still in use up until the 19th century – that's a long time. Aristotle was the first to person to recognise the relationships between species and organise accordingly",
                    "Leeuwenhoek is well known for his contributions to microscopy, and how he applied this to the field of biology. He revolutionised a technique for creating powerful lenses, which some speculate were able to magnify up to 500 times. Leeuwenhoek used the microscopes to find out more about the living world – his discoveries include bacteria, the vacuole of the cell, and the banded pattern of muscle fibres.",
                    "Hooke was primarily a physics and chemistry specialist but his discovery of the cell has been monumentally impactful on the world of biology. Hooke had an extraordinary ability to manipulate microscopes, and when applying this ability to looking closely at a thin slice of cork observed empty spaces contained with walls - terming them cells. We now know that cells are the building blocks of all life.",
                    "A botanist, physician and zoologist all at the same time, Linnaeus came up with the system of naming, ranking, and classifying organisms that we still use today. It was his vast collection of specimens of plants, animals, and shells that lead to Linnaeus' coming up with a way of grouping and naming species. He separated all living things into 3 kingdoms; animals, plants and minerals, subdividing them into classes, then into orders and then finally into genera and species. You've heard of Homo sapiens right? Homo is the genus and sapiens the species – as you can see still very much in use today.",
    ];

createSlide();