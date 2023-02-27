function state(id){

    document.querySelector(".active").style.animation = "out 3s";
    document.querySelector(".active").style.zIndex = "-2";
    document.querySelector(".active").style.opacity = "0";
    document.querySelector(".active").removeAttribute("class", active);

    switch(id){
        case 0:
            document.querySelector(".home").setAttribute("class",   "frame home active");
            document.querySelector(".active").style.animation = "in 3s";
            break;
        case 1:
            alert("proyectos");
            document.getElementsByName("home").style.zIndex = "1";
            break;
        case 2:
            alert("curriculum");
            break;
        default:

    }
}