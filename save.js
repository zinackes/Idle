function saveData(){
    const saveObject = {
        money: money,
        Ups,
        upLvls,
        upCosts,
        xp,
        maxxp,
        xp_lvl,
        moneybooster,
    };

    const saveString = JSON.stringify(saveObject);
    
    localStorage.setItem("saveData", saveString);
    
    console.log("Données sauvegardées!");
}

function loadData() {
    // Récupérer la chaîne JSON depuis le stockage local
    const saveString = localStorage.getItem("saveData");
    
    // Si la chaîne JSON existe, la convertir en objet et charger les données
    if (saveString) {
      const saveObject = JSON.parse(saveString);
      money = saveObject.money;
      Ups = saveObject.Ups;
      upLvls = saveObject.upLvls;
      upCosts = saveObject.upCosts;
      xp = saveObject.xp;
      maxxp = saveObject.maxxp;
      xp_lvl = saveObject.xp_lvl;
      moneybooster = saveObject.moneybooster;

      console.log("Données chargées !");
    } else {
      console.log("Aucune donnée sauvegardée.");
    }
  }
  
  // Appeler la fonction de chargement des données au démarrage du jeu
  loadData();
  
  // Appeler la fonction de sauvegarde automatique toutes les 10 secondes
  setInterval(saveData, 10000);