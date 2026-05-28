const cards = document.querySelectorAll(".card");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* Open Lightbox */

cards.forEach((card,index)=>{

  card.addEventListener("click",()=>{

    currentIndex = index;

    showImage();

    lightbox.style.display = "flex";

  });

});

/* Show Image */

function showImage(){

  const img =
  cards[currentIndex].querySelector("img");

  lightboxImg.src = img.src;

}

/* Next Button */

nextBtn.addEventListener("click",()=>{

  currentIndex++;

  if(currentIndex >= cards.length){

    currentIndex = 0;

  }

  showImage();

});

/* Previous Button */

prevBtn.addEventListener("click",()=>{

  currentIndex--;

  if(currentIndex < 0){

    currentIndex = cards.length - 1;

  }

  showImage();

});

/* Close Button */

closeBtn.addEventListener("click",()=>{

  lightbox.style.display = "none";

});

/* Close By Background */

lightbox.addEventListener("click",(e)=>{

  if(e.target === lightbox){

    lightbox.style.display = "none";

  }

});

/* Filter Buttons */

const filterButtons =
document.querySelectorAll(".filter-section button");

filterButtons.forEach(button=>{

  button.addEventListener("click",()=>{

    document
    .querySelector(".filter-section .active")
    .classList.remove("active");

    button.classList.add("active");

    const filter =
    button.getAttribute("data-filter");

    cards.forEach(card=>{

      if(filter === "all"){

        card.style.display = "block";

      }

      else if(card.classList.contains(filter)){

        card.style.display = "block";

      }

      else{

        card.style.display = "none";

      }

    });

  });

});