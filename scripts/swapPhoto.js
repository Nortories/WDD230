function swapImage() {
    var image = document.getElementById("headshot");
    if (image.src.match("headshot (1).webp")) {
        image.src = "./images/headshot.webp";
    } else {
        image.src = "./images/headshot (1).webp";
    }
}