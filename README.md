# Polling-Api
Polling Api using Supabase | Postgress Sql | express js | node js

## Features
Create a question  <br>
Add options to a question  <br>
Add a vote to an option of question  <br>
Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)  <br> 
Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)  <br>
View a question with it’s options and all the votes given to it  <br>
 
## Required Routes
/questions/create (To create a question) <br>
/questions/:id/options/create (To add options to a specific question)  <br>
/questions/:id/delete (To delete a question)  <br> 
/options/:id/delete (To delete an option)  <br>
/options/:id/add_vote (To increment the count of votes)  <br>
/questions/:id (To view a question and it’s options)  <br>
