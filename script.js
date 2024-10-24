//   crawsel start
let currentIndex = 0;
const slides = document.getElementById("clientImages");
if (slides){
totalSlides = slides.children.length;

}
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateSlider() {
  const offset = -currentIndex * 190;
  slides.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
  updateSlider();
});

let startX;

slides.addEventListener("mousedown", (e) => {
  startX = e.pageX - slides.offsetLeft;
  slides.style.cursor = "grabbing";

  const onMouseMove = (e) => {
    const x = e.pageX - slides.offsetLeft;
    const walk = x - startX;
    slides.style.transform = `translateX(${-(currentIndex * 190) + walk}px)`;
  };

  const onMouseUp = () => {
    slides.removeEventListener("mousemove", onMouseMove);
    slides.removeEventListener("mouseup", onMouseUp);
    slides.style.cursor = "grab";

    if (startX - e.pageX > 100) {
      currentIndex++;
    } else if (e.pageX - startX > 100) {
      currentIndex--;
    }

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;

    updateSlider();
  };

  slides.addEventListener("mousemove", onMouseMove);
  slides.addEventListener("mouseup", onMouseUp);
});

slides.addEventListener("dragstart", (e) => e.preventDefault());

//   crawsel end

// portfolio start
document.addEventListener("DOMContentLoaded", () => {
  const dropdownHeaders = document.querySelectorAll(".dropdown-header");
  const dropdownContents = document.querySelectorAll(".dropdown-content");
  const productImage = document.getElementById("product-image");
  const productTitle = document.getElementById("product-title");

  dropdownHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      dropdownContents.forEach((dropdownContent) => {
        if (dropdownContent !== content) {
          dropdownContent.style.display = "none";
        }
      });
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  const dropdownItems = document.querySelectorAll(".dropdown-content a");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const newImage = item.getAttribute("data-image");
      const newTitle = item.getAttribute("data-title");

      productImage.src = newImage;
      productTitle.textContent = newTitle;

      const dropdownContent = item.closest(".dropdown-content");
      dropdownContent.style.display = "none";
    });
  });
});
// portfolio end


// back to top
let backtotop = document.querySelector('.back-to-top');
const navbar = document.querySelector("nav");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      console.log(true); // Debugging line
      backtotop.classList.add('active');
      navbar.classList.add('fixed-top');
    } else {
      backtotop.classList.remove('active');
      navbar.classList.remove('fixed-top');
    }
  };
  
  // Trigger on page load and scroll
  window.addEventListener('load', toggleBacktotop);
  window.addEventListener('scroll', toggleBacktotop);
}
// back to top

