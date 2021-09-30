/* Tomagotchi Game Build */

console.log("Tomagotchi Initiated!");

/*

=== Timeline ===
Tuesday: Finish planning, build repo, set up static site; start building objects
Wednesday: Set up timers
Thursday: Styling & timers
Friday: 10:00 am deployment





=== User Stories ===

User is greeted with a modal stating "Your new kitten is so happy to meet you! What are you going to name it?" with a textbox to enter cat's name.
Modal disappears and the user appears at a screen with a kitten in the middle, status indicators of hungry, sleepy, and bored set to zero, the cat's name and age (also set to zero), and three action buttons that say feed me, nap time, and let's play.
Cat's age increases by one year every 10 seconds.
Hunger status increases by one point every 1.25 seconds
Sleepiness status increases by one point every 2.5 seconds
Boredom status increases by one point every 1.75 seconds
When feed action is clicked, hunger status decreases by 1
When turn off lights action is clicked, sleepiness status decreases by 1
When play action is clicked, boredom status decreases by 1

Cat mood will change image based on status levels. Whenever any status reaches 8, cat will be grumpy (animate to hiss/growl). Whenever all statuses are at 0, cat will be happy (cuddle/loving).

Cat image will change to reflect age when cat reaches 2 (from kitten to adult) and 14 years (from adult to old)

Game ends when any of the status levels reaches 10, or cat age reaches 20
Basic: Modal pops us to tell user "[cat name] has died of [old age, hunger, boredom, exhaustion]"
    - Ice-box:
    === If any status level reaches 10, modal pops up to tell user  "GAME OVER. [cat name] ran away to find a new family!"
    === If cat age reaches 20, modal pops up to tell user "You provided [cat name] with a good life, but now it's time to cross the rainbow bridge"
## **Icebox**
  - If status levels reach 10, cat runs away and finds a new owner; if age reaches 20, cat goes to kitty heaven
  - Feed and play actions randomly select different elements (feed: kibble, fish, lasagna) (play: mouse on string, laser light, catnip time)
  - Select cat gender/pronouns
  - Status bars change color based on current value: 0-4 green, 5-7 goldenrod, 8-10 red */



const game = {
    /* === Game Values === */
  name: null,
  age: 0,
  hunger: 0,
  sleepy: 0,
  boredom: 0,
  button: [$("submitName"), $("#feedMe"), $("#nap"), $("#play")],
  image: "kitten",

  /* === Game Logic === */
  
  
  start(event){
    console.warn("=== Keep your precious kitty alive! ===")
    $("#name").text($("#nameInput").val());
    $("#ageStatement").css("visibility", "visible");
    $("#modal").css("visibility", "hidden");
    this.startAgeTimer();
    this.startHungerTimer();
    this.startSleepyTimer();
    this.startBoredomTimer();
  },

  /* === Timers === */
  ageTimer: null,
  startAgeTimer() {
    this.ageTimer = setInterval(this.increaseAge.bind(game), 6000)
  },

  increaseAge() {
    this.age++ ;
    $("#catAge").text(game.age);
    if (this.age >= 20) {
      this.gameOver();
      console.log("Game Over - your cat lived a long happy life and has crossed the rainbow bridge");
    };
  },

  hungerTimer: null,
  startHungerTimer() {
    this.hungerTimer = setInterval(this.increaseHunger.bind(game), 1250)
  },

  increaseHunger() {
    this.hunger++ ;
    $("#hunger").val(game.hunger);
    if (this.hunger >= 10) {
      this.gameOver();
      console.log("Game Over - your cat found a new home");
    };
  },

  sleepyTimer: null,
  startSleepyTimer() {
    this.sleepyTimer = setInterval(this.increaseSleepy.bind(game), 2500)
  },

  increaseSleepy() {
    this.sleepy++ ;
    $("#sleepy").val(game.sleepy);
    if (this.sleepy >= 10) {
      this.gameOver();
      console.log("Game Over - your cat found a new home");
    };
  },

  boredomTimer: null,
  startBoredomTimer() {
    this.boredomTimer = setInterval(this.increaseBoredom.bind(game), 1750)
  },

  increaseBoredom() {
    this.boredom++ ;
    $("#boredom").val(game.boredom);
    if (this.boredom >= 10) {
      this.gameOver();
      console.log("Game Over - your cat found a new home");
    };
  },

  /* === Buttons === */
  decreaseHunger() {
    this.hunger-- ;
    $("#hunger").val(game.hunger);
  },

  decreaseSleepy() {
    this.sleepy--;
    $("#sleepy").val(game.sleepy);
  },
  
  decreaseBoredom() {
    this.boredom--;
    $("#boredom").val(game.boredom);
  },

  /* === Game Over === */
  gameOver() {
    $("#gameOverModal").css("visibility", "visible");
    clearInterval(this.ageTimer);
    clearInterval(this.hungerTimer);
    clearInterval(this.sleepyTimer);
    clearInterval(this.boredomTimer);
    if(this.age >= 20){
      $("#gameOverMsg").append("<br>your cat lived a long happy life and has crossed the rainbow bridge");
    } else {
      $("#gameOverMsg").append("<br>your cat found a new home");
    };
  },

}

  /* === Event Listeners === */
  $("#submitName").click(function(){
    game.start();
  })

  $("#feedMe").click(function(){
    game.decreaseHunger();
  })

  $("#nap").click(function(){
    game.decreaseSleepy();
  })

  $("#play").click(function(){
    game.decreaseBoredom();
  })

  $("#playAgain").click(function(){
    location.reload();
    //return false;
  })


// adolescent: https://images.unsplash.com/photo-1608460474143-03976576ef9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2787&q=80

// adult: https://images.unsplash.com/photo-1614992605446-375b99e9ef75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2609&q=80

// senior: https://images.unsplash.com/photo-1587642808058-f2380dc5cbc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2942&q=80