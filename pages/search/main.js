let properties = [];

function fetchProperties() {
  fetch("../../assets/rent.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      properties = data; // Assign data to properties
      displayProperties(properties);
      placeSearch(data); // Display all properties initially
    })
    .catch((error) => console.error("Error fetching properties:", error));
}
let uniqueAddresses = [];
const placeSearch = (data) => {
  uniqueAddresses = [...new Set(data.map((item) => item.address_egypt))];
  console.log(uniqueAddresses);
};

function displayProperties(data) {
  const propertyList = document.querySelector(".cards-con");
  propertyList.innerHTML = "";

  data.forEach((property) => {
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
        <p><i class="fa-solid fa-location-dot"></i> ${property.address_egypt}</p>
        <p>6th of October,Egypt</p>
        <p>$ ${property.rent}</p>
        <button>More Details</button>
      </div>
    `;

    propertyList.appendChild(card);
  });
  const placeCon = document.getElementById("place-con");
  uniqueAddresses.forEach((ele) => {
    const place = document.createElement("option");
    place.innerHTML = `
    <option value=${ele}>${ele}</option>
    `;
    placeCon.appendChild(place);
  });
}

function filterProperties() {
  const bedroomsFilter = document.getElementById("bed-count").value;
  const bathroomsFilter = document.getElementById("room-count").value;
  // const priceFilter = document.getElementById("price-count").value;

  const filteredProperties = properties.filter((property) => {
    return (
      (bedroomsFilter === "" ||
        property.Bedrooms >= parseInt(bedroomsFilter)) &&
      (bathroomsFilter === "" ||
        property.Bathrooms >= parseInt(bathroomsFilter))
    );
  });

  displayProperties(filteredProperties);
}

// Call fetchProperties function to fetch data and display it initially
fetchProperties();

document.getElementById("bed-count").onchange = () => {
  filterProperties();
};
document.getElementById("room-count").onchange = () => {
  filterProperties();
};
// document.getElementById("price-count").onchange = () => {
//   filterProperties();
// };
