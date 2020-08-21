class Game{
constructor(){


}
getState() {
var gameStateref = database.ref("gameState");
gameStateref.on("value",function(data){
    gameState = data.val();
})    
}
update(state){
database.ref('/').update({
gameState: state    
})
}
start(){
if(gameState === 0){
    player = new Player();
    player.getCount();
    form = new Form();
    form.display();
}    
}
play(){
form.hide();
text("Game Start!",200,200);
Player.getplayerinfo();

if(allplayers !== undefined){
var diplaypos = 200;

for(var plr in allplayers){
    if(plr === "player"+player.index){
     fill("red");
   
    }
    else{
        fill("green"); 
    }
     displaypos +=20;
     text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,displaypos)
}



}
if(keyDown("UP_ARROW") && player.index !== null){
player.distance+=50;
player.update();
}



}
}
