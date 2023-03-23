let milestones = [10, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000
, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500,
8000, 8500, 9000, 9500, 10000, 20000, 30000, 40000, 50000];

let milestone_number = [0,0,0,0];

let milestoneRewards = [1, 2, 4, 8, 15, 25, 45, 80, 150, 300, 500, 500, 500
, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 
500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500
, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500];


let cost = 0;
let xp_milestone = [0,0,0,0];
let maxxp_milestone = [0,0,0,0];
let maxxp_milestone_bar = [10,10,10,10];


function TickUpgrade(){
    if(money >= TickUpCost){
        money -= TickUpCost;
        Tick -= 50;
    }
}




function buyUpgrades(index, buyMode) {
    let b = upCosts[index]; // prix de base de l'amélioration
    let r = UpCostsMulti[index]; // augmentation de prix à chaque achat
    let k = upLvls[index]; // niveau actuel de l'amélioration
    let n = 0; // quantité d'améliorations à acheter
    switch (buyMode) {
      default:
        n = 1; //x1
        break;
      case 1: // x10
        n = 10;
        break;
      case 2: // x100
        n = 100;
        break;
      case 3: // achat maximum possible
        let c = money; // argent disponible pour les achats
        n = Math.floor(Math.log(c * (r - 1) / (b * Math.pow(r, k)) + 1) / Math.log(r)); // quantité maximale d'améliorations pouvant être achetées avec l'argent disponible
    }
    cost = b * (Math.pow(r, k) * (Math.pow(r, n) - 1) / (r - 1)); // coût total pour acheter la quantité d'améliorations calculée

    if (money >= cost) {
      upLvls[index] += n; // ajouter la quantité d'améliorations achetées
      Ups[index] += n * (UpPowers[index] * moneybooster); // mettre à jour la puissance des améliorations
      money -= cost; // soustraire le coût total de l'argent disponible
      SetbuyMode(buyMode);
      xp_milestone[index]+= n;
      for(let i = 0; i < milestones.length; i++){
          if(upLvls[index] >= milestones[milestone_number[index]]){
              milestone_number[index]++; //Nombre du milestone ++
              xp_milestone[index] -= maxxp_milestone_bar[index]; //Xp du milestone - l'xp max de la bar de progression
              maxxp_milestone_bar[index] = milestones[milestone_number[index]]-milestones[milestone_number[index]-1];
              maxxp_milestone[index] = milestones[milestone_number[index]];
              const upbox = document.getElementById(`upbox${index+1}`);
              milestoneRewards[milestone_number[index]]
              console.log(milestoneRewards[milestone_number[index]]);
              upbox.classList.add("shadow_" + index + "_" + milestone_number[index]);
            }
        }
        const milestone_bar = document.getElementById(`milestone_bar_${index+1}`);
        const milestone_maxxp_text = document.getElementById(`milestone_maxxp_text_${index+1}`);
        milestone_bar.style.width = ((xp_milestone[index]/maxxp_milestone_bar[index])*100) + "%";
        milestone_maxxp_text.textContent = maxxp_milestone[index];
        if(maxxp_milestone[index] == 0){
            maxxp_milestone[index] = 10;
        }
        XpMilestone(index, i);
    }
}
function SetbuyMode(mode){
    for (let i = 0; i < nbUpgrades; i++){
        const upbox = document.getElementById(`upbox${i+1}`);
        const cost_text = document.getElementById(`cost_${i+1}_text`);
        const power_text = document.getElementById(`power_${i+1}_text`);
        const lvl_text = document.getElementById(`lvl_${i+1}_text`);
        const lvl_gain_text = document.getElementById(`lvl_${i+1}_gain`);
        index = i;
        let b = upCosts[index]; // prix de base de l'amélioration
        let r = UpCostsMulti[index]; // augmentation de prix à chaque achat
        let k = upLvls[index]; // niveau actuel de l'amélioration
        switch(mode) {
            case 0:
                upbox.setAttribute("onclick", "buyUpgrades(" + i + ", 0)");
                n = 1; // quantité d'améliorations à acheter
                break;
            case 1:
                upbox.setAttribute("onclick", "buyUpgrades(" + i + ", 1)");
                n = 10; // quantité d'améliorations à acheter
                break;
            case 2:
                upbox.setAttribute("onclick", "buyUpgrades(" + i + ", 2)");
                n = 100; // quantité d'améliorations à acheter
                break;
            case 3:
                upbox.setAttribute("onclick", "buyUpgrades(" + i + ", 3)");
                let c = money; // argent disponible pour les achats
                n = Math.floor(Math.log(c * (r - 1) / (b * Math.pow(r, k)) + 1) / Math.log(r));
                break;
        }
        cost = b * (Math.pow(r, k) * (Math.pow(r, n) - 1) / (r - 1));
        cost_text.textContent = formatMoney(cost);
        power_text.textContent = "+" + formatMoney((UpPowers[i]*((IndividualBoost[i]*+GlobalBoost)*moneybooster)) * n);
        lvl_text.textContent = formatMoney(upLvls[i]);
        lvl_gain_text.textContent = "(+" + formatMoney(n) + ")";
    }
}

function XpMilestone(index, i){
}

setInterval(function() {
    if(n ==1){
        SetbuyMode(0);
        console.log();
    }
    else if(n ==10){
        SetbuyMode(1);
    }
    else if(n ==100){
        SetbuyMode(2);
    }
}, 1000);

addEventListener("load", function(){
    SetbuyMode(0);
    XpMilestone(index, i);
    for(let i = 0; i < nbUpgrades; i++){
        const milestone_bar = document.getElementById(`milestone_bar_${i+1}`);
        const milestone_maxxp_text = document.getElementById(`milestone_maxxp_text_${i+1}`);
        milestone_maxxp_text.textContent = maxxp_milestone[i];
        milestone_bar.style.width = ((xp_milestone[i]/maxxp_milestone[i])*100) + "%";
        if(maxxp_milestone[i] == 0){
            maxxp_milestone[i] =10;
          }

    }
});