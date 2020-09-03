const price = document.getElementById("price");
const dimensions = document.getElementById("dimensions");
const price2 = document.getElementById("price2");
const dimensions2 = document.getElementById("dimensions2");
const tow1 = document.querySelector(".tow1");
const tow2 = document.querySelector(".tow2");

function switchOn1(cost, height, weight, length, classname) {
    price.innerHTML=`Price: £${cost}`;
    dimensions.innerHTML=`<span class='font'>Dimensions:</span> <br>Height:${height}cm <br>Weight:${weight}cm <br>Length:${length}cm`;
    classname.classList.remove("fader");
}

function switchoff1(classname) {
    price.innerHTML="";
    dimensions.innerHTML="";
    classname.classList.add("fader");
}

function switchOn2(cost, height, weight, length, classname) {
    price2.innerHTML=`Price: £${cost}`;
    dimensions2.innerHTML=`<span class='font'>Dimensions:</span> <br>Height:${height}cm <br>Weight:${weight}cm <br>Length:${length}cm`;
    classname.classList.remove("fader");
}

function switchoff2(classname) {
    price2.innerHTML="";
    dimensions2.innerHTML="";
    classname.classList.add("fader");
}

tow1.addEventListener("mouseover", function() {
    switchOn1(25.00, 37, 13.5, 50, tow1);
})

tow1.addEventListener("mouseout", function() {
    switchoff1(tow1);
})

tow2.addEventListener("mouseover", function() {
    switchOn2(15.00, 9.5, 12, 50, tow2);
})

tow2.addEventListener("mouseout", function() {
    switchoff2(tow2);
})