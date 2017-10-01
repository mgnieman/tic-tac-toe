Wirefreames:
User Stories:  https://docs.google.com/document/d/1uclZv44bZ9w5SOAc8eEJQnL5TsfcuZ2BIxXNMsxZ6WI/edit
Technologies Used:  JavaScript, jQuery, API, AJAX

Wed, 9/27

First thing I did was write the game logic in logic.js.  I have to manually enter an array, i.e. 'const array = [x, o, o, o, x, o, o, o, o]', and my code will log "true" or "false" for each of the 8 possible winning combinations (3 rows, 3 columns & 2 diagonals.)

Next I used index.html & index.scss to build the 3x3 grid, viewable in a browser.  I used some bootstrap code.

Then I added .click() to index.js so that, when the user clicks in a certain box, "you clicked box[]" logs to the console.

After much blood, sweat, and foul language emitted, I was able to use the .click function mentioned above to write a function (called chooseLetter) that places an X, then O, then X, etc.  I then used the the game logic that I wrote at the very beginning to log "WIN!" in the console if there are 3 X's or 3 O's in a row.


Thu, 9/28

Step 1: display a message stating who won, if applicable, or stating that there was a draw.x

Added logic to prevent placing an 'X' or 'O' where one already exists.

Created all the authentication stuff - sign up, sign in, change password, sign out.


Fri, 9/29

Added a "Play again?" button.  Unfortunately, it displays at all times.  If I have time, that's one of the first things I'll fix.  I did make a fix while implementing the button however.  Previously, when the game ended it would restart automatically.  Now the X's & O's remain displayed until the "Play again?" button is selected.  Huge improvement.

Board is now hidden when user first lands on the page.  Upon successful login, the board is displayed.

I'm now saving every move in the API.  The data object contains gameId, username/email & over (true or false - meaning the game is over or still in progress).


Sat, 9/30

Added a "Total Games Played" button that displays the total number of games played by a particular user.
