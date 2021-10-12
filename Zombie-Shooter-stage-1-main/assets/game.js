class Game{
    constructor(){

    }
    getState(){
        var gameStateREF = database.ref('gameState')
        gameStateREF.on("value",(data)=>{
            gameSate = data.val()
        })

    }
    update(State){
        database.ref('/').update({
            gameState:State
        })
    }
    
}
