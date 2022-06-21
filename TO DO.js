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
    List sorting
    allow sorting by: score asc/desc

Authentication input
    (Intro page form) 
    Add token input ( student ID ) 
    remove email from the form
    add token input field (text entry, just required, no special validations)
    Upon form submission validate entered token
    POST /check-token
My score
  On game finished
    submit player score and name (POST /scores)
    sign with auth token (auth-token header)
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
