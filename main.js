function openCloseStart() {
    let start = document.getElementById("start_content");
    start.classList.toggle("invisible");

    let kitchen = document.getElementById("kitchen_content");
    kitchen.classList.toggle("invisible");
}


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

function openCloseOven() {
    let kitchen = document.getElementById("kitchen_content");
    kitchen.classList.toggle("invisible");

    let oven = document.getElementById("oven_content");
    oven.classList.toggle("invisible");

    if (hasIngredients()) {
        alert("You won!")

        let oven = document.getElementById("oven_content");
        oven.classList.toggle("invisible");

        let final = document.getElementById("final_content")
        final.classList.toggle("invisible");


        // slutscenvisable
    }
}

function openCloseOutside() {
    let kitchen = document.getElementById("kitchen_content");
    kitchen.classList.toggle("invisible");

    let outside = document.getElementById("outside_content");
    outside.classList.toggle("invisible");
}

function hasIngredients() {
    const hasEggs = document.getElementById("eggs").classList.contains("invisible") == false;
    const hasFlour = document.getElementById("flour").classList.contains("invisible") == false;
    const hasMilk = document.getElementById("milk").classList.contains("invisible") == false;
    return hasEggs && hasFlour && hasMilk;
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

        // document.getElementById("chicken").addEventListener("click", () => alert("chicken"))
    }
}

function openCloseRooster() {
    let outside = document.getElementById("outside_content");
    outside.classList.toggle("invisible");

    let rooster = document.getElementById("rooster_content");
    rooster.classList.toggle("invisible");
}



function openCloseRock() {

    const hasKey = localStorage.getItem("metalKey") == 1;

    if (hasKey) {
        alert("you already have the key, go away punk")
    } else {
        const randomValue = Math.round(Math.random());

        if (randomValue === 1) {
            alert("You found the key to the Chicken coop!");
            localStorage.setItem("metalKey", 1);
    
            let metalKey = document.getElementById("metalKey");
            metalKey.classList.toggle("invisible")
        } else {
            alert("ooh no.. the key was not under this rock.. I will shuffle them again. TRY AGAIN!");
        }
    }
}

function chickenClick() {
    alert("I want to listen to music")
}

function radioClick() {
    let chickenCoop = document.getElementById("chicken_coop_content");
    chickenCoop.classList.toggle("invisible");

    let chickenCoopDancing = document.getElementById("chicken_coop_dancing_content");
    chickenCoopDancing.classList.toggle("invisible");
}

function openCloseChickenCoopDancing() {
    let chickenCoopDancing = document.getElementById("chicken_coop_dancing_content");
    chickenCoopDancing.classList.toggle("invisible");

    let outside = document.getElementById("outside_content");
    outside.classList.toggle("invisible");
}

function eggClick() {
    let eggs = document.getElementById("eggs");
    eggs.classList.toggle("invisible");

    let eggStuff = document.getElementById("eggStuff");
    eggStuff.classList.toggle("invisible");

    if (hasIngredients()) {
        alert("You have all the ingridients! Go to the oven!")
    }
}

function milkClick() {
    let milk = document.getElementById("milk");
    milk.classList.toggle("invisible");

    let milkStuff = document.getElementById("milkStuff");
    milkStuff.classList.toggle("invisible");

    if (hasIngredients()) {
        alert("You have all the ingridients! Go to the oven!")
    }
}

function flourClick() {
    let flour = document.getElementById("flour");
    flour.classList.toggle("invisible");

    let flourStuff = document.getElementById("flourStuff");
    flourStuff.classList.toggle("invisible");

    if (hasIngredients()) {
        alert("You have all the ingridients! Go to the oven!")
    }
}