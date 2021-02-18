class Game{
    constructor(){
      
    }

    getState(){
     var gameStateRef = database.ref("gameState");
     gameStateRef.on("value",function (data){
      gameState = data.val();
     });
    }
    
    updateState(state){
     database.ref("/").update({
         gameState:state
     });
    }

    start(){
        if(gameState==0){
            player=new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        
        fill("blue");
        textSize(20);
        text("Game Start",120,100);

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
           var displayPosition = 130;

           for(var plr in allPlayers){
               displayPosition += 20;


               //console.log(plr);
               //console.log(player.index);

               if(plr === "player"+player.index){
               fill("red");
               }
               else{
                   fill("black")
               }
               text(allPlayers[plr].name+ " : "+ allPlayers[plr].distance,120,displayPosition);
           }
        }
        if(keyDown("up")&& player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}