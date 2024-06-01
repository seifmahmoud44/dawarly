const sellorrent = document.getElementById("sellorrent");
const sqf = document.getElementById("sqf");
const bedCount = document.getElementById("bed-count");
const roomCount = document.getElementById("room-count");
const placeCon = document.getElementById("place-con");
const cardsCon = document.getElementById("cards-con");

let data = [];

async function loadData() {
  const file =
    sellorrent.value === "rent"
      ? "../../assets/rent.json"
      : "../../assets/buy.json";
  const response = await fetch(file);
  data = await response.json();
  filterData();
  const uniqueAddresses = [...new Set(data.map((item) => item.address_egypt))];
  console.log(uniqueAddresses);
}

function filterData() {
  let filteredData = data;

  const area = parseInt(sqf.value) || 0;
  if (area) {
    filteredData = filteredData.filter((item) => item.Area >= area);
  }

  const bedrooms = parseInt(bedCount.value) || 0;
  if (bedrooms) {
    filteredData = filteredData.filter((item) => item.Bedrooms === bedrooms);
  }

  const bathrooms = parseInt(roomCount.value) || 0;
  if (bathrooms) {
    filteredData = filteredData.filter((item) => item.Bathrooms === bathrooms);
  }

  const address = placeCon.value;
  if (address) {
    filteredData = filteredData.filter(
      (item) => item.address_egypt === address
    );
  }

  displayResults(filteredData);
}

function displayResults(filteredData) {
  cardsCon.innerHTML = "";
  filteredData.forEach((property) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="../../../assets/card.png" alt="" />
      <div class="card-content">
        <div class="details">
          <p><i class="fa-solid fa-bed"></i> ${property.Bedrooms} bed</p>
          <p><i class="fa-solid fa-bath"></i> ${property.Bathrooms} bath</p>
          <p><i class="fa fa-compass"></i> ${property.Area} sq ft</p>
        </div>
        <p><i class="fa-solid fa-location-dot"></i> ${
          property.address_egypt
        }</p>
        <p>6th of October, Egypt</p>
        <p>$ ${property.rent || property.Price}</p>
        <button>More Details</button>
      </div>
    `;
    cardsCon.appendChild(card);
  });
}

sellorrent.addEventListener("change", loadData);
sqf.addEventListener("input", filterData);
bedCount.addEventListener("change", filterData);
roomCount.addEventListener("change", filterData);
placeCon.addEventListener("change", filterData);

// Load initial data
loadData();
