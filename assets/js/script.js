//Gallery
// dynamically change preivew image in modal
document.addEventListener("DOMContentLoaded", function () {
    const modalImage = document.getElementById("previewImage");
    const previewCards = document.querySelectorAll("[data-bs-toggle='modal']");

    previewCards.forEach(card => {
        card.addEventListener("click", function () {
            const imageSrc = this.querySelector("img").getAttribute("src"); 
            modalImage.setAttribute("src", imageSrc); 
        });
    });
});
// perform image rotation and zooming
let rotation = 0, zoomLevel = 1;
function rotateImage(degrees) { rotation += degrees; updateTransform(); }
function zoomImage(amount) { zoomLevel = Math.max(1, zoomLevel + amount); updateTransform(); }
function updateTransform() {
    document.getElementById("previewImage").style.transform = `rotate(${rotation}deg) scale(${zoomLevel})`;
}


//global virtical navbar border indicator
document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".menu-item");
    let contents = document.querySelectorAll(".content");
    let borderIndicator = document.querySelector(".border-indicator");

    // Check if borderIndicator exists before accessing its style
    if (borderIndicator) {
        let firstItem = document.querySelector(".menu-item.active");
        if (firstItem) {
            borderIndicator.style.top = firstItem.offsetTop + "px";
        }
    }

    items.forEach(item => {
        item.addEventListener("click", function () {
            items.forEach(i => i.classList.remove("active"));
            this.classList.add("active");

            if (borderIndicator) {
                borderIndicator.style.top = this.offsetTop + "px";
            }

            contents.forEach(c => c.classList.remove("show"));
            document.getElementById(this.dataset.target).classList.add("show");
        });
    });
});



//Donation payment 
function toggleForm(type) {
    document.getElementById("daily-form").classList.toggle("hidden", type !== 'daily');
    document.getElementById("monthly-form").classList.toggle("hidden", type !== 'monthly');
    
    document.getElementById("daily-btn").classList.toggle("active", type === 'daily');
    document.getElementById("monthly-btn").classList.toggle("active", type === 'monthly');
}

// Handle Amount Selection
    document.querySelectorAll(".amount-btn").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("amount-input").value = this.dataset.value;
        });
    });

// Handle Amount Input
function selectamount(id) {
    document.querySelectorAll(".amount-btn").forEach(option => {
        option.classList.remove("active");
    });
    document.querySelector(`[onclick="selectamount('${id}')"]`).classList.add("active");
    document.getElementById(id).checked = true;
}

// Handle Payment Gateway Selection
function selectPayment(id) {
    document.querySelectorAll(".payment-option").forEach(option => {
        option.classList.remove("active");
    });
    document.querySelector(`[onclick="selectPayment('${id}')"]`).classList.add("active");
    document.getElementById(id).checked = true;
}