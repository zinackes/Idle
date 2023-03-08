let money_class = document.querySelector(".money_update");
let moneypersecond_class = document.querySelector(".moneypersecond_update");
let Upgrade1Cost_class = document.querySelector(".Upgrade1Cost");
let Upgrade1AutoCost_class = document.querySelector("Upgrade1AutoCost");
let Money = 0;
let Upgrade1 = 1;
let Upgrade1Cost = 10;
let Upgrade1Auto = 0;
let Upgrade1AutoCost = 100;
let Tick = 1000;
let TickMultiplier = 1;
let Upgrades = Upgrade1;


function Update(Class_name, Element_Update, Class_name2, Element_Update2){
    Class_name.textContent = Element_Update;
    Class_name2.textContent = Element_Update2;

}

function money_(){
    Money += Upgrades;
    money_class.textContent = Money;
    moneypersecond_class.textContent = Upgrades * TickMultiplier;
}

function Upgrade1_(){
    if (Money >= Upgrade1Cost){
        Money -= Upgrade1Cost;
        Upgrade1++;
        Upgrade1Cost *= 2;
    }
    Update(money_class, Money, Upgrade1Cost_class, Upgrade1Cost);
    moneypersecond_class.textContent = Upgrades * TickMultiplier;
}

function Upgrade1Auto_(){
    if (Money >= Upgrade1AutoCost){
        Money -= Upgrade1AutoCost;
        Upgrade1Auto++;
        Upgrade1AutoCost *= 4;
    }
}

function Upgrade1Auto_Production(){
    Upgrade1 += Upgrade1Auto;
}


Upgrade1_();
let MoneyPerSecond = setInterval(money_, Tick);
let Upgrade1AutoPerSecond = setInterval(Upgrade1Auto_Production, Tick);



