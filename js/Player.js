class Player {
  constructor(){
    this.name=null;
    this.distance=0;
    this.index=0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" +this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static playerdata(){
    var players=database.ref('players');
    players.on("value",(data)=>{
      playerdata=data.val();
    })
  }
}