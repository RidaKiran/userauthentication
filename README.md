Step 1: Create an account First, enter the user's information into the database. There are six fields to complete: first name, last name, email, age, password, and confirm password. Fill out the form in JSON format at localhost:3000/auth/register. this action adds the user to the database.


Second step: LOGIN USER

A user can log in using this API: http://localhost:3000/auth/login by providing their first name, last name, and password. After receiving an access token, they can also log in using the bearer token method.



3. View the profile

When you insert a token into the bearer token function, you can verify the user id and user name on this api at http://localhost:3000/auth/profile.



4th step: Log off

You can log out of a user by using this api: http://localhost:3000/auth/logout. If you use step #3, "Profile View," after logging out, you won't be able to see any user information, but if you log in again, you will be able to see user information.


Nest is [MIT licensed](LICENSE).
