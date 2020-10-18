# Software-Dev-Test
This is a Sotware Development Test provided by Laureate International Universities with the sole purpose of testing the web development skills of newcomers with technologies such as React, Graphql and any database of personal preference. 

Technologies used for the development of this test: 
-ReactJS as a front-end framework. 
-GraphQL as a middleware for queries and such.
-mongoDB Atlas for database and collections of data.

Steps to run project:
1. Open the following mongoDB Atlas cloud service https://cloud.mongodb.com/v2/5f89d42df8d3991eb881a4c9#metrics/replicaSet/5f89d628946d31312a5d763c/explorer/%3Cdbname%3E and sign in with the credentials provided by alejandro-g. 

2. Open your cmd and go to the directory where you downloaded the project.

3. Once inside the project directory, move inside the "server" folder and use the following command: "nodemon app". This command will allow GraphQL to establish a connection with the mongo collection and will allow the application to do the necessary queries. NOTE: If the command is not recognized use "npm install nodemon -g". This will allow you to use the "nodemon app" command. Once you run the command you'll see two console logs letting you know that its listening to the port 4000 (which is graphql's port) and another letting you know that you're connected to the mongoDB collection. 

4. Once logged in the mongoDB Atlas cloud service and having the cmd with the "nodemon app" command running in the background, you're all set to test the react application. To test it out simply click on one of the titles listed on the webpage and it should display all the necessary details of that post on another component just below. 
https://alejandro-g.github.io/Software-Dev-Test/
