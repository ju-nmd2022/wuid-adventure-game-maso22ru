const randomValue = Math.round(Math.random());

function openCloseFridge() {
    let kitchen = document.getElementById("kitchen_content");
    kitchen.classList.toggle("invisible");

    let fridge = document.getElementById("fridge_content");
    fridge.classList.toggle("invisible");
}

function openCloseCabinet() {
    let kitchen = document.getElementById("kitchen_content");
    kitchen.classList.toggle("invisible");

    let cabinet = document.getElementById("cabinet_content");
    cabinet.classList.toggle("invisible");
}

function openCloseOutside() {
    let kitchen = document.getElementById("kitchen_content");
    kitchen.classList.toggle("invisible");

    let outside = document.getElementById("outside_content");
    outside.classList.toggle("invisible");
}


function openCloseChickenCoop() {
    const hasNoKey = localStorage.getItem("metalKey") == null;

    if (hasNoKey) {
        alert("You need a key to enter the chicken coop, go and have a talk with the boss");
    } else {
        let outside = document.getElementById("outside_content");
        outside.classList.toggle("invisible");

        let chickenCoop = document.getElementById("chicken_coop_content");
        chickenCoop.classList.toggle("invisible");
    }
}

function openCloseRooster() {
    let outside = document.getElementById("outside_content");
    outside.classList.toggle("invisible");

    let rooster = document.getElementById("rooster_content");
    rooster.classList.toggle("invisible");
}


