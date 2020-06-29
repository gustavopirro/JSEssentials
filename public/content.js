const modalClose = document.getElementById("modal-close");
const modalOverlay = document.getElementById("modal-over");
const cards = document.querySelectorAll('.card');

modalClose.addEventListener("click" ,function(){
    modalOverlay.classList.add("inactive")
    modalOverlay.querySelector("iframe").src = ""
})


console.log(cards);
for( let card of cards ){
    card.addEventListener("click", ()=>{
        modalOverlay.classList.remove('inactive')
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = "https://www.youtube.com/embed/PkZNo7MFNFg"
        console.log("teste")
    })
}

