function swapImage() {
    var image = document.getElementById("headshot");
    if (image.src.match("headshot.jpg")) {
        image.src = "./images/headshot.webp";
    } else {
        image.src = "./images/headshot (1).webp";
    }
}