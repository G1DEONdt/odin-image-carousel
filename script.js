const left = document.querySelector(".left");
const right = document.querySelector(".right");
const images = document.images;
const dots = document.querySelectorAll(".dot");

let selectedImageIndex = 0;

function renderImage(currentIndex) {
    images.item(currentIndex).classList.remove("visible");
    images.item(selectedImageIndex).classList.add("visible");
}

function renderDots(currentIndex) {
    dots.item(currentIndex).classList.remove("fa-solid");
    dots.item(currentIndex).classList.remove("selected");
    dots.item(currentIndex).classList.add("fa-regular");

    dots.item(selectedImageIndex).classList.remove("fa-regular");
    dots.item(selectedImageIndex).classList.add("fa-solid");
    dots.item(selectedImageIndex).classList.add("selected");
}


left.addEventListener("click", () => {
    currentIndex = selectedImageIndex;
    
    if (selectedImageIndex <= 0) {
        selectedImageIndex = images.length - 1;
    } else {
        selectedImageIndex--;
    }

    renderImage(currentIndex);
    renderDots(currentIndex);
})

right.addEventListener("click", () => {
    currentIndex = selectedImageIndex;

    if (selectedImageIndex >= 4) {
        selectedImageIndex = 0;
    } else {
        selectedImageIndex++;
    }

    renderImage(currentIndex);
    renderDots(currentIndex);
})

for (let index in dots) {
    console.log(index);
    dots.item(index).addEventListener("click", () => {
        currentIndex = selectedImageIndex;

        dots.item(currentIndex).classList.remove("fa-solid");
        dots.item(currentIndex).classList.remove("selected");
        dots.item(currentIndex).classList.add("fa-regular");

        // Honestly, for whatever reason, upon clicking dot[0], index would become "0, entries, keys..."
        // This resulted in disabling of the clickable arrows, so this is my weird solution.
        
        if (selectedImageIndex.length > 1) {
            selectedImageIndex = 0;
        } else {
            selectedImageIndex = index;
        }

        dots.item(selectedImageIndex).classList.remove("fa-regular");
        dots.item(selectedImageIndex).classList.add("fa-solid");
        dots.item(selectedImageIndex).classList.add("selected");

        renderImage(currentIndex);
    })
}