/*
TO DO:

  x  ASC/DSC order of logs !


Reading and displaying highscores
  x  Read current highscores
  x  GET /scores/{game}
  x  Display highscores (component):
  x  List with entries (name - score pairs)
  x  show only top 10 entries
  x  List sorting
  x  allow sorting by: score asc/desc

Authentication input (Intro page form) 
  x  Add token input ( student ID ) 
  x  remove email from the form
  x  add token input field (text entry, just required, no special validations)
  x  Upon form submission validate entered token
  x  POST /check-token
My score
On game finished
  x  submit player score and name (POST /scores)
  x  sign with auth token (auth-token header)
Display my scores list (component): 
  x  filter data (only my entries)
  x  sorting by score asc/desc
  ?  Update score lists every 30 seconds

              Scores refreshing - RxJS way
                  Use interval()
                  Chain with concatMap() or switchMap()
                  Allow enabling/disabling auto refreshing
                  - checkbox, variable and RxJS filter()
                  Remember to cleanup

Parameters
  x   Extend game route to accept parameter: 'colors'
   Intro page
  x    Allow player to select color palette: normal, high contrast
  x    Pass selected color palette through route parameter
   Game page
  x    Add support for 'high contrast' color palette
  x    Read route 'colors' param
  x    Bind route param to game component ([] or [ngClass])
  x  extra: allow color palette switching from game page (keep the url synced)
Guards
  Player data service modifications 
  x  Should expose interface indicating whether there is a player data inside or not (flag, check(), whatever)
  ?  Visiting intro page should clear data stored in player data service ?? line 60 says store
  Guard creation  
  x  ng generate service playerDataGuard
  x  Inject player data service
  x  Implement CanActivate interface
  x  Use player data service in 'decision making process'
  x    Player data NOT EMPTY: allow navigation
  x    Player data EMPTY: redirect to intro page
  x  Add created guard to game page route
  x Hint: player data service should use local storage for player data persisting


Intro page - transition to reactive form
  x  Player name 
  x  - required  
  x  - min length 5 chars
  x  Auth code input 
  x  - required
  x  - min length 4 chars
  x  Color selection
  x  with initial value
  x  upon change make some element either colored or black&white
  x  extra: store user input in local storage and fill the form for returning users (dont store auth code)
*/
