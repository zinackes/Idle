const money_notation_text = document.getElementById("money_text");
const money_per_sec_text = document.getElementById("money_per_sec_text");
const tick_text = document.getElementById("tick_text");
const upbox = document.querySelectorAll(".upbox");
const xp_bar = document.getElementById("xp-bar");
const xp_lvl_text = document.getElementById("xp_lvl_text");
const xp_text = document.getElementById("xp");
const xp_required_text = document.getElementById("xp_required");
const buymode_text = document.getElementById("buymode_text");
const prestige_box = document.getElementById("prestige");
const prestige_info = document.getElementById("prestige_text");
const prestige_title = document.getElementById("animation_1");
const prestige_desc = document.getElementById("animation_2");
const prestige_value = document.getElementById("animation_3");
const prestige_button = document.getElementById("animation_4");
const prestige_indication = document.getElementById("animation_5");
const prestige_button_2 = document.getElementById("animation_6");
const moneypersec_animation = document.getElementById("moneypersecond");
const money_info = document.querySelector(".money_info");
const milestone_bar = document.getElementById("milestone_bar");
const milestone_xp_text = document.getElementById("milestone_xp_text");
const milestone_maxxp_text = document.getElementById("milestone_maxxp_text");
var money = 0;
var Tick = 1000;
let TickUplvl = 0;
let TickUpCost = 1000;
let GlobalBoost = 1;
let IndividualBoost = [1, 1, 1, 1]; //Chaque 1 correspond a 1 amelioration

let mode = 0;

let xp = 1;
let maxxp= 10;
let xp_lvl = 0;

let UpNames = ["Wood", "Stone", "Sand", "Calcaire"];

let UpPowers = [];
UpPowers[0] = 1;
UpPowers[1] = 5;
UpPowers[2] = 30;
UpPowers[3] = 50;

let Ups = [];
Ups[0] = 1;
Ups[1] = 0;
Ups[2] = 0;
Ups[3] = 0;

let upLvls = []; 
upLvls[0] = 0;
upLvls[1] = 0;
upLvls[2] = 0;
upLvls[3] = 0;


let upCosts = [];
upCosts[0] = 6;
upCosts[1] = 100;
upCosts[2] = 1000;
upCosts[3] = 5000;

const nbUpgrades = upCosts.length;

let UpCostsMulti = [];
UpCostsMulti[0] = 1.01;
UpCostsMulti[1] = 1.05;
UpCostsMulti[2] = 1.15;
UpCostsMulti[3] = 1.22;

var upgrades;
var money_gen_indi = [0, 0, 0, 0];
let i = 0;


function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

function SwitchBuyMode(){
  mode++;
  if(mode >=4){
    mode=0;
  }
  SetbuyMode(mode);
  if(n != 1 && n != 10 && n != 100){
    buymode_text.textContent = "Max";
  }
  else{
    buymode_text.textContent = "x" + n;
  }
}


buymode_text.textContent = "x" + 1;

function Money_Generator_Individual(){
  for(let i = 0;i< IndividualBoost.length;i++){
    money_gen_indi[i] = Ups[i]*((IndividualBoost[i]*+GlobalBoost)*moneybooster);
    money+= money_gen_indi[i];
    formatMoney(money);
    Update();
  }
}



function formatMoney(value) {
  for (let i = moneyNotations.length - 1; i >= 0; i--) {
      const divider = Math.pow(10, (i * 3));
      if (value >= divider) {
          return (value / divider).toFixed(2) + moneyNotations[i];
      }
  }
  return value.toString();
}

function Update(){
    money_text.textContent = formatMoney(money);
    for(let i = 0;i< money_gen_indi.length;i++){
      money_per_sec = money_gen_indi.reduce((accumulator, currentValue) => accumulator + currentValue);
      money_per_sec_text.textContent = formatMoney(money_per_sec);
    }
    xp_lvl_text.textContent = xp_lvl;
    Xp_display();
}


setInterval(Update, 500); 
setInterval(Money_Generator_Individual, 1000);

async function Prestige_class_open(){
  moneypersec_animation.classList.toggle("animate__zoomOut");
  prestige_box.classList.toggle("active");
  prestige_info.classList.toggle("prestige_active");
  prestige_title.classList.toggle("animation_1");
  prestige_desc.classList.toggle("animation_2");
  prestige_value.classList.toggle("animation_3");
  prestige_button.classList.toggle("animation_4");
  prestige_indication.classList.toggle("animation_5");
  prestige_button_2.classList.toggle("animation_6");
  money_info.setAttribute("onclick", "Prestige_class_close()");
  antimatter_affichage = money*0.000001;
  antimatter_text.textContent = formatMoney(antimatter);
  antimatter_after_text.textContent = formatMoney(antimatter_affichage);
  console.log(antimatter);
  console.log(antimatter_affichage);

  await delay(500);
  moneypersec_animation.classList.toggle("moneypersecond_active");
  
  
  await delay(1500);
  moneypersec_animation.classList.toggle("animate__zoomOut");
  moneypersec_animation.classList.toggle("animate__zoomIn");
  prestige_title.classList.toggle("animation_1");
  prestige_desc.classList.toggle("animation_2");
  prestige_value.classList.toggle("animation_3");
  prestige_button.classList.toggle("animation_4");
  prestige_indication.classList.toggle("animation_5");
  prestige_button_2.classList.toggle("animation_6");
  await delay(1000);
  moneypersec_animation.classList.toggle("animate__zoomIn");
}

async function Prestige_class_close(){
  prestige_box.classList.toggle("close");
  prestige_box.classList.toggle("active");
  prestige_title.classList.toggle("animation_not_1");
  prestige_desc.classList.toggle("animation_not_2");
  prestige_value.classList.toggle("animation_not_3");
  prestige_button.classList.toggle("animation_not_4");
  prestige_indication.classList.toggle("animation_not_5");
  prestige_button_2.classList.toggle("animation_not_6");
  moneypersec_animation.classList.toggle("animate__zoomOut");
  money_info.setAttribute("onclick", "Prestige_class_open()");

  
  await delay(500);
  moneypersec_animation.classList.toggle("moneypersecond_active");
  prestige_title.classList.toggle("animation_not_1");
  prestige_desc.classList.toggle("animation_not_2");
  prestige_value.classList.toggle("animation_not_3");
  prestige_button.classList.toggle("animation_not_4");
  prestige_indication.classList.toggle("animation_not_5");
  prestige_button_2.classList.toggle("animation_not_6");
  prestige_info.classList.toggle("prestige_active");

  await delay(900);
  moneypersec_animation.classList.toggle("animate__zoomOut");
  moneypersec_animation.classList.toggle("animate__zoomIn");

  await delay(1000);
  moneypersec_animation.classList.toggle("animate__zoomIn");



  await delay(1500);
  prestige_box.classList.toggle("close");
}

function Argent(){
  money += 10e+100;
}

function Reset(){
  money = 0;
  Ups[0] = 1;
  Ups[1] = 0;
  Ups[2] = 0;
  Ups[3] = 0;
  upLvls[0] = 0;
  upLvls[1] = 0;
  upLvls[2] = 0;
  upLvls[3] = 0;
  upCosts[0] = 6;
  upCosts[1] = 100;
  upCosts[2] = 1000;
  upCosts[3] = 5000;
  milestone_number = [0,0,0,0];
  xp = 0;
  maxxp = 10;
  xp_lvl = 0;
  moneybooster = 1;
  GlobalBoost=1;
  IndividualBoost = [1,1,1,1];
  xp_milestone = 0;
  maxxp_milestone = 0;
  milestones = [10, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000
    , 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500,
    8000, 8500, 9000, 9500, 10000, 20000,];
    maxxp_milestone_bar = 10;
}function PrestigeReset(){
  money = 0;
  Ups[0] = 1;
  Ups[1] = 0;
  Ups[2] = 0;
  Ups[3] = 0;
  upLvls[0] = 0;
  upLvls[1] = 0;
  upLvls[2] = 0;
  upLvls[3] = 0;
  upCosts[0] = 6;
  upCosts[1] = 100;
  upCosts[2] = 1000;
  upCosts[3] = 5000;
  xp = 0;
  maxxp = 10;
  xp_lvl = 0;
}