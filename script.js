document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallerypics")){
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src =src;
        const myModal = new bootstrap.Modal(document.getElementById("gallerymodal"));
        myModal.show();
    }
})