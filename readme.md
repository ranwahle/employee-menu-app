 # Employee menu app
 
 this app is made for my learning sake only
 
 
 ### Run the app 
    $ npm run install-client
    $ npm run build-client
    $ npm start 
    (This should build the client app, and run the server) 
 
 ### Run from docker
    $ docker-compose up
   Browse [http://localhost:4000](http://localhost:4000)
    
 ### This app uses
    1. psotgres DB
    2. node.js server side 
    3. Angular 7, for the client side
    
    
 ## Docker container is published
    ranwahle/get-started:employee0menu
    
 ## API call implemented
    All CRUD operations on employee 
    
 
 ### Design that was not implemented
    1. Security, There is an authentication middleware that does nohing so far, 
       however, there is a placeholder for it in ever API call 
    2. Food menu items DB and employee DB are to be seperated for regulation purposes. 
        
        
 
   