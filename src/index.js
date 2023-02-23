const results = document.querySelector('.people');
const imageContainer = document.getElementById('image-container');
const goBackButton = document.getElementById('go-back');

const handleDefaultImages = async () => {
  try {
    const res = await fetch(
      `https://akabab.github.io/starwars-api/api/all.json`
    );
    const tempData = await res.json();
    const data = await tempData.slice(0, 10);
    data.forEach(({ image }, index) => {
      const img = document.createElement('img');
      img.src = image;
      img.alt = 'Image';
      img.id = `${index}`;
      imageContainer.appendChild(img);
    });
    let images = document.querySelectorAll('img');
    images.forEach((image) => {
      image.addEventListener('click', function () {
        let imageId = this.getAttribute('id');
        let imageUrl = this.getAttribute('src');
        imageId = Number(imageId) + 1;
        getPeopleDetails(imageId, imageUrl);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

handleDefaultImages();

const getPeopleDetails = async (imageId, imageUrl) => {
  try {
    const res = await fetch(`https://swapi.dev/api/people/${imageId}/`);
    const data = await res.json();
    displayResults(data, imageUrl);
  } catch (error) {
    console.log(error);
  }
};

const displayResults = (data, imageUrl) => {
  imageContainer.disabled = true;
  let output = '';
  output = `
        <div>
        <img src=${imageUrl} alt="" >
        <div class="desc-box">
          <p class=single-person">Name' :  ${data.name}</p>
          <p class=single-person"> Gender :  ${data.gender}</p>
          <p class=single-person"> Gender :  ${data.height}</p>
          <button  id="reload-button" class="btn">Go back</button>
        </div>
        </div>
        `;
  results.innerHTML = output;
};
