const results = document.querySelector('.people'),
  imageContainer = document.getElementById('image-container'),
  goBackButton = document.getElementById('go-back'),
  handleDefaultImages = async () => {
    try {
      const e = await fetch(
          'https://akabab.github.io/starwars-api/api/all.json'
        ),
        t = await e.json();
      (await t.slice(0, 10)).forEach(({ image: e }, t) => {
        const a = document.createElement('img');
        (a.src = e),
          (a.alt = 'Image'),
          (a.id = `${t}`),
          imageContainer.appendChild(a);
      }),
        document.querySelectorAll('img').forEach((e) => {
          e.addEventListener('click', function () {
            let e = this.getAttribute('id'),
              t = this.getAttribute('src');
            (e = Number(e) + 1), getPeopleDetails(e, t);
          });
        });
    } catch (e) {
      console.log(e);
    }
  };
handleDefaultImages();
const getPeopleDetails = async (e, t) => {
    try {
      const a = await fetch(`https://swapi.dev/api/people/${e}/`),
        n = await a.json();
      displayResults(n, t);
    } catch (e) {
      console.log(e);
    }
  },
  displayResults = (e, t) => {
    imageContainer.disabled = !0;
    let a = '';
    (a = `\n        <div>\n        <img src=${t} alt="" >\n        <div class="desc-box">\n          <p class=single-person">Name' :  ${e.name}</p>\n          <p class=single-person"> Gender :  ${e.gender}</p>\n          <button  id="reload-button" class="btn">Go back</button>\n        </div>\n        </div>\n        `),
      (results.innerHTML = a);
  };
//# sourceMappingURL=index.2ece6dfc.js.map
