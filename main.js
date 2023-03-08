const money_text = document.getElementById("money_text");
const money_per_sec_text = document.getElementById("money_per_sec_text");
const cost_1_text = document.getElementById("cost_1_text");
const tick_text = document.getElementById("tick_text");
const lvl_1_text = document.getElementById("lvl_1_text");
const cost_2_text = document.getElementById("cost_2_text");
const lvl_2_text = document.getElementById("lvl_2_text");
var money = 0;
var Tick = 1000;
let TickUplvl = 0;
let TickUpCost = 1000;
let Up1lvl = 1;
let Up1Cost = 6;
let Up2Cost = 100;
let Up2lvl = 0;
let Up2 = 0;
let i = 0;
var upgrades;

function Money_Generator(){
    upgrades = Up1lvl + Up2;
    money += upgrades;
    Update();
}

function Update(){
    money_text.textContent = Math.round(money);
    money_per_sec_text.textContent = upgrades;
    cost_1_text.textContent = Math.round(Up1Cost);
    cost_2_text.textContent = Math.round(Up2Cost);
    tick_text.textContent = Tick/1000;
    lvl_1_text.textContent = Math.round(Up1lvl);
    lvl_2_text.textContent = Math.round(Up2lvl);
    
}


Update();
setInterval(Money_Generator, Tick);
