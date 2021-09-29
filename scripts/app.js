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
Modal disappears and the user appears at a screen with a kitten in the middle, status indicators of hungry, sleepy, and bored set to zero, the cat's name and age, and three action buttons to feed, turn off lights, and play.
Cat's age increases by one year each minute.
Hunger status increases by one point every 5 seconds
Sleepiness status increases by one point every 12 seconds
Boredom status increases by one point every 8 seconds
When feed action is clicked, hunger status decreases by 4 points
When turn off lights action is clicked, sleepiness status decreases by 5 points
When play action is clicked, boredom status decreases by 3

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

  // Starting values
  /* 
  Name: null
  Age: 0
  Hunger: 0
  Sleepy: 0
  Boredom: 0
  Image: kitten
  */


const game = {
    /* === Game Values === */
  name: null,
  age: 0,
  hunger: 0,
  sleepy: 0,
  boredom: 0,
  
  image: "kitten",


  /* === Game Logic === */
  start(event){
    console.warn("=== Keep your precious kitty alive! ===")
    this.startAgeTimer();
    this.startHungerTimer();
    this.startSleepyTimer();
    this.startBoredomTimer();
  },

  /* === Timers === */
  ageTimer: null,
  startAgeTimer() {
    this.ageTimer = setInterval(this.increaseAge.bind(game), 30000)
  },

  increaseAge() {
    this.age++ ;
    $("#catAge").text(game.age);
    if (this.age >= 20) {
      console.log("Game Over - your cat lived a long life and has crossed the rainbow bridge");
    }
  },

  hungerTimer: null,
  startHungerTimer() {
    this.hungerTimer = setInterval(this.increaseHunger.bind(game), 6000)
  },

  increaseHunger() {
    this.hunger++ ;
    $("#hunger").val(game.hunger);
    if (this.hunger >= 10) {
      console.log("Game Over - your cat found a new home")
    } 
  },

  sleepyTimer: null,
  startSleepyTimer() {
    this.sleepyTimer = setInterval(this.increaseSleepy.bind(game), 12000)
  },

  increaseSleepy() {
    this.sleepy++ ;
    $("#sleepy").val(game.sleepy);
    if (this.sleepy >= 10) {
      console.log("Game Over - your cat found a new home")
    } 
  },

  boredomTimer: null,
  startBoredomTimer() {
    this.boredomTimer = setInterval(this.increaseBoredom.bind(game), 8000)
  },

  increaseBoredom() {
    this.boredom++ ;
    $("#boredom").val(game.boredom);
    if (this.boredom >= 10) {
      console.log("Game Over - your cat found a new home")
    } 
  },

  /* === Buttons === */

  /* 
    add event listener to buttons
      - query the dom to grab buttons and apply a method 
      - call the method handlePoke -> will recieve an event param -> use a bind for the value of this 
      - FIRST we want to log the click
      - SECOND adjust the value of status related to the button that was clicked
 
  
  */
    $("#play").click(function() {
      alert( "Handler for .click() called." );
    }),

/*     handlePoke(event) {
      const $feed = $(event.target);
    } */
  }



/* 
  handlePoke(event) {
    const $square = $(event.target);

    if (!$square.hasClass("poked")) {
      console.log("Poked the square", event.target);
      $square.css("opacity", 0.5).addClass("poked");
      // $(event.target).off("click", this.handlePoke); this will not work because the event listener is NOT on the element it is on the parent
*/

  /* === Event Listeners === */



/* 

game.button.click(game.start.bind(game));

$(".squares").on("click", ".square", game.handlePoke.bind(game));*/

}

// always store your setInterval into a variable and this will start it

// how to stop a timer
// clearInterval(timer);


