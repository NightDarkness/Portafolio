function test(){
    alert("test");
}

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
            document.querySelector("#home").setAttribute("class",   "slide active");
            await sleep(950);
            document.querySelector("#home").removeAttribute("style");
            break;
        case 1:
            document.querySelector("#proyects").style.animation = "in 1s";
            document.querySelector("#proyects").setAttribute("class",   "slide active");
            await sleep(950);
            document.querySelector("#proyects").removeAttribute("style");
            break;
        case 2:
            document.querySelector("#about").style.animation = "in 1s";
            document.querySelector("#about").setAttribute("class",   "slide active");
            await sleep(950);
            document.querySelector("#about").removeAttribute("style");
            break;
        default:

    }
    enableMenu();
}
