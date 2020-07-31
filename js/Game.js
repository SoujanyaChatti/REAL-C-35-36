class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
play(){
  form.hide();
  textSize(35);
  text("The Game Has Started",100,100);
  Player.playerdata();
  if(playerdata!=undefined){
    var position=250;
    for(var pld in playerdata){
      if(pld==="player"+player.index){
        fill("violet");

      }
      else{
        fill("green");
      }
      position+=50;
      textSize(20);
      text(playerdata[pld].name+"="+playerdata[pld].distance,200,position);
    }
  }
  if(keyIsDown(UP_ARROW)&&player.index!=null){
    player.distance+=60;
    player.update();
  }
}
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
}
