let LvlRewards = [0, 0.04,]

let moneybooster = 1;

function plusxp(){
    xp++;
    Xp_display();
  }
  
async function Xp_display(){
    xp_text.textContent = xp;
    xp_required_text.textContent = maxxp;
    xp_bar.style.width = ((xp/maxxp)*100) + "%";
    if(xp >= maxxp){
      xp -= maxxp;
      await delay(100);
      xp_bar.style.width = ((xp/maxxp)*100) + "%";
      xp_lvl++;
      maxxp*=2;
      Lvl_reward();
    }
  
}

function Lvl_reward(){
    let last_element = LvlRewards.slice(-1).pop() + 0.04;
    moneybooster = LvlRewards[xp_lvl];
    LvlRewards.push(last_element);
    console.log(LvlRewards);
    console.log(Math.round(moneybooster));
}