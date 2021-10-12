class Form {
    constructor(){
        this.title = createElement("h2")
        this.input = createInput("name")
        this.button = creatButton("play")
        this.greeting = createElement("h2")
    }
    hide(){
        this.greeting.hide()
        this.title.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        this.title.html("Multi-SHOOTER");
        this.title.position(displayWidth/2-50,0);

        this.input.position(displayWIdth/2-40,displayHeight/2-80)
        this.button.position(displayWIdth/2+30,displayHeight/2)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount);
            
            this.greeting.html("hello "+player.name)
            this.greeting.position(displayWIdth/2-70,displayHeight/4)
        });

    }
}
