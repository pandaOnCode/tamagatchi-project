# tamagatchi-project

>Goal: Take care of doge and take it to the moon.
>Details: The game requires the user to keep all the stats alive. Stats decrease with time. If your doge survives for some time, it will evolve and new stats will be added. Take care of  Doge's stats and you can take it to the moon. Have fun playing the game!

>Planning the development

Title screen introducing the game. Has a text box to take in user's name. Assigns name to a variable which is assigned to an HTML element.

Game starts with startgame function (starts with a button event listener). The function hides the intro screen and introduces the game object. It sets an increase timer function that increases in increments of 1 second. element. Runs dogerun function within doge object that performs a function every .5 second.

Our main object in the game is Doge. Doge has an initial property value of dollar. More values are to be added later as certain conditions are met. 

Crash function within the doge object is the one being invoked with the timer. Crash function decreases property values by 1 every .5 second. It also updates corresponding HTML elements with real time stats (doge object property values). Wihin CSS, I create progress bars that can change with doge properties. They decrease with time and increase with button clicks. Crash function updates the progress bar with increments of 5% increase with every +1/-1 stat value. Within crash properties are checked if they reach 0. If they do alive property is assigned to false. Alive property can be used to check whether game goes to next level or a game over screen. The if statment shows the hidden element of game over screen and clears the two set intervals before.

Game over screen contains and a widget that displays the real time price of doge. 

The increase timer function check whether the alive varaibale is still true and plays a function at intervals of 10, 20, 30, 40 and 50 seconds. At 50 seconds if alive is true. Game is hidden, intervals are cleared, a background of doge on the moon shows up, and some victory music is appended.

The functions that play in increments of 10 seconds are responsible for assigning new properties to the doge object and resetting the property values. Proerty values are assigned to a value of 18. 

Level 2 appends hodl value, level 3 appends reddit value, level 4 appends tweet value, level 5 appends diamond value. Each function changes the picture and also adds an event listener button that increases property values by 1.

