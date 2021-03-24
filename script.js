var wrapper = document.querySelector(".wrapper");
var Ddamage = 0;
var dragonEle =document.createElement("div");

dragonEle.innerHTML= "Dragon Damage: "+Ddamage;

var winEle =document.createElement("div");
  

function DragonDamage(damage, type){
    if(type== "fire"){
      Ddamage= Ddamage +(damage-1);
    }
    if(type == "ice"){
      Ddamage = Ddamage +(damage+1);
    }
    if(type == "poison"){
      Ddamage= Ddamage + damage;
    }
dragonEle.innerHTML= "Dragon Damage: "+Ddamage;
  if( Ddamage>=10){
 winEle.innerHTML="You win!";
}
  }
document.body.querySelector(".fbutton").addEventListener("click",function(){
  DragonDamage(3,"fire")
});
document.body.querySelector(".ibutton").addEventListener("click",function(){
  DragonDamage(1,"ice")
});
 document.body.querySelector(".pbutton").addEventListener("click",function(){
  DragonDamage(4,"poison")
 });

 document.body.appendChild(dragonEle)
 document.body.appendChild(winEle)