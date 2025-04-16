
// gallery zoom rotate
let rotation = 0, zoomLevel = 1;

function rotateImage(degrees) {
    rotation += degrees;
    updateTransform();
}

function zoomImage(amount) {
    zoomLevel = Math.max(1, zoomLevel + amount);
    updateTransform();
}

function updateTransform() {
    const carouselItems = document.querySelectorAll('.carousel-item img');
    carouselItems.forEach(item => {
        item.style.transform = `rotate(${rotation}deg) scale(${zoomLevel})`;
    });
}

//global virtical navbar border indicator
document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".menu-item");
    let contents = document.querySelectorAll(".content");
    let borderIndicator = document.querySelector(".border-indicator");
    let selectDropdown = document.querySelector(".sidebar select"); // Get the select dropdown

    // Check if borderIndicator exists before accessing its style
    if (borderIndicator) {
        let firstItem = document.querySelector(".menu-item.active");
        if (firstItem) {
            borderIndicator.style.top = firstItem.offsetTop + "px";
        }
    }

    // Function to update content based on the active item
    function updateContent(target) {
        items.forEach(i => i.classList.remove("active"));
        const selectedItem = Array.from(items).find(item => item.dataset.target === target);
        if (selectedItem) {
            selectedItem.classList.add("active");
            if (borderIndicator) {
                borderIndicator.style.top = selectedItem.offsetTop + "px";
            }
        }

        contents.forEach(c => c.classList.remove("show"));
        const selectedContent = document.getElementById(target);
        if (selectedContent) {
            selectedContent.classList.add("show");
        }
    }

    // Click event for menu items
    items.forEach(item => {
        item.addEventListener("click", function () {
            updateContent(this.dataset.target);
        });
    });

    // Change event for select dropdown (for small screens)
    if (selectDropdown) {
        // Trigger content change when dropdown value changes
        selectDropdown.addEventListener("change", function () {
            const targetContent = this.options[this.selectedIndex].dataset.target;
            updateContent(targetContent);
        });

        // Trigger content change on page load to match the default selected option
        const selectedOption = selectDropdown.querySelector("option:checked");
        if (selectedOption) {
            const targetContent = selectedOption.dataset.target;
            updateContent(targetContent);
        }
    }
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


  // Get the navbar element
  const navbar = document.getElementById('navbar');

  // Function to handle the scroll event
  window.onscroll = function() {
      if (window.pageYOffset > navbar.offsetTop) {
          navbar.style.position = 'fixed';
          navbar.style.backgroundColor = 'white'; 
          navbar.style.top = '0';
          navbar.style.left = '0';
          navbar.style.right = '0';
          navbar.style.zIndex = '1050'; 
      } else {
          navbar.style.position = 'relative';
          navbar.style.top = 'auto';
          navbar.style.left = 'auto';
          navbar.style.right = 'auto';
      }
  };

// navbar border bottom
const navItems = document.querySelectorAll('.nav-item a');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(i => i.classList.remove('active')); // Remove from all
      item.classList.add('active'); // Add to clicked one
    });
  });
  
