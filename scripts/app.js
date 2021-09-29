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

    /* === Declaring variables === */

    /* const $catName = ;
    const $catAge = ;
    const $hungerStatus = ;
    const $sleepyStatus = ;
    const $boredomStatus = ; */

    /* === Game Logic === */
    start(event){
        console.warn("=== Keep your precious pet alive! ===");
    },
  
    timer: null,
    startAgeTimer() {
      this.timer = setInterval(this.increaseAge.bind(game), 60000)
    },

    increaseAge() {
      this.age++ ;
      $("#catAge").text(game.age);
      if (this.age >= 20) {
        console.log("Game Over");
      }
    }



  }

/*   setInterval(function(){ 
	console.log("Oooo Yeaaa!");
}, 2000);

   const updateTime = function updateTime() {
    console.log("A second has passed");
  };
  
  timer: null,
  startTimer() {
    this.timer = setInterval(this.reduceTime.bind(game), 1000);
  },

  reduceTime() {
    this.time--;
    $("#timer").text(`timer: ${game.time}s`);
    if (this.time <= 0) {
      this.round++;
      this.setUpRound();
    }
  }, */


  // always store your setInterval into a variable and this will start it


    


 

  const hungerTimer = setInterval(function(){
    console.log("getting hungrier");
  }, 5000);

  const sleepyTimer = setInterval(function(){
    console.log("getting sleepier");
  }, 12000);

  const boredTimer = setInterval(function(){
    console.log("getting booorrrreeeddd");
  }, 8000);
  
  // how to stop a timer
  clearInterval(timer);
  