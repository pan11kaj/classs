class Form{
constructor(){
  this.input = createInput("name");
  this.button = createButton("play");
  this.greeting = createElement("h4");

}
hide(){
  this.input.hide();
  this.button.hide();  
  this.greeting.hide();
}
display(){
var title = createElement("h3");
title.html("car racing game");
title.position(300,40);
this.input.position(300,200);
this.button.position(300,300);


this.button.mousePressed(()=>{
  this.input.hide();
  this.button.hide();  
  
  player.name = this.input.value();
  playerCount+=1;
  player.index = playerCount;
  player.update();
  player.updateCount(playerCount);
  this.greeting.html("hello"+player.name);
  this.greeting.position(300,200);
  
});

}



}
 











