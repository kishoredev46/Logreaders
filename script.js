// selecting popup box, popup overlay, button
var PopupOverlay = document.querySelector(".popup-overlay")
var PopupBox = document.querySelector(".popup-box")
var AddPopupButton = document.getElementById("add-popup-button")

AddPopupButton.addEventListener("click", function(){
    PopupOverlay.style.display="block"
    PopupBox.style.display="block"
})

// selecting the cancel button
var canclepopup = document.getElementById("cancle-popup")

canclepopup.addEventListener("click", function(event){
    event.preventDefault()
    PopupOverlay.style.display="none"
    PopupBox.style.display="none"
})
// selecting container,add-book,book-title-input,book-author-input,Book-description-input
var container=document.querySelector(".container")
var addbook= document.getElementById("add-book")
var booktitleinput= document.getElementById("book-title-input")
var bookauthorinput= document.getElementById("book-author-input")
var Bookdescriptioninput= document.getElementById("Book-description-input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>
          ${Bookdescriptioninput.value}
        </p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
      PopupOverlay.style.display="none"
    PopupBox.style.display="none"
})
function deletebook(event) {
    event.target.parentElement.remove();
}