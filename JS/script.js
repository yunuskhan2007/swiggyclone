console.log("Swiggy Clone Started");
const foodslider = document.getElementById("foodslider");

document.getElementById("foodright").onclick = () => {

    foodslider.scrollBy({

        left:500,

        behavior:"smooth"

    });

};

document.getElementById("foodleft").onclick = () => {

    foodslider.scrollBy({

        left:-500,

        behavior:"smooth"

    });

};

const groceryslider = document.getElementById("groceryslider");

document.getElementById("groceryright").onclick = function(){

    groceryslider.scrollBy({

        left:850,

        behavior:"smooth"

    });

}

document.getElementById("groceryleft").onclick = function(){

    groceryslider.scrollBy({

        left:-850,

        behavior:"smooth"

    });

}
// City // 
const showmore=document.getElementById("showmore");

const showless=document.getElementById("showless");

const hiddenitems=document.querySelectorAll(".hiddenitem");

showmore.onclick=function(){

    hiddenitems.forEach(function(item){

        item.style.display="flex";

    });

    showmore.style.display="none";

}

showless.onclick=function(){

    hiddenitems.forEach(function(item){

        item.style.display="none";

    });

    showmore.style.display="flex";

}
const groceryshowmore=document.getElementById("groceryshowmore");

const groceryshowless=document.getElementById("groceryshowless");

const groceryhidden=document.querySelectorAll(".groceryhidden");

groceryshowmore.onclick=function(){

    groceryhidden.forEach(function(item){

        item.style.display="flex";

    });

    groceryshowmore.style.display="none";

}

groceryshowless.onclick=function(){

    groceryhidden.forEach(function(item){

        item.style.display="none";

    });

    groceryshowless.style.display="none";

    groceryshowmore.style.display="flex";

}