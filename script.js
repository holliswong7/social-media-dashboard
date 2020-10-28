function myFunc() {
    // body.classList.toggle(".body__light");
    // var aa = document.getElementById("a");
    // console.log(aa.classList)
    // var card = document.querySelector(".card");
    // console.log(card.classList)

    var body = document.querySelector("body");
    // console.log(body.classList);
    body.classList.toggle("body__light");
    
    var card = document.querySelectorAll(".card");
    for (var i=0; i<card.length; i++){
        card[i].classList.toggle("card__box__light");
    }

    var box = document.querySelectorAll(".box");
    for (var i=0; i<box.length; i++){
        box[i].classList.toggle("card__box__light");
    }

    // var circle = document.querySelector(".button__container");
    // console.log(circle.classList);
    // circle.classList.toggle("button__circle__light");

    // var circle = document.getElementById("circle");
    var circle = document.querySelector(".button__circle");
    // console.log(circle.classList);
    circle.classList.toggle("button__circle__light");
    if (circle.style.left == "22px"){
        circle.style.left = "3px";
    }else{
        circle.style.left = "22px";
    }
    


}