function swapImage() {
    var image = document.getElementById("headshot");
    if (image.src.match("headshot.jpg")) {
        image.src = "./images/headshot.png";
    } else {
        image.src = "./images/headshot.jpg";
    }
}