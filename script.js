var fire=document.createElement ("button");
var ice=document.createElement ("button");
var poison=document.createElement ("button");
var dragonEle=document.createElement ("div");
var winnerEle=document.createElement ("div");
var dragonDamage=0;

fire.innerHTML="Fire Attack"
ice.innerHTML="Ice Attack"
poison.innerHTML="Poison Attack"
dragonEle.innerHTML="Dragon Damage: " + dragonDamage;
    
fire.addEventListener("click", function() { 
  attack(3, "fire");
});
ice.addEventListener("click", function() {
  attack(1, "ice");
});
poison.addEventListener("click", function(){
  attack(4, "poison");
});
 
  function attack(damage, attackType){
  if (attackType == "fire"); {
  dragonDamage= dragonDamage + (damage -1);
  } if (attackType == "ice") {
  dragonDamage=dragonDamage + (damage + 1);
  } else {
    dragonDamage= dragonDamage + damage;
  }
    
dragonEle.innerHTML = "Dragon Damage: " + dragonDamage;
if (dragonDamage >= 10){
  winnerEle.innerHTML = "You Win!";
 }
}  

document.body.appendChild(fire);
document.body.appendChild(poison);
document.body.appendChild(ice);
document.body.appendChild(dragonEle);
document.body.appendChild(winnerEle);