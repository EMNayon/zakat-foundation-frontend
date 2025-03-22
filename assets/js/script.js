//Gallery
document.addEventListener("DOMContentLoaded", function () {
let rotation = 0, zoomLevel = 1;
function rotateImage(degrees) { rotation += degrees; updateTransform(); }
function zoomImage(amount) { zoomLevel = Math.max(1, zoomLevel + amount); updateTransform(); }
function updateTransform() { document.getElementById('previewImage').style.transform = `rotate(${rotation}deg) scale(${zoomLevel})`; }
});

//about
document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".menu-item");
    let contents = document.querySelectorAll(".content");
    let borderIndicator = document.querySelector(".border-indicator");

    let firstItem = document.querySelector(".menu-item.active");
    borderIndicator.style.top = firstItem.offsetTop + "px";

    items.forEach(item => {
        item.addEventListener("click", function () {
            items.forEach(i => i.classList.remove("active"));
            this.classList.add("active");

            borderIndicator.style.top = this.offsetTop + "px";

            contents.forEach(c => c.classList.remove("show"));
            document.getElementById(this.dataset.target).classList.add("show");
        });
    });
});