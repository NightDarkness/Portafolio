function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function disableMenu(){
    document.querySelector("#button0").removeAttribute("onclick");
    document.querySelector("#button1").removeAttribute("onclick");
    document.querySelector("#button3").removeAttribute("onclick");
}

function enableMenu(){
    document.querySelector("#button0").setAttribute("onclick", "state(0)");
    document.querySelector("#button1").setAttribute("onclick", "state(1)");
    document.querySelector("#button3").setAttribute("onclick", "state(2)");
}

async function state(id){
    disableMenu();
    document.querySelector(".active").style.animation = "out 1s";
    await sleep(950);
    document.querySelector(".active").removeAttribute("style");
    
    document.querySelector(".active").classList.remove("active");

    switch(id){
        case 0:
            document.querySelector("#home").style.animation = "in 1s";
            document.querySelector("#home").setAttribute("class",   "frame active");
            await sleep(950);
            document.querySelector("#home").removeAttribute("style");
            break;
        case 1:
            document.querySelector("#proyectos").style.animation = "in 1s";
            document.querySelector("#proyectos").setAttribute("class",   "frame active");
            await sleep(950);
            document.querySelector("#proyectos").removeAttribute("style");
            break;
        case 2:
            document.querySelector("#About").style.animation = "in 1s";
            document.querySelector("#About").setAttribute("class",   "frame active");
            await sleep(950);
            document.querySelector("#About").removeAttribute("style");
            break;
        default:

    }
    enableMenu();
}

