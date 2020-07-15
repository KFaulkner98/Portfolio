const hamburgerIcon = document.querySelector(".hamburger--container")
const navBar = document.querySelector(".navbar")

hamburgerIcon.addEventListener('click', () =>{
    navBar.classList.toggle("change")
})

//Get the Modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("resume");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}