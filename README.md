Wed, 9/27

First thing I did was write the game logic in logic.js.  I have to manually enter an array, i.e. 'const array = [x, o, o, o, x, o, o, o, o]', and my code will log "true" or "false" for each of the 8 possible winning combinations (3 rows, 3 columns & 2 diagonals.)

Next I used index.html & index.scss to build the 3x3 grid, viewable in a browser.  I used some bootstrap code.

Then I added .click() to index.js so that, when the user clicks in a certain box, "you clicked box[]" logs to the console.

After much blood, sweat, and foul language emitted, I was able to use the .click function mentioned above to write a function (called chooseLetter) that places an X, then O, then X, etc.  I then used the the game logic that I wrote at the very beginning to log "WIN!" in the console if there are 3 X's or 3 O's in a row.


Thu, 9/28

Step 1: display a message stating who won, if applicable, or stating that there was a draw.

Added logic to prevent placing an 'X' or 'O' where one already exists.

Created all the authentication stuff - sign up, sign in, change password, sign out.
