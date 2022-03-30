async function getData() {
  let fetchData = await fetch("https://api.disneyapi.dev/characters");
  let responseData = await fetchData.json();
  let data = await responseData.data;
  console.log(typeof data[0].tvShows);

  for (let i = 0; i < data.length; i++) {
    let cardContainer = document.getElementById("cardcontainer");
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "col-lg-3");
    cardDiv.innerHTML = `
          <div class="card position-relative" style="width: 18rem; height: 60vh">
            <img src=${
              data[i].imageUrl
            } class="card-img-top character-img" style="height:275px"alt="..." />
            <div class="card-body">
              <h5 class="card-title">${data[i].name}</h5>
              ${
                data[i].tvShows.length === 0
                  ? `<p class="card-text">No TV Shows
              </p>`
                  : `<p class="card-text">${data[i].tvShows}
              </p>`
              }
              
              <a href="#" class="btn btn-primary position-absolute" style="bottom: 15px">More Details</a>
            </div>
          </div>
  `;
    cardContainer.append(cardDiv);
  }
}
getData();
