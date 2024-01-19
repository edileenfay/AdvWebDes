function randomBackground() {
    var table = document.getElementById("resume");
    var randomColor = getColor();
    table.style.backgroundColor = randomColor;

}

function getColor() {
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
}