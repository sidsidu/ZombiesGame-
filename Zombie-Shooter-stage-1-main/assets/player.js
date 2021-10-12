class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.score = 0;
    }
    
    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            score:this.score
        })

    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    getCount(){
        var playerCountREF = database.ref('playerCount');
        playerCountREF.on("value",(data)=>{
            playerCount = data.val()
        })
    }
    static getplayerinfo(){
        var playerinfoREF = database.ref('players')
        playerinfoREF.on("value",(data)=>{
            allPlayers = data.val()
        })
    }
}