document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const files = event.target.files;
    const imageContainer = document.getElementById("imageContainer");

    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageItem = document.createElement("div");
        imageItem.classList.add("imageItem");

        const img = document.createElement("img");
        img.src = e.target.result;

        const span = document.createElement("span");
        span.innerText = "X";
        span.onclick = function () {
          imageContainer.removeChild(imageItem);
        };

        imageItem.appendChild(img);
        imageItem.appendChild(span);
        imageContainer.appendChild(imageItem);
      };

      reader.readAsDataURL(file);
    });
  });
