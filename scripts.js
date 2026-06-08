window.addEventListener("scroll", function() {

    const header = document.getElementById("header");
    const backToTop = document.getElementById("backToTop");

    // Menú
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    // Botón volver arriba
    if(backToTop){
        if(window.scrollY > 300){
            backToTop.classList.add("show");
        }else{
            backToTop.classList.remove("show");
        }
    }

});