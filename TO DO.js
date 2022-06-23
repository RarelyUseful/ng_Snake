/* CMD: 
npm install -g @angular/cli
  // -g instaluje pakiety globalnie

ng version || ng v  //sprawdza poprawność instalacji
ng new Project_name
cd Project-name
ng serve //uruchamia aplikacje
ng serve -o || ng serve --open //uruchamia od razu aplikację w oknie przeglądarki

ng g module My_module // tworzy nowu moduł
ng g component My_comp // ...
ng g pipe My_pipe //...

ng build // tworzy folder ktorego zawartosc mozemy wrzucic na FTP
--------------------------------------------------------------------------------
TO DO:

    ASC/DSC order of logs !


Reading and displaying highscores
  x  Read current highscores
  x  GET /scores/{game}
  x  Display highscores (component):
  x  List with entries (name - score pairs)
  x  show only top 10 entries
  x  List sorting
  x  allow sorting by: score asc/desc

Authentication input
    (Intro page form) 
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
    filter data (only my entries)
    sorting by score asc/desc
    Update score lists every 30 seconds

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
  ?  Visiting intro page should clear data stored in player data service ?? line 89
  Guard creation  
  x  ng generate service playerDataGuard
  x  Inject player data service
  x  Implement CanActivate interface
  x  Use player data service in 'decision making process'
  x    Player data NOT EMPTY: allow navigation
  x    Player data EMPTY: redirect to intro page
  x  Add created guard to game page route
  Hint: player data service should use local storage for player data persisting


Intro page - transition to reactive form
    Player name 
    - required  
    - min length 5 chars
    Auth code input 
    - required
    - min length 5 chars?
    Color selection
    with initial value
    upon change make some element either colored or black&white
    extra: store user input in local storage and fill the form for returning users (dont store auth code)
*/
