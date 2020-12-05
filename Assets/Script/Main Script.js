/*dropdown*/
function myFunction() {
    document.getElementById("dropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("dropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

/*photo*/

var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

var images = document.getElementsByClassName("Photo")
var modalImg = document.getElementById("img01");
var captionTexts = document.getElementById ('alt');
var i;
for (i =  0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    }}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
