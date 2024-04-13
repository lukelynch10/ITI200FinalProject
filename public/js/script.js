"use strict";
//variables
let characterName = "";
let healthPoints = 100;
let turnCounter = 0;
let damageMultiplier = 1;
let runCount = 0;
let scenarioDamage = 10;
let fightProgress = 1;
let runProgress = 1;
//functions

//random number generators 
function randomNum() {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * 20) + 1;
  return randomNumber;
}

function battleDamage() {
  return scenarioDamage *= 2;
}

// switch statement to give scenario based on random number
function scenarios(randomNum) {
  switch (randomNum) {
    case 1:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario1.png";
      $("#scenarioNum").text("You come across a fork in the road, the first path stays wide and clear, the second is small and covered in foliage, which do you continue down") //first path is less danger but less reward
      scenarioDamage = 8;
      fightProgress = .7;
      runProgress = 1.2;
      $("#fight").text("foliage");
      $("#run").text("wide and clear");
      break;
    case 2:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario2.png";
      $("#scenarioNum").text("you come across a bandit looking for trouble, what do you do")//puts you straight into combat
      scenarioDamage = 15;
      fightProgress = 1;
      runProgress = .5;
      $("#fight").text("fight");
      $("#run").text("run");
      break;
    case 3:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario3.png";
      $("#scenarioNum").text("along your path you find a nice place to rest")//gain some amount of hp or carry on
      scenarioDamage = -7;
      fightProgress = .5;
      runProgress = 1;
      $("#fight").text("rest");
      $("#run").text("carry on");
      break;
    case 4:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario4.png";
      $("#scenarioNum").text("there seems to be an older fellow that seems to be transporting something")// (you can attack them for something or leave them be not sure on downside yet)
      scenarioDamage = 9;
      fightProgress = 1;
      runProgress = .7;
      $("#fight").text("attack");
      $("#run").text("leave him be");
      break;
    case 5:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario5.png";
      $("#scenarioNum").text("you come across a troll, looks like you wandered too close to its den, what do you do")
      scenarioDamage = 20;
      fightProgress = 2;
      runProgress = 1;
      $("#fight").text("fight");
      $("#run").text("run");
      break;
    case 6:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario6.png";
      $("#scenarioNum").text("you see a stray dog in the distance, what do you do")//ignore it nothing happens or try and befrend it which can fail and lead to a fight or lead to a companion to help in fights
      scenarioDamage = 0;
      fightProgress = 1;
      runProgress = 1;
      $("#fight").text("ignore");
      $("#run").text("approach");
      break;
    case 7:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario7.png";
      $("#scenarioNum").text("you find some large roots and foliage blocking your path what do you do ")//(you can force your way through and lose some hp or go another way which raises odds of danger) 
      scenarioDamage = 9;
      fightProgress = 1.2;
      runProgress = .7;
      $("#fight").text("push through");
      $("#run").text("find another way");
      break;
    case 8:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario8.png";
      $("#scenarioNum").text("the hot sun beams down on you durring your journey, what do you do")//rest but make little/no progress or push on and lose some atk power
      scenarioDamage = 10;
      fightProgress = 1.3;
      runProgress = .8;
      $("#fight").text("push through it");
      $("#run").text("rest for a bit");
      break;
    case 9:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario9.png";
      $("#scenarioNum").text("a large cave spider blocks your way, but it doesnt seem aggressive, what do you do")//attack it or try and move past it, if it notices you it starts combat and gets a free attack first  
      scenarioDamage = 17;
      fightProgress = 1.5;
      runProgress = .9;
      $("#fight").text("fight");
      $("#run").text("sneak past");
      break;
    case 10:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario10.png";
      $("#scenarioNum").text("a traveling salesman crosses your path, what do you do")//you can buy stuff but this would require a gold system
      scenarioDamage = -4;
      fightProgress = .8;
      runProgress = 1;
      $("#fight").text("barter");
      $("#run").text("ignore");
      break;
    case 11:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario11.png";
      $("#scenarioNum").text("you come across a corpse, it seems to still have some valuables, what do you do")//you have a chance to get items or trigger fighting a zombie
      scenarioDamage = -6;
      fightProgress = .6;
      runProgress = 1;
      $("#fight").text("loot it");
      $("#run").text("leave it");
      break;
    case 12:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario12.png";
      $("#scenarioNum").text("as you carry on you walk past a few strangers but nothing seems out of the ordinary, what do you do")//you can do nothing but they can pickpocket you, or you can go alert and if they pickpocket you it starts a fight
      scenarioDamage = 4;
      fightProgress = 1.1;
      runProgress = .9;
      $("#fight").text("do nothing");
      $("#run").text("stay alert");
      break;
    case 13:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario13.png";
      $("#scenarioNum").text("a small child comes up to you asking for spare change or food, what do you do")//if you give them something nothing happens if you dont its an aparation from a mage that you then fight
      scenarioDamage = 5;
      fightProgress = 1.3;
      runProgress = 1;
      $("#fight").text("give rations");
      $("#run").text("ignore");
      break;
    case 14:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario14.png";
      $("#scenarioNum").text("you come across a small lake, what do you do")//rest to gain hp, investigate to possibly find items, carry on for more progress
      scenarioDamage = -5;
      fightProgress = .6;
      runProgress = 1;
      $("#fight").text("rest");
      $("#run").text("carry on");
      break;
    case 15:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario15.png";
      $("#scenarioNum").text("you come across a small slime minding its own buisness on the side of the trail, what do you do")//you can kill it for something or leave it be
      scenarioDamage = 12;
      fightProgress = 1.3;
      runProgress = 1;
      $("#fight").text("fight");
      $("#run").text("leave it be");
      break;
    case 16:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario16.png";
      $("#scenarioNum").text("you thing you saw that same tree one too many times, you think you may be lost, what do you do")//stay on the same path, turn around, or try a new path random result on progress, can be - but prob net positive
      scenarioDamage = 0;
      fightProgress = Math.round((.5 + Math.random()) * 100) / 100;
      runProgress = Math.round((.5 + Math.random()) * 100) / 100;
      $("#fight").text("left?");
      $("#run").text("right?");
      break;
    case 17:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario17.png";
      $("#scenarioNum").text("a goblin jumps out of the bushes trying to take your money and life")//it gets a free attack in but is weaker than other enemies
      scenarioDamage = 10;
      fightProgress = 1.2;
      runProgress = .9;
      $("#fight").text("fight");
      $("#run").text("run");
      break;
    case 18:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario18.png";
      $("#scenarioNum").text("you come across a shrine to a familiar god, what do you do")//pray for better luck on next encounter, nothing for more progress
      scenarioDamage = -6;
      fightProgress = .8;
      runProgress = 1;
      $("#fight").text("pray");
      $("#run").text("carry on");
      break;
    case 19:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario19.png";
      $("#scenarioNum").text("nothing out of the ordinary seems to happen")
      scenarioDamage = 0;
      fightProgress = 1;
      runProgress = 1;
      $("#fight").text("enjoy the flowers");
      $("#run").text("enjoy the breeze");
      break;
    case 20:
      var imgElement = document.getElementById("scenarioImg");
      imgElement.src = "/assets/images/scenario20.png";
      $("#scenarioNum").text("you find a strange potion that seems to have fell off a cart, what do you do")//nothing, drink it if you do you can be healed or speed you up or damage you or slow you down
      scenarioDamage = Math.round((Math.random() * 10));
      fightProgress = Math.round((.7 + Math.random()) * 100) / 100;
      runProgress = 1;
      $("#fight").text("drink it");
      $("#run").text("leave it");
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

$(function () {
  $("#leaderboard").click(function () {
    $("#playnow").hide();
    $("#leaderbutton").hide();
    $("#enterName").hide();
    $("#scoresTable").show();
  })
});

$(function () {
  $("#playnow").click(function () {
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

$(function () {
  $("#fight").click(function () {
    let scenarioNum = randomNum();
    console.log("scenarioNum: " + scenarioNum + " battleDamage: " + battleDamage() + " fightProgress" + fightProgress);
    healthPoints -= damageMultiplier * battleDamage();
    $("#healthText").text(healthPoints);
    turnCounter += fightProgress;
    if (turnCounter >= 10 || healthPoints <= 0) {
      $("#Continue").hide();
      $("#fight").hide();
      $("#run").hide();
      $("#scenarios").hide();
      $("#enterName").show();
      $("#leaderboard").show();
    };
    if(runCount >= 4){
      $("#run").hide();
    }
    scenarios(scenarioNum);
  })
});

$(function () {
  $("#run").click(function () {
    let scenarioNum = randomNum();
    console.log("scenarioNum: " + scenarioNum + " battleDamage: " + battleDamage() + " fightProgress" + runProgress);
    turnCounter += runProgress;
    runCount++;
    if (turnCounter >= 10 || healthPoints <= 0) {
      $("#Continue").hide();
      $("#fight").hide();
      $("#run").hide();
      $("#scenarios").hide();
      $("#enterName").show();
      $("#leaderboard").show();
    };
    if(runCount >= 4){
      $("#run").hide();
    }
    scenarios(scenarioNum);
  })
});

// RESTful 
//display sql data 
$(function () {
  $.get("/game", function (response) {
    const table = response;
    // console.log(table.sort());
    const tableSorted = table.sort(function (a, b) { return b.score - a.score });
    for (let i = 0; i < 10; i++) {
      console.log(tableSorted[i]);
      //generate html
      $(function () {
        $("#tablecontents").append("<tr><td>" + tableSorted[i].username + "</td><td>" + tableSorted[i].score + "</td></tr>")
      });

    }
    console.log(tableSorted[1].username)
  })
})



// save to sql 
$(function () {

  $("form").submit(function () {

    return false;
  });
});

$(function () {

  $("form").submit(function () {

    const data = {
      name: $("#name").val(),
      score: healthPoints

    }

    $.post("/game", data, function (data) {
      console.log("Done");
    });

    return false;
  });
});

