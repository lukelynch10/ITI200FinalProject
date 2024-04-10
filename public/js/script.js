"use strict";
//variables
let characterName = "";
let healthPoints = 100;
let turnCounter = 0;
let damageMultiplier = 1;
let runCount = 0;
//functions

//random number generators 
function randomNum() {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 20) + 1;
    return randomNumber;
}

function battleDamage() {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * 15) + 1;
  return randomNumber;
}

// switch statement to give scenario based on random number
function scenarios(randomNum){
  switch(randomNum) {
      case 1:
        
        $("#scenarioNum").text("You come across a fork in the road, the first path stays wide and clear, the second is small and covered in foliage, which do you continue down") //first path is less danger but less reward
      break;
      case 2:
        
        $("#scenarioNum").text("you come across a bandit looking for trouble, what do you do")//puts you straight into combat
      break;
      case 3:
        
        $("#scenarioNum").text("along your path you find a nice place to rest")//gain some amount of hp or carry on

      break;
      case 4:
       
        $("#scenarioNum").text("there seems to be an older fellow that seems to be transporting something")// (you can attack them for something or leave them be not sure on downside yet)
      break;
      case 5:
        
        $("#scenarioNum").text("you come across a troll, looks like you wandered too close to its den, what do you do")  
      break;
      case 6:
        
        $("#scenarioNum").text("you see a stray dog in the distance, what do you do")//ignore it nothing happens or try and befrend it which can fail and lead to a fight or lead to a companion to help in fights
      break;
      case 7:
        
        $("#scenarioNum").text("you find some large roots and foliage blocking your path what do you do ")//(you can force your way through and lose some hp or go another way which raises odds of danger) 
      break;
      case 8:
        
        $("#scenarioNum").text("the hot sun beams down on you durring your journey, what do you do")//rest but make little/no progress or push on and lose some atk power
      break;
      case 9:
        
        $("#scenarioNum").text("a large cave spider blocks your way, but it doesnt seem aggressive, what do you do")//attack it or try and move past it, if it notices you it starts combat and gets a free attack first  
      break;
      case 10:
       
        $("#scenarioNum").text("a traveling salesman crosses your path, what do you do")//you can buy stuff but this would require a gold system
      break;
      case 11:
        
        $("#scenarioNum").text("you come across a corpse, it seems to still have some valuables, what do you do")//you have a chance to get items or trigger fighting a zombie
      break;
      case 12:
        
        $("#scenarioNum").text("as you carry on you walk past a few strangers but nothing seems out of the ordinary, what do you do")//you can do nothing but they can pickpocket you, or you can go alert and if they pickpocket you it starts a fight
      break;
      case 13:
        
        $("#scenarioNum").text("a small child comes up to you asking for spare change or food, what do you do")//if you give them something nothing happens if you dont its an aparation from a mage that you then fight
      break;
      case 14:
        
        $("#scenarioNum").text("you come across a small lake, what do you do")//rest to gain hp, investigate to possibly find items, carry on for more progress
      break;
      case 15:
        
        $("#scenarioNum").text("you come across a small slime minding its own buisness on the side of the trail, what do you do")//you can kill it for something or leave it be
      break;
      case 16:
        
        $("#scenarioNum").text("you thing you saw that same tree one too many times, you think you may be lost, what do you do")//stay on the same path, turn around, or try a new path random result on progress, can be - but prob net positive
      break;
      case 17:
        
        $("#scenarioNum").text("a goblin jumps out of the bushes trying to take your money and life")//it gets a free attack in but is weaker than other enemies
      break;
      case 18:
        
        $("#scenarioNum").text("you come across a shrine to a familiar god, what do you do")//pray for better luck on next encounter, nothing for more progress
      break;
      case 19:
       
        $("#scenarioNum").text("nothing out of the ordinary seems to happen")  
      break;
      case 20:
        
        $("#scenarioNum").text("you find a strange potion that seems to have fell off a cart, what do you do")//nothing, drink it if you do you can be healed or speed you up or damage you or slow you down
      break;
      default:
        console.log("default")
    }
    
}

//jquery
$("#Continue").hide();
$("#fight").hide();
$("#run").hide();
$("#playerStatus").hide();
$("#scenarios").hide();
$("#enterName").hide();
$("#scoresTable").hide();

$(function(){
  $("#leaderboard").click(function(){
    $("#playnow").hide();
    $("#leaderbutton").hide();
    $("#enterName").hide();
    $("#scoresTable").show();
    })
  });

$(function(){
  $("#playnow").click(function(){
    scenarios(randomNum());
    $("#playnow").hide();
    $("#fight").show();
    $("#run").show();
    $("#playerStatus").show();
    $("#scenarios").show();
    $("#leaderboard").hide();
    
    turnCounter++;
    })
  });

  // $(function(){
  //   $("#Continue").click(function(){
  //     scenarios(randomNum());
  //     turnCounter++;
  //     // end game when turns reach zero
  //     if (turnCounter === 10 || healthPoints === 0){
  //       $("#Continue").hide();
  //       $("#fight").hide();
  //       $("#run").hide();
  //     };  
  //   })
  //   });

    $(function(){
      $("#fight").click(function(){
        scenarios(randomNum());
        healthPoints -= damageMultiplier * battleDamage();
        $("#healthText").text(healthPoints);
        turnCounter++;
        if (turnCounter === 10 || healthPoints <= 0){
          $("#Continue").hide();
          $("#fight").hide();
          $("#run").hide();
          $("#scenarios").hide();
          $("#enterName").show();
          $("#leaderboard").show();
        };
        if(runCount === 4){
          $("#run").hide();
          $("#enterName").show();
          $("#leaderboard").show();
        } 
        })
      });

      $(function(){
        $("#run").click(function(){
          scenarios(randomNum());
          damageMultiplier *= 2;
          turnCounter++;
          runCount++;
        if (turnCounter === 10 || healthPoints <= 0){
          $("#Continue").hide();
          $("#fight").hide();
          $("#run").hide();
          $("#scenarios").hide();
          $("#enterName").show();
          $("#leaderboard").show();
        }; 
        if(runCount === 4){
          $("#run").hide();
          $("#enterName").show();
          $("#leaderboard").show();
        };
          })
        });

// RESTful 
//display sql data 
$(function(){
  $.get("/game", function(response){
    const table = response;
    // console.log(table.sort());
    const tableSorted = table.sort(function(a, b){return b.score - a.score});
    for(let i = 0; i< 10; i++){
      console.log(tableSorted[i]);
      //generate html
      $(function(){
        $("#tablecontents").append("<tr><td>" + tableSorted[i].username + "</td><td>" + tableSorted[i].score + "</td></tr>")
      });
        
    }
    console.log(tableSorted[1].username)
     })
})



// save to sql 
$(function(){
  
  $("form").submit(function(){
     
      return false;
  });
});

$(function(){
  
  $("form").submit(function(){
     
      const data = {
        name: $("#name").val(),
        score: healthPoints
         
      }

      $.post( "/game", data, function( data ) {
          console.log("Done");
      });

      return false;
  });
});


