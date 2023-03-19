let LvlRewards = 0.04;
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
    moneybooster += LvlRewards;
    console.log(LvlRewards);
    console.log(moneybooster);
}