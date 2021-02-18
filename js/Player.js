class Player{
    constructor(){
      this.name = null;
      this.distance = 0;
      this.index = null;
    }

    update(){
      database.ref("players/player"+ this.index).set({
          name:this.name,
          distance:this.distance
      })
    }

    updateCount(count){
      database.ref("/").update({
        playerCount : count
      });
    }

    getCount(){
     var playerCountRef = database.ref("playerCount");
     playerCountRef.on("value",function(data){
         playerCount=data.val();
     })
    }

    static getPlayerInfo(){
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value",function(data){
        //console.log(data.val())
      allPlayers = data.val();
      });
    }
}