function myFunc() {
    
    // Change the body to light mode
    var body = document.querySelector("body");
    body.classList.toggle("body__light");
    
    // Change the 4 cards to light mode
    var card = document.querySelectorAll(".card");
    for (var i=0; i<card.length; i++){
        card[i].classList.toggle("card__box__light");
    }

    // Change the 8 boxes to light mode
    var box = document.querySelectorAll(".box");
    for (var i=0; i<box.length; i++){
        box[i].classList.toggle("card__box__light");
    }

    // Change the circle position to the right
    var circle = document.querySelector(".button__circle");
    circle.classList.toggle("button__circle__light");
    if (circle.style.left == "22px"){
        circle.style.left = "3px";
    }else{
        circle.style.left = "22px";
    }
}