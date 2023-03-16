const money_notation_text = document.getElementById("money_text");
const money_per_sec_text = document.getElementById("money_per_sec_text");
const tick_text = document.getElementById("tick_text");
const upbox = document.querySelectorAll(".upbox");
const xp_bar = document.getElementById("xp-bar");
const xp_lvl_text = document.getElementById("xp_lvl_text");
const xp_text = document.getElementById("xp");
const xp_required_text = document.getElementById("xp_required");
const buymode_text = document.getElementById("buymode_text");
var money = 0;
var Tick = 1000;
let TickUplvl = 0;
let TickUpCost = 1000;

let mode = 0;

let xp = 1;
let maxxp= 10;
let xp_lvl = 0;

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
UpCostsMulti[0] = 1.04;
UpCostsMulti[1] = 1.09;
UpCostsMulti[2] = 1.15;
UpCostsMulti[3] = 1.22;

var upgrades;
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

function Money_Generator(){
  const initial = 0;
    upgrades = Ups.reduce((accumulator, currentValue) => accumulator + currentValue,
    initial);
    money_gen = upgrades * moneybooster;
    money += money_gen;
    formatMoney(money);
    Update();
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
    money_per_sec_text.textContent = formatMoney(upgrades);
    xp_lvl_text.textContent = xp_lvl;
    Xp_display(); 
}


setInterval(Update, 500); 
setInterval(Money_Generator, Tick);

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
  xp = 0;
  maxxp = 10;
  xp_lvl = 0;
  moneybooster = 1;
}