class Form{
    constructor(){
        this.input = createInput("name");

        this.button = createButton("play");

        this.greeting = createElement("h3");

    }

    hide(){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        this.input.position(130,160);

        //var button = createButton("play");
        this.button.position(250,200);

        //var greeting = createElement("h3");

        this.button.mousePressed(()=>{
         this.input.hide();
         this.button.hide();
         var name = this.input.value();
         player.name = name;
         this.greeting.html("Hello "+name);
         this.greeting.position(130,160);

         playerCount++;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
        });
    }
}