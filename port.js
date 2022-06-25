const homeLink = document.getElementById("homelink");
const aboutLink = document.getElementById("aboutlink");
const skillsLink = document.getElementById("skillslink");

const sect1 = document.getElementById("screen-1");
const sect2 = document.getElementById("screen-2");
const sect3 = document.getElementById("screen-3");
const sect4 = document.getElementById("screen-4")
/* ------------------------------------------------------------------------------ */
const title1 = document.getElementById("title1");
const subt1 = document.getElementById("subt-1");
const img1 = document.getElementById("img-1");
const navbar = document.getElementById("navbar")

const aboutTitle = document.getElementById("about-title");
const aboutText = document.getElementById("about-text");

const tecTitle = document.getElementById("tec-title");
const tecText = document.getElementById("tec-text");
const tecImg = document.getElementById("tec-img");

const proTitle = document.getElementById("pro-title")
const proText = document.getElementById("pro-text")

const body = document.getElementById("body");

function chosen1(){

    sect1.classList.remove("hidden");
    sect2.classList.add("hidden");
    sect3.classList.add("hidden");
    sect4.classList.add("hidden");
}

function chosen2(){

    sect2.classList.remove("hidden");
    sect1.classList.add("hidden");
    sect3.classList.add("hidden");
    sect4.classList.add("hidden");
}

function chosen3(){

    sect3.classList.remove("hidden");
    sect2.classList.add("hidden");
    sect1.classList.add("hidden");
    sect4.classList.add("hidden");
}

function chosen4(){

    sect4.classList.remove("hidden");
    sect2.classList.add("hidden");
    sect1.classList.add("hidden");
    sect3.classList.add("hidden");
}

function background1(){
        body.classList.add("background1")
        body.classList.remove("background2")
        body.classList.remove("background3")
}

function background2(){
        body.classList.add("background2")
        body.classList.remove("background1")
        body.classList.remove("background3")
}

function background3(){
        body.classList.add("background3")
        body.classList.remove("background2")
        body.classList.remove("background1")
}
/* -----------animations-------------------------------------------------------------- */
function animation1(){


    title1.classList.add("title-animation")
    subt1.classList.add("title-animation")
    img1.classList.add("img-animation")

    setTimeout(function (){
        aboutTitle.classList.remove("title-animation");
        aboutText.classList.remove("title-animation");
        tecTitle.classList.remove("title-animation")
        tecText.classList.remove("title-animation")
        tecImg.classList.remove("img-animation")
        proTitle.classList.remove("title-animation")
        proText.classList.remove("img-animation")

    },2)
}

function animation2(){

    aboutTitle.classList.add("title-animation");
    aboutText.classList.add("title-animation");

    setTimeout(function (){
        subt1.classList.remove("title-animation");
        title1.classList.remove("title-animation");
        img1.classList.remove("img-animation");
        tecTitle.classList.remove("title-animation")
        tecText.classList.remove("title-animation")
        tecImg.classList.remove("img-animation")
        proTitle.classList.remove("title-animation")
        proText.classList.remove("img-animation")

    },2)

}

function animation3(){
    tecTitle.classList.add("title-animation")
    tecText.classList.add("title-animation")
    tecImg.classList.add("img-animation")

    setTimeout(function (){
    title1.classList.remove("title-animation")
    subt1.classList.remove("title-animation")
    img1.classList.remove("img-animation")
    aboutTitle.classList.remove("title-animation");
    aboutText.classList.remove("title-animation");
    proTitle.classList.remove("title-animation")
    proText.classList.remove("img-animation")

    },2)
}

function animation4(){
    proTitle.classList.add("title-animation")
    proText.classList.add("img-animation")

    setTimeout(function (){
        title1.classList.remove("title-animation")
        subt1.classList.remove("title-animation")
        img1.classList.remove("img-animation")
        aboutTitle.classList.remove("title-animation");
        aboutText.classList.remove("title-animation");
        tecTitle.classList.remove("title-animation")
        tecText.classList.remove("title-animation")
        tecImg.classList.remove("img-animation")
    
        },2)
}