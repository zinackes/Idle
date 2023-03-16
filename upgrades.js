let milestones = [10, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000
, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500,
8000, 8500, 9000, 9500, 10000, 20000,];

let milestoneRewards = [1, 2, 4, 8, 15, 25, 45, 80, 150, 300, 500, 500, 500
, 500, 500, 500];


let cost = 0;


function TickUpgrade(){
    if(money >= TickUpCost){
        money -= TickUpCost;
        Tick -= 50;
    }
}

function rewardPlayerForMilestone(index) {
    let lastUpgrades = new Array(upLvls.length).fill(0);
    for (let i = 0; i < milestones.length; i++) {
      if (upLvls[index] >= milestones[i] && lastUpgrades[index] < milestones[i]) {
        xp += milestoneRewards[i];
        lastUpgrades[index] = milestones[i];
        console.log("test");
      }
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
      Ups[index] += n * UpPowers[index]; // mettre à jour la puissance des améliorations
      money -= cost; // soustraire le coût total de l'argent disponible
      upCosts[index] *= Math.pow(UpCostsMulti[index], n); // mettre à jour le coût de l'amélioration
      SetbuyMode(buyMode);
      rewardPlayerForMilestone(index);
    }
}

function SetbuyMode(mode){
    for (let i = 0; i < nbUpgrades; i++){
        const upbox = document.getElementById(`upbox${i+1}`);
        const cost_text = document.getElementById(`cost_${i+1}_text`);
        const power_text = document.getElementById(`power_${i+1}_text`);
        const lvl_text = document.getElementById(`lvl_${i+1}_text`);
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
        power_text.textContent = "+" + formatMoney(UpPowers[i] * n);
        lvl_text.textContent = formatMoney(upLvls[i]) + " (+" + n + ")";

        if (money > cost && n != 0) {
            upbox.classList.add("available");
            upbox.classList.remove("not");
        } else {
              upbox.classList.remove("available");
              upbox.classList.add("not");
        }
    }
}


setInterval(function() {
    if(n ==1){
        SetbuyMode(0);
    }
    if(n ==10){
        SetbuyMode(1);
    }
    if(n ==100){
        SetbuyMode(2);
        rewardPlayerForMilestone(2);
    }
    if(n != 1 && n != 10 && n != 100){
        SetbuyMode(3);
        rewardPlayerForMilestone(3);
    }
}, 1000)
addEventListener("load", (SetbuyMode(0)));