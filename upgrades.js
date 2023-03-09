function Upgrade1(){
    if(money >= Up1Cost){
        Up1lvl++;
        money -= Up1Cost;
        Up1Cost*= 1.5;
    }
}

function Upgrade2(){
    if(money >= Up1Cost){
        Up2lvl++;
        money -= Up2Cost;
        Up2Cost*=2.2;
        Up2 +=5;
    }
}

function TickUpgrade(){
    if(money >= TickUpCost){
        money -= TickUpCost;
        Tick -= 50;
    }
}