let galleryContainer = document.querySelector("#gallery-container");

const createGallery = async (cat) => {
  let url;
  if (cat) {
    url = "https://dscapi.herokuapp.com/gallery?cat=" + cat;
  } else {
    url = "https://dscapi.herokuapp.com/gallery?cat";
  }

  galleryContainer.innerHTML = `<div id="loader" class="center"></div>`


  async function getGalleryImages() {
    const res = await fetch(url);
    galleryContainer.innerHTML='';
    return res.json();
  }
  let galleryImages = await getGalleryImages();
  console.log(galleryImages);
  if (galleryImages.length == 0) {
    galleryContainer.innerHTML = '<h3> No images yet</h3>'
    return;
  }
  for (let i = 0; i < galleryImages.length; i++) {

    galleryContainer.innerHTML += `
          <a href=${galleryImages[i].src} data-sub-html="<h4>${galleryImages[i].title}</h4><p>${galleryImages[i].description}</p>">
            <img class="mb-1 rounded border border-success" height="100px" src=${galleryImages[i].thumb} alt="${galleryImages[i].title}">
          </a>
        `;
  }

  lightGallery(galleryContainer, { thumbnail: true});
};
createGallery();
