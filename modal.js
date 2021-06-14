// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 100);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }
}