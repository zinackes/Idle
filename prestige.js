let prestige = 0;
let antimatter = 0;
let antimatter_affichage = 0;
let globalboost_antimatter = 0;
let individualboost_antimatter = 0;
let BoostSelected = 0;
const antimatter_text = document.getElementById("antimatter_text");
const antimatter_after_text = document.getElementById("antimatter_after_text");
const boost_bg = document.getElementById("boost_bg");
const boost_button = document.querySelectorAll(".boost_button");
const boost_box = document.querySelectorAll(".boost_box");
const boost_choice = document.getElementById("boost_choice");
const global_boost_text = document.getElementById("global_boost_text");
const individual_boost_text = document.getElementById("individual_boost_text");
const individual_boost_list = document.querySelector(".individual_boost_list");


function Prestige(){
    antimatter_affichage = money/1;
    if(antimatter_affichage >= 1){
        ChooseBoost(antimatter_affichage);
    }


}

function ChooseBoost(value){
    const body = document.body;
    const html = document.documentElement;
    const body_height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);
    boost_bg.classList.toggle("boost_show");
    boost_bg.style.height = body_height;
    boost_bg.classList.toggle("boosts-animation");

    globalboost_antimatter = value*0.1;
    individualboost_antimatter = value*0.6;

    global_boost_text.textContent = formatMoney(globalboost_antimatter);
    individual_boost_text.textContent = formatMoney(individualboost_antimatter);
}

function Boost(boost){
    for(let i = 0; i < boost_button.length; i++){
        boost_box[i].classList.remove("boost_box_selected");
    }
    switch(boost){
        case 0:
            boost_box[0].classList.toggle("boost_box_selected");
            BoostSelected = 1;
            break;
        case 1:
            boost_choice.classList.toggle("no-display");
            for (let i = 0; i < 2; i++){
                const indi_power_text = document.getElementById
                (`indi_power_${i+1}_text`);
                const indi_lvl_text = document.getElementById
                (`indi_lvl_${i+1}_text`);
                const indi_actual_boost_text = document.
                getElementById(`indi_actual_boost_${i+1}_text`);
                const indi_after_boost_text = document.
                getElementById(`indi_after_boost_${i+1}_text`);
                let after_boost = IndividualBoost[i] + individualboost_antimatter;
                indi_power_text.textContent = "+" + formatMoney(UpPowers[i] * n);
                indi_lvl_text.textContent = formatMoney(upLvls[i]);
                indi_actual_boost_text.textContent = "x" + formatMoney(IndividualBoost[i]);
                indi_after_boost_text.textContent = "x" + formatMoney(after_boost);

            }
            boost_box[1].classList.toggle("boost_box_selected");
            individual_boost_list.classList.toggle("individual_boost_list_show");
            individual_boost_list.classList.toggle("animate__zoomIn");
            BoostSelected = 2;
            break;
    }
}

async function IndividualBoostChoose(value){
    const UpNameAnnounce = document.getElementById("UpNameAnnounce");
    const UpNameAnnounceParagraph = document.
    getElementById("UpNameAnnounceParagraph");
    UpNameAnnounce.textContent = UpNames[value] + " selected";
    UpNameAnnounceParagraph.classList.toggle("show_block");
    UpNameAnnounceParagraph.classList.toggle("animate__slideOutUp");
    UpNameAnnounce.classList.toggle("Fade");
    await delay(1500);
    UpNameAnnounceParagraph.classList.toggle("show_block");
    UpNameAnnounceParagraph.classList.toggle("animate__slideOutUp");
    UpNameAnnounce.classList.toggle("Fade");
    const indi_box = document.querySelectorAll('.indi_box');
for (let i = 0; i < indi_box.length; i++) {
indi_box[i].addEventListener('click', function() {
// Supprimer la classe "indi_box_selected" de tous les "indi_box"
for (let j = 0; j < indi_box.length; j++) {
indi_box[j].classList.remove('indi_box_selected');
}
// Ajouter la classe "indi_box_selected" à l'"indi_box" sélectionné
this.classList.add('indi_box_selected');
});
}
}

function BoostValid(){
    boost_bg.classList.toggle("boost_show");
    switch(BoostSelected){
        case 1:
            GlobalBoost += globalboost_antimatter;
            console.log(GlobalBoost);
            antimatter += antimatter_affichage;
            PrestigeReset();
            antimatter_text.textContent = formatMoney(antimatter);
            antimatter_after_text.textContent = formatMoney(antimatter_affichage);
            break;
        case 2:
            IndividualBoost += individualboost_antimatter;
            console.log(IndividualBoost);
            PrestigeReset();
            antimatter_text.textContent = formatMoney(antimatter);
            antimatter_after_text.textContent = formatMoney(antimatter_affichage);
            break;
    }
}