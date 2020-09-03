const price = document.getElementById("price");
const dimensions = document.getElementById("dimensions");
const roll1 = document.querySelector(".roll1");
const roll2 = document.querySelector(".roll2");
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

roll1.addEventListener("mouseover", function() {
    switchOn1(8.00, 12.5, 9.5, 15, roll1);
})

roll1.addEventListener("mouseout", function() {
    switchoff1(roll1);
})

roll2.addEventListener("mouseover", function() {
    switchOn2(15.00, 29, 17, 14, roll2);
})

roll2.addEventListener("mouseout", function() {
    switchoff2(roll2);
})
