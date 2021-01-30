// new user's username and password and save it. Display the usernames of all existing users in a list.
// - Users should be stored in array of User objects
// - Array need to have one admin user by default when the application is started
// - User need to have at least 3 properties: Username, Password and isAdmin
// 2. Write a simple login program that will require user's username and password to be entered. Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app"). 
// 3. Add an option for logging out.
// 4. Add some further validation to all input fields for the usernames and passwords
// - The user has to enter both username and password
// - Register or login should not proceed with empty inputs
// - Username needs to include more than 3 characters
// - Password has to be longer than 6 characters
// 5. Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin). Display all usersnames and passwords in a list or table.


    // Objasnuvanje
// 1. 2 froms for login and register, one button for logout and one div which will have all users
// 2. Declaration and initialization of global variables (arraysOfAllUsers, currentUser)
// 3. events for each button (login, register, logout) and function
// 4. create function constructor User
// 5. Register: get the inpit or radio button value and check if they are empty or password less than 6 characters or username is less than 3 characters. If statment is correct, creat the user like let newUser = new User(username, password, isAdmin); Once it is created add it to the array.
// 6. Login: check if the two input fields values are empty? if not, check if there is username in the arrayOfAllUsers and if the password for that user is same with the password in the input field value. Once it is found currentUser should be the user that is found.
// 7. Logout: if currentUser !== null, than currentUser = {}
// 8. check if currentUser is admin and if it is admin show all users from arrayOfAllUsers in the div

