<!-- ## **Technical Requirements**

Your app must:

- **HAVE ITS OWN REPO, under your github account. NOT A FORK.** -- DONE
- **Git 20+ commits** Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed.
- **Include Wireframes and User Stories in the README**
- **Wireframe:** - Basically draw out what your game will look like—very different way it could look. You can use paper or any wireframe tool you find online.
- **User Stories** - Wording should center around how a user interacts with your game, for example:
    1. The user click starts and the level starts
    2. When the user hits the `f key` a fire ball is catuplulated at a target.
- **Render a game in the browser**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **JavaScript or jQuery** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it (we will show you how)
- Use **semantic markup** for HTML and CSS (adhere to best practices)
- Be reasonably complex

---

## **Necessary Deliverables**

- A working MVP (minium viable product) what is the absolute bare minimum functionality for you game, do not make it more complex until you've completed your MVP.
- A **working game, built by you**, hosted somewhere on the internet
- A **link to your hosted working game** in the URL section of your Github repo
- A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project.
- **A `README.md` file** with an explanation of what the project is and why you made it, your user stories, explanations of the technologies used, the approach taken, installation instructions, unsolved problems, the other components previously indicated (if applicable). In this project, also include your wireframes in the readme.
- A 10 minute presentation to your classmates and instructor, illustrating:
    - App functionality
    - Triumphs
    - Challenges
    - Words of Wisdom
    - Code snippets 
  
  ## **Icebox**
  - If status levels reach 10, cat runs away and finds a new owner; if age reaches 20, cat goes to kitty heaven
  - Feed and play actions randomly select different elements (feed: kibble, fish, lasagna) (play: mouse on string, laser light, catnip time)
  - Select cat gender/pronouns
  - Status bars change color based on current value: 0-4 green, 5-7 goldenrod, 8-10 red

=== Timeline ===
Tuesday: Finish planning, build repo, set up static site; start building objects
Wednesday: Set up timers
Thursday: Styling & timers
Friday: 10:00 am deployment



=== User Stories ===

User is greeted with a modal stating "Your new kitten is so happy to meet you! What are you going to name it?" with a textbox to enter cat's name. Once name is entered, modal disappears and the game begins on a screen with a kitten in the middle, status indicators of hungry, sleepy, and bored set to zero, the cat's name and age, and three action buttons to feed, turn off lights, and play.
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

Ice-box:
=== If any status level reaches 10, modal pops up to tell user  "GAME OVER. [cat name] ran away to find a new family!"
=== If cat age reaches 20, modal pops up to tell user "You provided [cat name] with a good life, but now it's time to cross the rainbow bridge"




  -->

